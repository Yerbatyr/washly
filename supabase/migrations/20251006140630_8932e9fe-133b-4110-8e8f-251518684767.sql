-- Explicitly deny anonymous users from reading partner leads
-- This prevents attackers from harvesting sensitive contact information
CREATE POLICY "Deny anonymous access to partner leads" 
ON public.partner_leads 
FOR SELECT 
TO anon 
USING (false);

-- Note: Only authenticated users with admin or staff roles can view leads
-- through the existing "Only admins and staff can view partner leads" policy