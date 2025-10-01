-- Create partner_leads table
CREATE TABLE public.partner_leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  city TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.partner_leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form submission)
CREATE POLICY "Anyone can submit partner leads"
ON public.partner_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view leads (for admin purposes)
CREATE POLICY "Authenticated users can view partner leads"
ON public.partner_leads
FOR SELECT
TO authenticated
USING (true);

-- Create index for better query performance
CREATE INDEX idx_partner_leads_created_at ON public.partner_leads(created_at DESC);