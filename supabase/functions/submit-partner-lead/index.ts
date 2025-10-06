import { createClient } from 'jsr:@supabase/supabase-js@2';
import { corsHeaders } from '../_shared/cors.ts';

interface PartnerLead {
  name: string;
  phone: string;
  email: string;
  city: string;
  message?: string;
}

// Simple in-memory rate limiting (resets on function cold start)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_SUBMISSIONS_PER_WINDOW = 3; // Max 3 submissions per hour per IP

function checkRateLimit(ip: string): { allowed: boolean; resetIn?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  // Clean up expired entries
  if (record && now > record.resetTime) {
    rateLimitMap.delete(ip);
  }

  const currentRecord = rateLimitMap.get(ip);

  if (!currentRecord) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }

  if (currentRecord.count >= MAX_SUBMISSIONS_PER_WINDOW) {
    const resetIn = Math.ceil((currentRecord.resetTime - now) / 60000); // minutes
    return { allowed: false, resetIn };
  }

  currentRecord.count++;
  return { allowed: true };
}

function validateInput(data: PartnerLead): { valid: boolean; errors?: string[] } {
  const errors: string[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    errors.push('Name must be between 2 and 100 characters');
  }

  // Phone validation (basic)
  if (!data.phone || data.phone.length < 10 || data.phone.length > 20) {
    errors.push('Phone must be between 10 and 20 characters');
  }

  // Email validation (basic)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email) || data.email.length > 255) {
    errors.push('Invalid email address');
  }

  // City validation
  if (!data.city || data.city.trim().length < 2 || data.city.length > 100) {
    errors.push('City must be between 2 and 100 characters');
  }

  // Message validation (optional)
  if (data.message && data.message.length > 1000) {
    errors.push('Message must be less than 1000 characters');
  }

  return errors.length > 0 ? { valid: false, errors } : { valid: true };
}

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0] || 
                     req.headers.get('x-real-ip') || 
                     'unknown';

    // Check rate limit
    const rateLimitResult = checkRateLimit(clientIp);
    if (!rateLimitResult.allowed) {
      return new Response(
        JSON.stringify({ 
          error: `Too many submissions. Please try again in ${rateLimitResult.resetIn} minutes.` 
        }),
        { 
          status: 429, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse request body
    const leadData: PartnerLead = await req.json();

    // Validate input
    const validation = validateInput(leadData);
    if (!validation.valid) {
      return new Response(
        JSON.stringify({ error: 'Invalid input', details: validation.errors }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Create Supabase client with service role for database insert
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Insert lead into database
    const { error } = await supabase
      .from('partner_leads')
      .insert([{
        name: leadData.name.trim(),
        phone: leadData.phone.trim(),
        email: leadData.email.trim().toLowerCase(),
        city: leadData.city.trim(),
        message: leadData.message?.trim() || null,
      }]);

    if (error) {
      console.error('Database error:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to submit lead' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Lead submitted successfully' }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
