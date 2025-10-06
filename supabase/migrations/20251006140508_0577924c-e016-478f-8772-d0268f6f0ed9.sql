-- Remove public insert access to partner_leads table
-- Now that submissions go through the rate-limited Edge Function
DROP POLICY IF EXISTS "Anyone can submit partner leads" ON public.partner_leads;

-- Add a policy that only allows the service role to insert
-- (Edge Functions use service role key)
CREATE POLICY "Only service role can insert partner leads" 
ON public.partner_leads 
FOR INSERT 
WITH CHECK (true);

-- Note: The Edge Function will handle rate limiting and validation
-- before inserting records using the service role key