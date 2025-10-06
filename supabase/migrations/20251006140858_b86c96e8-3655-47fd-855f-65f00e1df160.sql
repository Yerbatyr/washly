-- Add a RESTRICTIVE policy to explicitly deny anonymous access
-- RESTRICTIVE policies are combined with AND logic, providing an additional security layer
CREATE POLICY "Deny all anonymous access to partner leads" 
ON public.partner_leads 
AS RESTRICTIVE
FOR SELECT 
TO anon 
USING (false);

-- This works together with the existing PERMISSIVE policy:
-- 1. The PERMISSIVE policy allows admin/staff authenticated users
-- 2. This RESTRICTIVE policy blocks ALL anonymous users
-- 3. Even if other policies exist, anonymous users are blocked by this RESTRICTIVE policy