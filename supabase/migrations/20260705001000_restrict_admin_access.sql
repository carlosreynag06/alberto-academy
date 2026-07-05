create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  email text not null unique,
  created_at timestamptz not null default now()
);

alter table public.admin_users enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

revoke all on function public.is_admin() from public;
grant execute on function public.is_admin() to authenticated;

drop policy if exists "Authenticated users can read own admin profile" on public.admin_users;
create policy "Authenticated users can read own admin profile"
on public.admin_users
for select
to authenticated
using (user_id = auth.uid());

insert into public.admin_users (user_id, email)
select id, email
from auth.users
where lower(email) = lower('carlosreynag0605@gmail.com')
on conflict (user_id) do update set
  email = excluded.email;

drop policy if exists "Authenticated admin can manage leads" on public.leads;
create policy "Authenticated admin can manage leads"
on public.leads
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Authenticated admin can manage students" on public.students;
create policy "Authenticated admin can manage students"
on public.students
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());
