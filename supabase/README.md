# Alberto Academy Supabase Workflow

This project uses Supabase CLI migrations for the CRM backend.

## Local CLI

Install the pinned Supabase CLI binary:

```powershell
npm run supabase:install
```

Verify it:

```powershell
npm run supabase -- --version
```

## Remote Project

Project ref:

```text
rryggmugbpxweqqiceqo
```

Login to Supabase:

```powershell
npm run supabase -- login
```

Link this repo to the remote project:

```powershell
npm run db:link
```

Push migrations:

```powershell
npm run db:push
```

## Migrations

The initial CRM schema and seed rows live in:

```text
supabase/migrations/20260705000000_initial_crm_schema.sql
```

The migration creates:

- `public.leads`
- `public.students`
- row-level security policies
- initial mock lead and student records
