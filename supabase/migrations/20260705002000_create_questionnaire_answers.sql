create table if not exists public.questionnaire_answers (
  question_id integer primary key check (question_id between 1 and 105),
  category_title text not null,
  question_text text not null,
  answer text not null default '',
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists questionnaire_answers_set_updated_at on public.questionnaire_answers;
create trigger questionnaire_answers_set_updated_at
before update on public.questionnaire_answers
for each row execute function public.set_updated_at();

alter table public.questionnaire_answers enable row level security;

drop policy if exists "Authenticated admin can read questionnaire answers" on public.questionnaire_answers;
create policy "Authenticated admin can read questionnaire answers"
on public.questionnaire_answers
for select
to authenticated
using (public.is_admin());

drop policy if exists "Authenticated admin can insert questionnaire answers" on public.questionnaire_answers;
create policy "Authenticated admin can insert questionnaire answers"
on public.questionnaire_answers
for insert
to authenticated
with check (public.is_admin());

drop policy if exists "Authenticated admin can update questionnaire answers" on public.questionnaire_answers;
create policy "Authenticated admin can update questionnaire answers"
on public.questionnaire_answers
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());
