-- Alberto Academy Supabase schema
-- Run this in Supabase SQL Editor for project rryggmugbpxweqqiceqo.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  record_id text not null unique default ('LD-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8))),
  full_name text not null,
  email text not null,
  phone text,
  interest text not null default 'Trial lesson',
  level text not null default 'Not sure' check (level in ('Beginner', 'Intermediate', 'Advanced', 'Not sure')),
  status text not null default 'New' check (status in ('New', 'Contacted', 'Trial booked', 'Won', 'Lost')),
  source text not null default 'Website form',
  submitted_at date not null default current_date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.students (
  id uuid primary key default gen_random_uuid(),
  record_id text not null unique default ('ST-' || upper(substr(replace(gen_random_uuid()::text, '-', ''), 1, 8))),
  full_name text not null,
  email text not null,
  phone text,
  program text not null default 'Conversation Fluency',
  level text not null default 'Beginner' check (level in ('Beginner', 'Intermediate', 'Advanced')),
  status text not null default 'Active' check (status in ('Active', 'Paused', 'Completed')),
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  last_session date,
  next_session date,
  goals text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists leads_set_updated_at on public.leads;
create trigger leads_set_updated_at
before update on public.leads
for each row execute function public.set_updated_at();

drop trigger if exists students_set_updated_at on public.students;
create trigger students_set_updated_at
before update on public.students
for each row execute function public.set_updated_at();

alter table public.leads enable row level security;
alter table public.students enable row level security;

drop policy if exists "Public can submit leads" on public.leads;
create policy "Public can submit leads"
on public.leads
for insert
to anon
with check (
  status = 'New'
  and source = 'Website form'
);

drop policy if exists "Authenticated admin can manage leads" on public.leads;
create policy "Authenticated admin can manage leads"
on public.leads
for all
to authenticated
using (true)
with check (true);

drop policy if exists "Authenticated admin can manage students" on public.students;
create policy "Authenticated admin can manage students"
on public.students
for all
to authenticated
using (true)
with check (true);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);
create index if not exists students_created_at_idx on public.students (created_at desc);
create index if not exists students_status_idx on public.students (status);

insert into public.leads
  (record_id, full_name, email, phone, interest, level, status, source, submitted_at, notes)
values
  ('LD-001', 'Mariana Reyes', 'mariana.reyes1@email.com', '+1 (809) 555-1000', 'English conversation', 'Beginner', 'New', 'Website form', '2026-06-28', 'Wants to speak with more confidence at work.'),
  ('LD-002', 'Carlos Reyes', 'carlos.reyes2@email.com', '+1 (809) 555-1001', 'Business English', 'Intermediate', 'Contacted', 'Instagram', '2026-06-27', 'Asked about flexible scheduling and trial lesson details.'),
  ('LD-003', 'Paola Reyes', 'paola.reyes3@email.com', '+1 (809) 555-1002', 'Exam prep', 'Advanced', 'Trial booked', 'WhatsApp', '2026-06-26', 'Needs English for travel and everyday communication.'),
  ('LD-004', 'Luis Reyes', 'luis.reyes4@email.com', '+1 (809) 555-1003', 'Academic writing', 'Not sure', 'Won', 'Referral', '2026-06-25', 'Interested in interview preparation and pronunciation.'),
  ('LD-005', 'Camila Reyes', 'camila.reyes5@email.com', '+1 (809) 555-1004', 'Spanish for foreigners', 'Beginner', 'Lost', 'Facebook', '2026-06-24', 'Requested information about group classes.'),
  ('LD-006', 'Daniel Reyes', 'daniel.reyes6@email.com', '+1 (809) 555-1005', 'Travel English', 'Intermediate', 'New', 'Website form', '2026-06-23', 'Wants to speak with more confidence at work.'),
  ('LD-007', 'Sofia Reyes', 'sofia.reyes7@email.com', '+1 (809) 555-1006', 'English conversation', 'Advanced', 'Contacted', 'Instagram', '2026-06-22', 'Asked about flexible scheduling and trial lesson details.'),
  ('LD-008', 'Andres Reyes', 'andres.reyes8@email.com', '+1 (809) 555-1007', 'Business English', 'Not sure', 'Trial booked', 'WhatsApp', '2026-06-21', 'Needs English for travel and everyday communication.'),
  ('LD-009', 'Valeria Reyes', 'valeria.reyes9@email.com', '+1 (809) 555-1008', 'Exam prep', 'Beginner', 'Won', 'Referral', '2026-06-20', 'Interested in interview preparation and pronunciation.'),
  ('LD-010', 'Miguel Reyes', 'miguel.reyes10@email.com', '+1 (809) 555-1009', 'Academic writing', 'Intermediate', 'Lost', 'Facebook', '2026-06-19', 'Requested information about group classes.')
on conflict (record_id) do update set
  full_name = excluded.full_name,
  email = excluded.email,
  phone = excluded.phone,
  interest = excluded.interest,
  level = excluded.level,
  status = excluded.status,
  source = excluded.source,
  submitted_at = excluded.submitted_at,
  notes = excluded.notes;

insert into public.students
  (record_id, full_name, email, phone, program, level, status, progress, last_session, next_session, goals, notes)
values
  ('ST-001', 'Mariana Reyes', 'mariana.reyes@student.com', '+1 (829) 555-2000', 'Conversation Fluency', 'Beginner', 'Active', 28, '2026-06-26', '2026-07-01', 'Improve speaking confidence for meetings and client calls.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-002', 'Luis Mendez', 'luis.mendez@student.com', '+1 (829) 555-2001', 'Grammar & Writing', 'Intermediate', 'Paused', 37, '2026-06-25', '2026-07-02', 'Prepare for interviews with stronger answers and vocabulary.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-003', 'Sofia Jimenez', 'sofia.jimenez@student.com', '+1 (829) 555-2002', 'Academic English', 'Advanced', 'Completed', 46, '2026-06-24', '2026-07-03', 'Build grammar accuracy and clearer writing habits.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-004', 'Miguel Morales', 'miguel.morales@student.com', '+1 (829) 555-2003', 'Career English', 'Beginner', 'Active', 55, '2026-06-23', '2026-07-04', 'Practice real conversations for travel and daily life.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-005', 'Natalia Herrera', 'natalia.herrera@student.com', '+1 (829) 555-2004', 'Conversation Fluency', 'Intermediate', 'Paused', 64, '2026-06-22', '2026-07-05', 'Improve academic vocabulary and presentation structure.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-006', 'Diego Reyes', 'diego.reyes@student.com', '+1 (829) 555-2005', 'Grammar & Writing', 'Advanced', 'Completed', 73, '2026-06-21', '2026-07-06', 'Improve speaking confidence for meetings and client calls.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-007', 'Isabel Mendez', 'isabel.mendez@student.com', '+1 (829) 555-2006', 'Academic English', 'Beginner', 'Active', 82, '2026-06-20', '2026-07-07', 'Prepare for interviews with stronger answers and vocabulary.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-008', 'Carlos Jimenez', 'carlos.jimenez@student.com', '+1 (829) 555-2007', 'Career English', 'Intermediate', 'Paused', 91, '2026-06-19', '2026-07-08', 'Build grammar accuracy and clearer writing habits.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-009', 'Camila Morales', 'camila.morales@student.com', '+1 (829) 555-2008', 'Conversation Fluency', 'Advanced', 'Completed', 37, '2026-06-18', '2026-07-09', 'Practice real conversations for travel and daily life.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.'),
  ('ST-010', 'Andres Herrera', 'andres.herrera@student.com', '+1 (829) 555-2009', 'Grammar & Writing', 'Beginner', 'Active', 46, '2026-06-17', '2026-07-10', 'Improve academic vocabulary and presentation structure.', 'Mock student profile. Replace with real onboarding notes after Supabase is connected.')
on conflict (record_id) do update set
  full_name = excluded.full_name,
  email = excluded.email,
  phone = excluded.phone,
  program = excluded.program,
  level = excluded.level,
  status = excluded.status,
  progress = excluded.progress,
  last_session = excluded.last_session,
  next_session = excluded.next_session,
  goals = excluded.goals,
  notes = excluded.notes;
