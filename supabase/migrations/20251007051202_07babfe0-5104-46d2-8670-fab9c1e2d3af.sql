-- Add explicit DENY policies for anonymous users to protect sensitive PII data

-- ============================================
-- PARTNER LEADS TABLE - Deny all anonymous access
-- ============================================

-- Deny anonymous SELECT access to partner leads (prevents data scraping)
CREATE POLICY "Deny anonymous SELECT on partner leads"
ON public.partner_leads
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

-- Deny anonymous INSERT to partner leads (belt-and-suspenders, service role only)
CREATE POLICY "Deny anonymous INSERT on partner leads"
ON public.partner_leads
AS RESTRICTIVE
FOR INSERT
TO anon
WITH CHECK (false);

-- Deny anonymous UPDATE to partner leads
CREATE POLICY "Deny anonymous UPDATE on partner leads"
ON public.partner_leads
AS RESTRICTIVE
FOR UPDATE
TO anon
USING (false)
WITH CHECK (false);

-- Deny anonymous DELETE from partner leads
CREATE POLICY "Deny anonymous DELETE on partner leads"
ON public.partner_leads
AS RESTRICTIVE
FOR DELETE
TO anon
USING (false);

-- ============================================
-- USER ROLES TABLE - Deny all anonymous access
-- ============================================

-- Deny anonymous SELECT access to user roles (prevents reconnaissance)
CREATE POLICY "Deny anonymous SELECT on user roles"
ON public.user_roles
AS RESTRICTIVE
FOR SELECT
TO anon
USING (false);

-- Deny anonymous INSERT to user roles
CREATE POLICY "Deny anonymous INSERT on user roles"
ON public.user_roles
AS RESTRICTIVE
FOR INSERT
TO anon
WITH CHECK (false);

-- Deny anonymous UPDATE to user roles
CREATE POLICY "Deny anonymous UPDATE on user roles"
ON public.user_roles
AS RESTRICTIVE
FOR UPDATE
TO anon
USING (false)
WITH CHECK (false);

-- Deny anonymous DELETE from user roles
CREATE POLICY "Deny anonymous DELETE on user roles"
ON public.user_roles
AS RESTRICTIVE
FOR DELETE
TO anon
USING (false);