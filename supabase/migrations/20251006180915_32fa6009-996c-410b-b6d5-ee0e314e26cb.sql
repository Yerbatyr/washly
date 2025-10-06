-- Fix user_roles RLS policies to prevent privilege escalation
-- Drop the broken recursive policy
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;

-- Create PERMISSIVE policy for admins to manage all roles
-- This allows admins to INSERT, UPDATE, and DELETE role records
CREATE POLICY "Admins can manage all roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Create RESTRICTIVE policies to explicitly deny non-admin modifications
-- These policies apply in addition to the permissive policies above
-- They ensure that ONLY admins can modify roles

-- Deny INSERT for non-admins
CREATE POLICY "Deny non-admin role creation"
ON public.user_roles
AS RESTRICTIVE
FOR INSERT
TO authenticated
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Deny UPDATE for non-admins
CREATE POLICY "Deny non-admin role updates"
ON public.user_roles
AS RESTRICTIVE
FOR UPDATE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- Deny DELETE for non-admins
CREATE POLICY "Deny non-admin role deletion"
ON public.user_roles
AS RESTRICTIVE
FOR DELETE
TO authenticated
USING (has_role(auth.uid(), 'admin'::app_role));