# Authentication Standards (Clerk)

Use this document for all authentication-related work.

## Required Standard

- Clerk is the only authentication method allowed in this app.
- Do not add or use any other auth system (custom auth, JWT session auth, NextAuth, or other providers).

## Route Protection Rules

- `/dashboard` is a protected root route and requires a logged-in user.
- If a user is not logged in and tries to access `/dashboard`, redirect to Clerk sign-in.
- If a user is logged in and tries to access `/`, redirect to `/dashboard`.

## Sign-In / Sign-Up Behavior

- Sign-in and sign-up must launch through Clerk modal flows.
- Do not implement separate custom full-page auth forms for these entry points.

## Implementation Notes

- Enforce access control at server/middleware boundaries, not only client-side checks.
- Keep redirect logic consistent so only one clear redirect path is applied per request.

## Review Checklist

- Auth uses Clerk only.
- `/dashboard` is protected.
- Logged-in users are redirected from `/` to `/dashboard`.
- Sign-in/sign-up open as Clerk modals.