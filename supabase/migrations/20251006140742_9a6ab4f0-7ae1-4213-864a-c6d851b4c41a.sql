-- Drop the restrictive policy (it's causing issues with the RLS setup)
DROP POLICY IF EXISTS "Deny anonymous access to partner leads" ON public.partner_leads;

-- Ensure the existing admin/staff policy is the ONLY SELECT policy
-- This implicitly denies anonymous users since they don't match the condition
-- Drop and recreate to ensure it's properly configured as PERMISSIVE (default)
DROP POLICY IF EXISTS "Only admins and staff can view partner leads" ON public.partner_leads;

CREATE POLICY "Only admins and staff can view partner leads" 
ON public.partner_leads 
FOR SELECT 
TO authenticated
USING (
  has_role(auth.uid(), 'admin'::app_role) OR 
  has_role(auth.uid(), 'staff'::app_role)
);

-- This setup ensures:
-- 1. Only authenticated users with admin or staff roles can SELECT
-- 2. Anonymous users are implicitly denied (no policy matches them)
-- 3. The policy is PERMISSIVE (default), allowing proper access control