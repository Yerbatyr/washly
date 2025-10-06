-- Drop both existing SELECT policies
DROP POLICY IF EXISTS "Deny all anonymous access to partner leads" ON public.partner_leads;
DROP POLICY IF EXISTS "Only admins and staff can view partner leads" ON public.partner_leads;

-- Create a single PERMISSIVE policy that grants access only to authenticated admin/staff users
-- This implicitly denies anonymous users and authenticated users without the proper role
CREATE POLICY "Only authenticated admins and staff can view partner leads" 
ON public.partner_leads 
FOR SELECT 
TO authenticated
USING (
  has_role(auth.uid(), 'admin'::app_role) OR has_role(auth.uid(), 'staff'::app_role)
);