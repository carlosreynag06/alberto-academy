"use client";

import { type FormEvent, type ReactNode, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import type { Lead, LeadStatus, Level, Student, StudentStatus } from "@/lib/crm-types";
import {
  clearAdminSession,
  deleteLeadFromSupabase,
  deleteStudentFromSupabase,
  getAdminSession,
  isSupabaseConfigured,
  listLeads,
  listStudents,
  saveLeadToSupabase,
  saveStudentToSupabase,
  signInAdmin,
} from "@/lib/supabase-rest";
import {
  BarChart3,
  BookOpenCheck,
  CalendarCheck,
  ChevronRight,
  LayoutDashboard,
  LogOut,
  MessageSquareText,
  Pencil,
  Plus,
  Save,
  Search,
  Settings,
  Trash2,
  UploadCloud,
  UserCheck,
  UserRoundPlus,
  Users,
  X,
} from "lucide-react";

type ActiveView = "dashboard" | "leads" | "students" | "courses" | "materials" | "settings";

const navItems: { label: string; view: ActiveView; icon: typeof LayoutDashboard; enabled: boolean }[] = [
  { label: "Dashboard", view: "dashboard", icon: LayoutDashboard, enabled: true },
  { label: "Leads", view: "leads", icon: UserRoundPlus, enabled: true },
  { label: "Students", view: "students", icon: Users, enabled: true },
  { label: "Courses", view: "courses", icon: BookOpenCheck, enabled: false },
  { label: "Materials", view: "materials", icon: UploadCloud, enabled: false },
  { label: "Settings", view: "settings", icon: Settings, enabled: false },
];

const leadStatuses: LeadStatus[] = ["New", "Contacted", "Trial booked", "Won", "Lost"];
const studentStatuses: StudentStatus[] = ["Active", "Paused", "Completed"];
const levels: Level[] = ["Beginner", "Intermediate", "Advanced", "Not sure"];
const studentLevels: Student["level"][] = ["Beginner", "Intermediate", "Advanced"];
const interests = ["English conversation", "Business English", "Exam prep", "Academic writing", "Spanish for foreigners", "Travel English"];
const programs = ["Conversation Fluency", "Grammar & Writing", "Academic English", "Career English"];
const sources = ["Website form", "Instagram", "WhatsApp", "Referral", "Facebook"];

const emptyLead: Lead = {
  id: "",
  name: "",
  email: "",
  phone: "",
  interest: "English conversation",
  level: "Not sure",
  status: "New",
  source: "Website form",
  submittedAt: new Date().toISOString().slice(0, 10),
  notes: "",
};

const emptyStudent: Student = {
  id: "",
  name: "",
  email: "",
  phone: "",
  program: "Conversation Fluency",
  level: "Beginner",
  status: "Active",
  progress: 0,
  lastSession: new Date().toISOString().slice(0, 10),
  nextSession: new Date().toISOString().slice(0, 10),
  goals: "",
  notes: "",
};

function clampProgress(value: string) {
  const progress = Number(value);
  if (!Number.isFinite(progress)) return 0;
  return Math.min(100, Math.max(0, Math.round(progress)));
}

export function AdminPanel() {
  const [activeView, setActiveView] = useState<ActiveView>("dashboard");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [students, setStudents] = useState<Student[]>([]);
  const [leadSearch, setLeadSearch] = useState("");
  const [studentSearch, setStudentSearch] = useState("");
  const [leadStatusFilter, setLeadStatusFilter] = useState<"All" | LeadStatus>("All");
  const [studentStatusFilter, setStudentStatusFilter] = useState<"All" | StudentStatus>("All");
  const [studentProgramFilter, setStudentProgramFilter] = useState("All");
  const [leadDraft, setLeadDraft] = useState<Lead | null>(null);
  const [studentDraft, setStudentDraft] = useState<Student | null>(null);
  const [leadMode, setLeadMode] = useState<"add" | "edit">("edit");
  const [studentMode, setStudentMode] = useState<"add" | "edit">("edit");
  const [syncMessage, setSyncMessage] = useState<string | null>(() =>
    isSupabaseConfigured() ? null : "Connect Supabase environment variables to load CRM data",
  );

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      return;
    }

    const session = getAdminSession();
    if (!session) {
      window.location.href = "/login";
      return;
    }

    const accessToken = session.accessToken;
    let isCancelled = false;

    async function loadBackendData() {
      try {
        const [backendLeads, backendStudents] = await Promise.all([
          listLeads(accessToken),
          listStudents(accessToken),
        ]);

        if (isCancelled) return;
        setLeads(backendLeads);
        setStudents(backendStudents);
        setSyncMessage("Connected to Supabase");
      } catch (error) {
        console.error(error);
        if (!isCancelled) {
          setSyncMessage("Could not load Supabase data. Check the database schema and policies.");
        }
      }
    }

    loadBackendData();

    return () => {
      isCancelled = true;
    };
  }, []);

  function getAccessToken() {
    return getAdminSession()?.accessToken ?? null;
  }

  const filteredLeads = useMemo(() => {
    const query = leadSearch.trim().toLowerCase();

    return leads.filter((lead) =>
      (leadStatusFilter === "All" || lead.status === leadStatusFilter) &&
      (!query ||
        [lead.name, lead.email, lead.phone, lead.interest, lead.status, lead.source].some((value) =>
          value.toLowerCase().includes(query),
        )),
    );
  }, [leadSearch, leadStatusFilter, leads]);

  const filteredStudents = useMemo(() => {
    const query = studentSearch.trim().toLowerCase();

    return students.filter((student) =>
      (studentStatusFilter === "All" || student.status === studentStatusFilter) &&
      (studentProgramFilter === "All" || student.program === studentProgramFilter) &&
      (!query ||
        [student.name, student.email, student.phone, student.program, student.level, student.status].some((value) =>
          value.toLowerCase().includes(query),
        )),
    );
  }, [studentProgramFilter, studentSearch, studentStatusFilter, students]);

  const leadStats = useMemo(
    () => ({
      total: leads.length,
      new: leads.filter((lead) => lead.status === "New").length,
      booked: leads.filter((lead) => lead.status === "Trial booked").length,
      won: leads.filter((lead) => lead.status === "Won").length,
    }),
    [leads],
  );

  const studentStats = useMemo(
    () => ({
      total: students.length,
      active: students.filter((student) => student.status === "Active").length,
      avgProgress: students.length
        ? Math.round(students.reduce((sum, student) => sum + student.progress, 0) / students.length)
        : 0,
    }),
    [students],
  );

  function openNewLead() {
    setLeadMode("add");
    setLeadDraft({ ...emptyLead, id: `LD-${String(leads.length + 1).padStart(3, "0")}` });
  }

  function openNewStudent() {
    setStudentMode("add");
    setStudentDraft({ ...emptyStudent, id: `ST-${String(students.length + 1).padStart(3, "0")}` });
  }

  async function saveLead() {
    if (!leadDraft) return;
    const draft = leadDraft;

    if (!isSupabaseConfigured()) {
      setSyncMessage("Supabase is not configured, so lead changes cannot be saved");
      return;
    }

    const accessToken = getAccessToken();
    if (!accessToken) {
      window.location.href = "/login";
      return;
    }

    try {
      const savedLead = await saveLeadToSupabase(draft, accessToken, leadMode);
      if (leadMode === "add") {
        setLeads((current) => [savedLead, ...current]);
      } else {
        setLeads((current) => current.map((lead) => (lead.id === savedLead.id ? savedLead : lead)));
      }
      setSyncMessage("Lead saved to Supabase");
      setLeadDraft(null);
    } catch (error) {
      console.error(error);
      setSyncMessage("Could not save lead to Supabase");
    }
  }

  async function saveStudent() {
    if (!studentDraft) return;
    const draft = studentDraft;

    if (!isSupabaseConfigured()) {
      setSyncMessage("Supabase is not configured, so student changes cannot be saved");
      return;
    }

    const accessToken = getAccessToken();
    if (!accessToken) {
      window.location.href = "/login";
      return;
    }

    try {
      const savedStudent = await saveStudentToSupabase(draft, accessToken, studentMode);
      if (studentMode === "add") {
        setStudents((current) => [savedStudent, ...current]);
      } else {
        setStudents((current) => current.map((student) => (student.id === savedStudent.id ? savedStudent : student)));
      }
      setSyncMessage("Student saved to Supabase");
      setStudentDraft(null);
    } catch (error) {
      console.error(error);
      setSyncMessage("Could not save student to Supabase");
    }
  }

  async function deleteLead(id: string) {
    if (!isSupabaseConfigured()) {
      setSyncMessage("Supabase is not configured, so lead changes cannot be saved");
      return;
    }

    const accessToken = getAccessToken();
    if (!accessToken) {
      window.location.href = "/login";
      return;
    }

    try {
      await deleteLeadFromSupabase(id, accessToken);
      setSyncMessage("Lead deleted from Supabase");
    } catch (error) {
      console.error(error);
      setSyncMessage("Could not delete lead from Supabase");
      return;
    }

    setLeads((current) => current.filter((lead) => lead.id !== id));
    setLeadDraft(null);
  }

  async function deleteStudent(id: string) {
    if (!isSupabaseConfigured()) {
      setSyncMessage("Supabase is not configured, so student changes cannot be saved");
      return;
    }

    const accessToken = getAccessToken();
    if (!accessToken) {
      window.location.href = "/login";
      return;
    }

    try {
      await deleteStudentFromSupabase(id, accessToken);
      setSyncMessage("Student deleted from Supabase");
    } catch (error) {
      console.error(error);
      setSyncMessage("Could not delete student from Supabase");
      return;
    }

    setStudents((current) => current.filter((student) => student.id !== id));
    setStudentDraft(null);
  }

  function handleLogout() {
    clearAdminSession();
    window.location.href = "/login";
  }

  if (!isSupabaseConfigured()) {
    return <AdminConfigRequired />;
  }

  return (
    <main className="min-h-screen bg-surface-cream text-brand-navy">
      <div className="grid min-h-screen lg:grid-cols-[13.5rem_1fr] xl:grid-cols-[14rem_1fr]">
        <aside className="bg-brand-navy px-3 py-3 text-white sm:px-4 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:px-3.5 lg:py-4">
          <div className="flex items-center justify-between gap-3 lg:block">
            <div className="flex items-center gap-2.5 lg:gap-2">
              <span className="relative size-10 shrink-0 overflow-hidden rounded-md border border-white/10 bg-brand-blue lg:size-9">
                <Image
                  src="/images/alberto-avatar.png"
                  alt="Alberto Sosa"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </span>
              <div className="min-w-0">
                <p className="truncate font-heading text-lg font-semibold lg:text-base xl:text-lg">Alberto Academy</p>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.08em] text-white/44">Admin Panel</p>
              </div>
            </div>
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle scope="admin" />
              <button
                type="button"
                onClick={handleLogout}
                className="grid size-10 place-items-center rounded-md border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Log out"
              >
                <LogOut size={18} aria-hidden />
              </button>
            </div>
          </div>

          <nav className="mt-5 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:mt-7 lg:grid lg:gap-1.5 lg:overflow-visible lg:pb-0" aria-label="Admin navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeView === item.view;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => item.enabled && setActiveView(item.view)}
                  className={`flex min-w-fit items-center gap-2.5 rounded-md px-3 py-2.5 text-left text-sm font-extrabold transition lg:w-full lg:px-2.5 ${
                    isActive
                      ? "bg-brand-teal text-white shadow-lg shadow-brand-teal/18"
                      : "text-white/70 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon size={18} strokeWidth={1.8} aria-hidden />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-auto hidden lg:block">
            <ThemeToggle scope="admin" />
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="mt-3 hidden w-full items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-2.5 text-sm font-extrabold text-white/64 transition hover:bg-white/10 hover:text-white lg:inline-flex"
          >
            <LogOut size={17} aria-hidden />
            Exit Admin
          </button>
        </aside>

        <section className="min-w-0">
          <header className="sticky top-0 z-20 border-b border-brand-navy/10 bg-surface-white/88 px-4 py-3 backdrop-blur-xl sm:px-6 lg:px-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="section-kicker">Alberto Workspace</p>
                <h1 className="mt-1 font-heading text-[2rem] font-normal leading-tight sm:text-4xl md:text-3xl xl:text-4xl">
                  {activeView === "dashboard" ? "Dashboard" : activeView === "leads" ? "Leads" : "Students"}
                </h1>
                {syncMessage && <p className="mt-1 text-xs font-bold text-brand-navy/46">{syncMessage}</p>}
              </div>
              <div className="grid gap-2 sm:grid-cols-2 md:w-auto">
                <button type="button" onClick={openNewLead} className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-brand-red px-4 text-sm font-extrabold text-white transition hover:bg-brand-red-dark sm:h-11">
                  <Plus size={17} aria-hidden />
                  Add Lead
                </button>
                <button type="button" onClick={openNewStudent} className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-brand-navy px-4 text-sm font-extrabold text-white transition hover:bg-brand-blue sm:h-11">
                  <Plus size={17} aria-hidden />
                  Add Student
                </button>
              </div>
            </div>
          </header>

          <div className="px-4 py-4 sm:px-6 sm:py-5 lg:px-6 lg:py-6">
            {activeView === "dashboard" && (
              <Dashboard
                leadStats={leadStats}
                studentStats={studentStats}
                leads={leads}
                students={students}
                openLead={(lead) => {
                  setLeadMode("edit");
                  setLeadDraft(lead);
                }}
                openStudent={(student) => {
                  setStudentMode("edit");
                  setStudentDraft(student);
                }}
              />
            )}

            {activeView === "leads" && (
              <LeadsView
                leads={filteredLeads}
                search={leadSearch}
                setSearch={setLeadSearch}
                statusFilter={leadStatusFilter}
                setStatusFilter={setLeadStatusFilter}
                onAdd={openNewLead}
                onOpen={(lead) => {
                  setLeadMode("edit");
                  setLeadDraft(lead);
                }}
              />
            )}

            {activeView === "students" && (
              <StudentsView
                students={filteredStudents}
                search={studentSearch}
                setSearch={setStudentSearch}
                statusFilter={studentStatusFilter}
                setStatusFilter={setStudentStatusFilter}
                programFilter={studentProgramFilter}
                setProgramFilter={setStudentProgramFilter}
                onAdd={openNewStudent}
                onOpen={(student) => {
                  setStudentMode("edit");
                  setStudentDraft(student);
                }}
              />
            )}
          </div>
        </section>
      </div>

      {leadDraft && (
        <LeadSheet
          mode={leadMode}
          lead={leadDraft}
          setLead={setLeadDraft}
          onClose={() => setLeadDraft(null)}
          onSave={saveLead}
          onDelete={() => deleteLead(leadDraft.id)}
        />
      )}

      {studentDraft && (
        <StudentSheet
          mode={studentMode}
          student={studentDraft}
          setStudent={setStudentDraft}
          onClose={() => setStudentDraft(null)}
          onSave={saveStudent}
          onDelete={() => deleteStudent(studentDraft.id)}
        />
      )}
    </main>
  );
}

function AdminConfigRequired() {
  return (
    <main className="grid min-h-screen place-items-center bg-brand-navy px-4 py-8 text-white">
      <section className="w-full max-w-xl rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/24 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative size-11 overflow-hidden rounded-md border border-white/10 bg-brand-blue">
              <Image
                src="/images/alberto-avatar.png"
                alt="Alberto Sosa"
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="font-heading text-2xl font-semibold">Alberto Academy</p>
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-teal-light">Admin Setup</p>
            </div>
          </div>
          <ThemeToggle scope="admin" compact />
        </div>
        <h1 className="mt-8 font-heading text-3xl font-normal leading-tight sm:text-4xl">
          Supabase needs to be configured first.
        </h1>
        <p className="mt-4 text-sm font-semibold leading-6 text-white/62">
          Add the public Supabase URL and anon key to the project environment variables, then restart or redeploy the app.
        </p>
      </section>
    </main>
  );
}

export function AdminLogin({ onEnter }: { onEnter?: () => void }) {
  const [email, setEmail] = useState("alberto@albertoacademy.com");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (onEnter) {
      onEnter();
      return;
    }

    if (!isSupabaseConfigured()) {
      setErrorMessage("Supabase environment variables are not configured.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await signInAdmin(email, password);
      window.location.href = "/admin";
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Could not sign in.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="grid min-h-screen place-items-center bg-brand-navy px-4 py-6 text-brand-navy sm:px-6 sm:py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-lg rounded-xl border border-white/10 bg-surface-white p-5 shadow-2xl shadow-black/24 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative size-11 overflow-hidden rounded-md border border-brand-navy/10 bg-brand-blue">
              <Image
                src="/images/alberto-avatar.png"
                alt="Alberto Sosa"
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <div>
              <p className="font-heading text-2xl font-semibold">Alberto Academy</p>
              <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-navy/42">Admin Access</p>
            </div>
          </div>
          <ThemeToggle scope="admin" compact />
        </div>

        <h1 className="mt-7 font-heading text-3xl font-normal leading-tight sm:mt-8 sm:text-4xl">Welcome back, Alberto.</h1>

        <div className="mt-6 grid gap-4 sm:mt-7">
          <label className="form-field">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
            />
          </label>
          <label className="form-field">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
            />
          </label>
        </div>

        {errorMessage && (
          <p className="mt-4 rounded-md border border-brand-red/20 bg-brand-red/8 px-4 py-3 text-sm font-bold text-brand-red">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-md bg-brand-red px-6 text-sm font-extrabold text-white transition hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-60 sm:mt-7"
        >
          {isSubmitting ? "Signing in..." : "Enter Admin"}
          <ChevronRight size={18} aria-hidden />
        </button>
      </form>
    </main>
  );
}

function Dashboard({
  leadStats,
  studentStats,
  leads,
  students,
  openLead,
  openStudent,
}: {
  leadStats: { total: number; new: number; booked: number; won: number };
  studentStats: { total: number; active: number; avgProgress: number };
  leads: Lead[];
  students: Student[];
  openLead: (lead: Lead) => void;
  openStudent: (student: Student) => void;
}) {
  return (
    <div className="grid gap-4 lg:gap-5">
      <div className="grid auto-rows-fr gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Total Leads" value={String(leadStats.total)} icon={UserRoundPlus} tone="navy" />
        <MetricCard label="Trials Booked" value={String(leadStats.booked)} icon={CalendarCheck} tone="blue" />
        <MetricCard label="Active Students" value={String(studentStats.active)} icon={Users} tone="teal" />
        <MetricCard label="Avg. Progress" value={`${studentStats.avgProgress}%`} icon={BarChart3} tone="navy" />
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.05fr_0.95fr] xl:gap-5">
        <section className="rounded-xl border border-brand-navy/10 bg-surface-white p-4 shadow-xl shadow-brand-navy/6 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="section-kicker">Lead Pipeline</p>
              <h2 className="mt-1 font-heading text-2xl font-normal leading-tight sm:text-3xl xl:text-2xl">Current opportunity flow</h2>
            </div>
            <MessageSquareText className="text-brand-teal" size={26} aria-hidden />
          </div>
          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {leadStatuses.map((status) => {
              const count = leads.filter((lead) => lead.status === status).length;
              const percent = leads.length ? Math.max(8, Math.round((count / leads.length) * 100)) : 0;

              return (
                <div key={status} className="rounded-lg border border-brand-navy/8 bg-surface-cream p-3 transition hover:border-brand-teal/30 hover:bg-surface-white sm:p-3.5">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-extrabold text-brand-navy">{status}</p>
                      <p className="mt-0.5 text-xs font-semibold text-brand-navy/48">Pipeline stage</p>
                    </div>
                    <span className="grid size-9 shrink-0 place-items-center rounded-md bg-brand-navy text-sm font-heading text-white">
                      {count}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-brand-navy/8">
                    <div className="h-full rounded-full bg-brand-teal" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="rounded-xl bg-brand-navy p-4 text-white shadow-xl shadow-brand-navy/12 sm:p-5">
          <p className="section-kicker-dark">Teaching Snapshot</p>
          <h2 className="mt-1 font-heading text-2xl font-normal leading-tight sm:text-3xl xl:text-2xl">Student activity</h2>
          <div className="mt-4 grid gap-2.5">
            {students.slice(0, 4).map((student) => (
              <button
                key={student.id}
                type="button"
                onClick={() => openStudent(student)}
                className="grid gap-2.5 rounded-lg border border-white/10 bg-white/[0.06] p-3 text-left transition hover:border-brand-teal-light/50 hover:bg-white/[0.09] sm:p-3.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="font-bold text-white">{student.name}</p>
                    <p className="mt-1 text-xs font-semibold text-white/48">{student.program}</p>
                  </div>
                  <StatusPill status={student.status} />
                </div>
                <ProgressBar value={student.progress} dark />
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-xl border border-brand-navy/10 bg-surface-white p-4 shadow-xl shadow-brand-navy/6 sm:p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="section-kicker">Recent Leads</p>
            <h2 className="mt-1 font-heading text-2xl font-normal leading-tight sm:text-3xl">Fresh form submissions</h2>
          </div>
          <UserCheck className="text-brand-blue" size={26} aria-hidden />
        </div>
        <div className="mt-4 grid gap-2.5">
          {leads.slice(0, 6).map((lead) => (
            <button key={lead.id} type="button" onClick={() => openLead(lead)} className="grid gap-3 rounded-lg border border-white/10 bg-brand-navy p-3 text-left text-white transition hover:border-brand-teal-light/45 hover:bg-brand-blue sm:p-3.5 md:grid-cols-[1.1fr_1fr_0.7fr_auto] md:items-center">
              <div>
                <p className="font-extrabold text-white">{lead.name}</p>
                <p className="mt-1 text-xs font-semibold text-white/54">{lead.email}</p>
              </div>
              <p className="text-sm font-bold text-white/70">{lead.interest}</p>
              <StatusPill status={lead.status} />
              <ChevronRight size={18} className="hidden text-white/42 md:block" aria-hidden />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function LeadsView({
  leads,
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  onAdd,
  onOpen,
}: {
  leads: Lead[];
  search: string;
  setSearch: (value: string) => void;
  statusFilter: "All" | LeadStatus;
  setStatusFilter: (value: "All" | LeadStatus) => void;
  onAdd: () => void;
  onOpen: (lead: Lead) => void;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-brand-navy/10 bg-surface-white shadow-xl shadow-brand-navy/6">
      <TableHeader
        kicker="CRM Leads"
        title="People who filled out the form"
        search={search}
        setSearch={setSearch}
        buttonLabel="Add Lead"
        onAdd={onAdd}
      >
        <AdminFilterSelect
          label="Status"
          value={statusFilter}
          options={["All", ...leadStatuses]}
          onChange={(value) => setStatusFilter(value as "All" | LeadStatus)}
        />
      </TableHeader>
      <div className="grid gap-3 border-t border-brand-navy/10 p-3 md:hidden">
        {leads.map((lead) => (
          <button
            key={lead.id}
            type="button"
            onClick={() => onOpen(lead)}
            className="rounded-lg border border-brand-navy/10 bg-surface-cream p-3.5 text-left transition hover:border-brand-teal/40 hover:bg-surface-white"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-extrabold text-brand-navy">{lead.name}</p>
                <p className="mt-1 truncate text-xs font-semibold text-brand-navy/48">{lead.email}</p>
              </div>
              <StatusPill status={lead.status} />
            </div>
            <div className="mt-3 grid gap-2 border-t border-brand-navy/8 pt-3 text-xs font-bold text-brand-navy/58">
              <div className="flex items-center justify-between gap-3">
                <span>Interest</span>
                <span className="text-right text-brand-navy/78">{lead.interest}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Phone</span>
                <span className="text-right text-brand-navy/78">{lead.phone || "Not provided"}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Level</span>
                <span className="text-right text-brand-navy/78">{lead.level}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span>Source</span>
                <span className="text-right text-brand-navy/78">{lead.source}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[64rem] border-t border-brand-navy/10 text-left">
          <thead className="bg-brand-navy text-xs font-extrabold uppercase tracking-[0.08em] text-white/62">
            <tr>
              <th className="px-4 py-3 lg:px-5">Lead</th>
              <th className="px-4 py-3 lg:px-5">Phone</th>
              <th className="px-4 py-3 lg:px-5">Interest</th>
              <th className="px-4 py-3 lg:px-5">Level</th>
              <th className="px-4 py-3 lg:px-5">Status</th>
              <th className="px-4 py-3 lg:px-5">Source</th>
              <th className="px-4 py-3 lg:px-5">Date</th>
              <th className="px-4 py-3 text-right lg:px-5">Open</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-navy/8">
            {leads.map((lead) => (
              <tr key={lead.id} onClick={() => onOpen(lead)} className="cursor-pointer transition hover:bg-surface-cream/80">
                <td className="px-4 py-3.5 lg:px-5">
                  <div className="text-left">
                    <span className="block font-extrabold">{lead.name}</span>
                    <span className="mt-1 block text-xs font-semibold text-brand-navy/48">{lead.email}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-sm font-semibold text-brand-navy/58 lg:px-5">{lead.phone || "Not provided"}</td>
                <td className="px-4 py-3.5 text-sm font-semibold text-brand-navy/66 lg:px-5">{lead.interest}</td>
                <td className="px-4 py-3.5 text-sm font-bold text-brand-navy/62 lg:px-5">{lead.level}</td>
                <td className="px-4 py-3.5 lg:px-5">
                  <StatusPill status={lead.status} />
                </td>
                <td className="px-4 py-3.5 text-sm font-semibold text-brand-navy/58 lg:px-5">{lead.source}</td>
                <td className="px-4 py-3.5 text-sm font-semibold text-brand-navy/58 lg:px-5">{lead.submittedAt}</td>
                <td className="px-4 py-3.5 text-right lg:px-5">
                  <button type="button" onClick={(event) => { event.stopPropagation(); onOpen(lead); }} className="inline-grid size-9 place-items-center rounded-md border border-brand-navy/10 text-brand-navy transition hover:border-brand-teal hover:text-brand-blue">
                    <ChevronRight size={18} aria-hidden />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function StudentsView({
  students,
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  programFilter,
  setProgramFilter,
  onAdd,
  onOpen,
}: {
  students: Student[];
  search: string;
  setSearch: (value: string) => void;
  statusFilter: "All" | StudentStatus;
  setStatusFilter: (value: "All" | StudentStatus) => void;
  programFilter: string;
  setProgramFilter: (value: string) => void;
  onAdd: () => void;
  onOpen: (student: Student) => void;
}) {
  return (
    <section className="overflow-hidden rounded-xl border border-brand-navy/10 bg-surface-white shadow-xl shadow-brand-navy/6">
      <TableHeader
        kicker="Student Profiles"
        title="Current students and progress"
        search={search}
        setSearch={setSearch}
        buttonLabel="Add Student"
        onAdd={onAdd}
      >
        <AdminFilterSelect
          label="Status"
          value={statusFilter}
          options={["All", ...studentStatuses]}
          onChange={(value) => setStatusFilter(value as "All" | StudentStatus)}
        />
        <AdminFilterSelect
          label="Program"
          value={programFilter}
          options={["All", ...programs]}
          onChange={setProgramFilter}
        />
      </TableHeader>
      <div className="grid gap-3 border-t border-brand-navy/10 p-3 md:hidden">
        {students.map((student) => (
          <button
            key={student.id}
            type="button"
            onClick={() => onOpen(student)}
            className="rounded-lg border border-brand-navy/10 bg-surface-cream p-3.5 text-left transition hover:border-brand-teal/40 hover:bg-surface-white"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate font-extrabold text-brand-navy">{student.name}</p>
                <p className="mt-1 truncate text-xs font-semibold text-brand-navy/48">{student.email}</p>
              </div>
              <StatusPill status={student.status} />
            </div>
            <div className="mt-3 border-t border-brand-navy/8 pt-3">
              <div className="grid gap-2 text-xs font-bold text-brand-navy/58">
                <div className="flex items-center justify-between gap-3">
                  <span>Phone</span>
                  <span className="text-right text-brand-navy/78">{student.phone || "Not provided"}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>{student.program}</span>
                  <span>{student.level}</span>
                </div>
              </div>
              <ProgressBar value={student.progress} />
            </div>
          </button>
        ))}
      </div>
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[68rem] border-t border-brand-navy/10 text-left">
          <thead className="bg-brand-navy text-xs font-extrabold uppercase tracking-[0.08em] text-white/62">
            <tr>
              <th className="px-4 py-3 lg:px-5">Student</th>
              <th className="px-4 py-3 lg:px-5">Phone</th>
              <th className="px-4 py-3 lg:px-5">Program</th>
              <th className="px-4 py-3 lg:px-5">Level</th>
              <th className="px-4 py-3 lg:px-5">Status</th>
              <th className="px-4 py-3 lg:px-5">Progress</th>
              <th className="px-4 py-3 lg:px-5">Next Session</th>
              <th className="px-4 py-3 text-right lg:px-5">Open</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-navy/8">
            {students.map((student) => (
              <tr key={student.id} onClick={() => onOpen(student)} className="cursor-pointer transition hover:bg-surface-cream/80">
                <td className="px-4 py-3.5 lg:px-5">
                  <div className="text-left">
                    <span className="block font-extrabold">{student.name}</span>
                    <span className="mt-1 block text-xs font-semibold text-brand-navy/48">{student.email}</span>
                  </div>
                </td>
                <td className="px-4 py-3.5 text-sm font-semibold text-brand-navy/58 lg:px-5">{student.phone || "Not provided"}</td>
                <td className="px-4 py-3.5 text-sm font-semibold text-brand-navy/66 lg:px-5">{student.program}</td>
                <td className="px-4 py-3.5 text-sm font-bold text-brand-navy/62 lg:px-5">{student.level}</td>
                <td className="px-4 py-3.5 lg:px-5">
                  <StatusPill status={student.status} />
                </td>
                <td className="px-4 py-3.5 lg:px-5">
                  <ProgressBar value={student.progress} />
                </td>
                <td className="px-4 py-3.5 text-sm font-semibold text-brand-navy/58 lg:px-5">{student.nextSession}</td>
                <td className="px-4 py-3.5 text-right lg:px-5">
                  <button type="button" onClick={(event) => { event.stopPropagation(); onOpen(student); }} className="inline-grid size-9 place-items-center rounded-md border border-brand-navy/10 text-brand-navy transition hover:border-brand-teal hover:text-brand-blue">
                    <ChevronRight size={18} aria-hidden />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function TableHeader({
  kicker,
  title,
  search,
  setSearch,
  buttonLabel,
  onAdd,
  children,
}: {
  kicker: string;
  title: string;
  search: string;
  setSearch: (value: string) => void;
  buttonLabel: string;
  onAdd: () => void;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="section-kicker">{kicker}</p>
        <h2 className="mt-1 font-heading text-2xl font-normal">{title}</h2>
      </div>
      <div className="flex flex-col gap-3 lg:items-end">
        {children && <div className="flex flex-col gap-2 sm:flex-row">{children}</div>}
        <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-navy/36" size={18} aria-hidden />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search"
            className="h-11 w-full rounded-md border border-brand-navy/10 bg-surface-cream pl-10 pr-4 text-sm font-semibold text-brand-navy outline-none transition focus:border-brand-teal focus:bg-surface-white focus:ring-4 focus:ring-brand-teal/10 sm:w-72"
          />
        </label>
        <button type="button" onClick={onAdd} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand-red px-4 text-sm font-extrabold text-white transition hover:bg-brand-red-dark">
          <Plus size={17} aria-hidden />
          {buttonLabel}
        </button>
        </div>
      </div>
    </div>
  );
}

function AdminFilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5">
      <span className="text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-brand-navy/42">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-9 rounded-md border border-brand-navy/10 bg-surface-cream px-3 text-xs font-extrabold text-brand-navy outline-none transition focus:border-brand-teal focus:bg-surface-white focus:ring-4 focus:ring-brand-teal/10"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function LeadSheet({
  mode,
  lead,
  setLead,
  onClose,
  onSave,
  onDelete,
}: {
  mode: "add" | "edit";
  lead: Lead;
  setLead: (lead: Lead) => void;
  onClose: () => void;
  onSave: () => void;
  onDelete: () => void;
}) {
  const [isEditing, setIsEditing] = useState(mode === "add");

  if (!isEditing) {
    return (
      <DetailShell title={lead.name} subtitle={lead.id} onClose={onClose} variant="drawer" density="compact">
        <LeadDetailView lead={lead} onEdit={() => setIsEditing(true)} onDelete={onDelete} />
      </DetailShell>
    );
  }

  return (
    <DetailShell title={mode === "add" ? "Add Lead" : "Edit Lead"} subtitle={lead.id} onClose={onClose} variant="modal" density="compact">
      <div className="grid gap-3 sm:grid-cols-2">
        <LeadField label="Full name" value={lead.name} onChange={(value) => setLead({ ...lead, name: value })} />
        <LeadField label="Email" type="email" value={lead.email} onChange={(value) => setLead({ ...lead, email: value })} />
        <LeadField label="Phone" value={lead.phone} onChange={(value) => setLead({ ...lead, phone: value })} />
        <LeadSelect label="Interest" value={lead.interest} options={interests} onChange={(value) => setLead({ ...lead, interest: value })} />
        <LeadSelect label="Level" value={lead.level} options={levels} onChange={(value) => setLead({ ...lead, level: value as Level })} />
        <LeadSelect label="Status" value={lead.status} options={leadStatuses} onChange={(value) => setLead({ ...lead, status: value as LeadStatus })} />
        <LeadSelect label="Source" value={lead.source} options={sources} onChange={(value) => setLead({ ...lead, source: value })} />
        <LeadField label="Submitted date" type="date" value={lead.submittedAt} onChange={(value) => setLead({ ...lead, submittedAt: value })} />
        <div className="sm:col-span-2">
          <LeadTextarea label="Notes" value={lead.notes} onChange={(value) => setLead({ ...lead, notes: value })} />
        </div>
      </div>
      <SheetActions onSave={onSave} onDelete={onDelete} showDelete={mode === "edit"} density="compact" />
    </DetailShell>
  );
}

function StudentSheet({
  mode,
  student,
  setStudent,
  onClose,
  onSave,
  onDelete,
}: {
  mode: "add" | "edit";
  student: Student;
  setStudent: (student: Student) => void;
  onClose: () => void;
  onSave: () => void;
  onDelete: () => void;
}) {
  const [isEditing, setIsEditing] = useState(mode === "add");

  if (!isEditing) {
    return (
      <DetailShell title={student.name} subtitle={student.id} onClose={onClose} variant="drawer" density="compact">
        <StudentDetailView student={student} onEdit={() => setIsEditing(true)} onDelete={onDelete} />
      </DetailShell>
    );
  }

  return (
    <DetailShell title={mode === "add" ? "Add Student" : "Edit Student"} subtitle={student.id} onClose={onClose} variant="modal" density="compact">
      <div className="grid gap-3 sm:grid-cols-2">
        <StudentField label="Full name" value={student.name} onChange={(value) => setStudent({ ...student, name: value })} />
        <StudentField label="Email" type="email" value={student.email} onChange={(value) => setStudent({ ...student, email: value })} />
        <StudentField label="Phone" value={student.phone} onChange={(value) => setStudent({ ...student, phone: value })} />
        <StudentSelect label="Program" value={student.program} options={programs} onChange={(value) => setStudent({ ...student, program: value })} />
        <StudentSelect label="Level" value={student.level} options={studentLevels} onChange={(value) => setStudent({ ...student, level: value as Student["level"] })} />
        <StudentSelect label="Status" value={student.status} options={studentStatuses} onChange={(value) => setStudent({ ...student, status: value as StudentStatus })} />
        <StudentField label="Progress %" type="number" value={String(student.progress)} onChange={(value) => setStudent({ ...student, progress: clampProgress(value) })} />
        <StudentField label="Next session" type="date" value={student.nextSession} onChange={(value) => setStudent({ ...student, nextSession: value })} />
        <div className="sm:col-span-2">
          <StudentTextarea label="Goals" value={student.goals} onChange={(value) => setStudent({ ...student, goals: value })} />
        </div>
        <div className="sm:col-span-2">
          <StudentTextarea label="Notes" value={student.notes} onChange={(value) => setStudent({ ...student, notes: value })} />
        </div>
      </div>
      <SheetActions onSave={onSave} onDelete={onDelete} showDelete={mode === "edit"} density="compact" />
    </DetailShell>
  );
}

function DetailShell({
  title,
  subtitle,
  onClose,
  children,
  variant,
  density = "default",
}: {
  title: string;
  subtitle: string;
  onClose: () => void;
  children: ReactNode;
  variant: "drawer" | "modal";
  density?: "default" | "compact";
}) {
  const isDrawer = variant === "drawer";
  const isCompact = density === "compact";

  return (
    <div className={`fixed inset-0 z-[80] bg-brand-navy/48 backdrop-blur-sm ${isDrawer ? "flex justify-end" : "grid place-items-center p-4"}`}>
      <section className={`flex max-h-full w-full flex-col overflow-hidden bg-surface-white shadow-2xl shadow-brand-navy/30 ${
        isDrawer ? (isCompact ? "h-full max-w-[30rem]" : "h-full max-w-[34rem]") : (isCompact ? "max-h-[88vh] max-w-xl rounded-xl" : "max-h-[90vh] max-w-2xl rounded-xl")
      }`}>
        <header className={`flex items-center justify-between gap-4 border-b border-brand-navy/10 bg-surface-white ${isCompact ? "p-3.5 sm:p-4" : "p-4"}`}>
          <div>
            <p className="section-kicker">{subtitle}</p>
            <h2 className={`mt-1 font-heading font-normal leading-tight ${isCompact ? "text-2xl sm:text-[1.7rem]" : "text-2xl"}`}>{title}</h2>
          </div>
          <button type="button" onClick={onClose} className="grid size-10 place-items-center rounded-md border border-brand-navy/10 text-brand-navy transition hover:border-brand-teal hover:text-brand-blue" aria-label="Close detail sheet">
            <X size={20} aria-hidden />
          </button>
        </header>
        <div className={`min-h-0 flex-1 overflow-y-auto bg-surface-cream/45 ${isCompact ? "p-3.5 sm:p-4" : "p-4 sm:p-5"}`}>{children}</div>
      </section>
    </div>
  );
}

function LeadDetailView({ lead, onEdit, onDelete }: { lead: Lead; onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="grid gap-4">
      <div className="rounded-xl bg-brand-navy p-4 text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-teal-light">Lead Status</p>
            <h3 className="mt-2 truncate font-heading text-2xl font-normal sm:text-3xl">{lead.name}</h3>
            <p className="mt-2 text-sm font-semibold text-white/58">{lead.interest}</p>
          </div>
          <StatusPill status={lead.status} />
        </div>
        <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-white/62">
          <a href={`mailto:${lead.email}`} className="break-words transition hover:text-white">{lead.email}</a>
          <a href={`tel:${lead.phone}`} className="transition hover:text-white">{lead.phone}</a>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <DetailItem label="Level" value={lead.level} />
        <DetailItem label="Source" value={lead.source} />
        <DetailItem label="Submitted" value={lead.submittedAt} />
        <DetailItem label="Interest" value={lead.interest} />
        <DetailItem label="Record ID" value={lead.id} />
        <DetailItem label="Status" value={lead.status} />
      </div>

      <div className="rounded-xl border border-brand-navy/10 bg-surface-white p-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-navy/42">Notes</p>
        <p className="mt-3 text-sm leading-6 text-brand-navy/68">{lead.notes || "No notes yet."}</p>
      </div>

      <DetailActions onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

function StudentDetailView({ student, onEdit, onDelete }: { student: Student; onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="grid gap-4">
      <div className="rounded-xl bg-brand-navy p-4 text-white">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-teal-light">Student Profile</p>
            <h3 className="mt-2 truncate font-heading text-2xl font-normal sm:text-3xl">{student.name}</h3>
            <p className="mt-2 text-sm font-semibold text-white/58">{student.program}</p>
          </div>
          <StatusPill status={student.status} />
        </div>
        <div className="mt-4 border-t border-white/10 pt-4">
          <ProgressBar value={student.progress} dark />
        </div>
        <div className="mt-4 grid gap-2 border-t border-white/10 pt-4 text-sm font-semibold text-white/62">
          <a href={`mailto:${student.email}`} className="break-words transition hover:text-white">{student.email}</a>
          <a href={`tel:${student.phone}`} className="transition hover:text-white">{student.phone}</a>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <DetailItem label="Level" value={student.level} />
        <DetailItem label="Program" value={student.program} />
        <DetailItem label="Progress" value={`${student.progress}%`} />
        <DetailItem label="Status" value={student.status} />
        <DetailItem label="Record ID" value={student.id} />
        <DetailItem label="Next Session" value={student.nextSession} />
      </div>

      <div className="rounded-xl border border-brand-navy/10 bg-surface-white p-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-navy/42">Goals</p>
        <p className="mt-3 text-sm leading-6 text-brand-navy/68">{student.goals || "No goals added yet."}</p>
      </div>
      <div className="rounded-xl border border-brand-navy/10 bg-surface-white p-4">
        <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-brand-navy/42">Notes</p>
        <p className="mt-3 text-sm leading-6 text-brand-navy/68">{student.notes || "No notes yet."}</p>
      </div>

      <DetailActions onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-brand-navy/10 bg-surface-white p-3.5">
      <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-brand-navy/42">{label}</p>
      <p className="mt-1.5 break-words text-sm font-bold text-brand-navy/78">{value}</p>
    </div>
  );
}

function DetailActions({ onEdit, onDelete }: { onEdit: () => void; onDelete: () => void }) {
  return (
    <div className="grid gap-3 border-t border-brand-navy/10 pt-4 sm:grid-cols-2">
      <button type="button" onClick={onEdit} className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-brand-navy px-4 text-sm font-extrabold text-white transition hover:bg-brand-blue">
        <Pencil size={17} aria-hidden />
        Edit
      </button>
      <button type="button" onClick={onDelete} className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-brand-red/22 px-4 text-sm font-extrabold text-brand-red transition hover:bg-brand-red hover:text-white">
        <Trash2 size={17} aria-hidden />
        Delete
      </button>
    </div>
  );
}

function SheetActions({
  onSave,
  onDelete,
  showDelete,
  density = "default",
}: {
  onSave: () => void;
  onDelete: () => void;
  showDelete: boolean;
  density?: "default" | "compact";
}) {
  const buttonHeight = density === "compact" ? "h-10" : "h-11";

  return (
    <div className={`${density === "compact" ? "mt-4" : "mt-6"} flex flex-col-reverse gap-3 border-t border-brand-navy/10 pt-4 sm:flex-row sm:justify-end`}>
      {showDelete && (
        <button type="button" onClick={onDelete} className={`inline-flex ${buttonHeight} items-center justify-center gap-2 rounded-md border border-brand-red/22 px-4 text-sm font-extrabold text-brand-red transition hover:bg-brand-red hover:text-white sm:min-w-32`}>
          <Trash2 size={17} aria-hidden />
          Delete
        </button>
      )}
      <button type="button" onClick={onSave} className={`inline-flex ${buttonHeight} items-center justify-center gap-2 rounded-md bg-brand-red px-4 text-sm font-extrabold text-white transition hover:bg-brand-red-dark sm:min-w-40`}>
        <Save size={17} aria-hidden />
        Save
      </button>
    </div>
  );
}

function LeadField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-extrabold text-brand-navy">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-md border border-brand-navy/12 bg-surface-white px-3 text-sm font-semibold text-brand-navy outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
      />
    </label>
  );
}

function LeadSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-extrabold text-brand-navy">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-md border border-brand-navy/12 bg-surface-white px-3 text-sm font-semibold text-brand-navy outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function LeadTextarea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-1.5 text-sm font-extrabold text-brand-navy">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-24 rounded-md border border-brand-navy/12 bg-surface-white px-3 py-2.5 text-sm font-semibold leading-6 text-brand-navy outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
      />
    </label>
  );
}

function StudentField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-extrabold text-brand-navy">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-md border border-brand-navy/12 bg-surface-white px-3 text-sm font-semibold text-brand-navy outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
      />
    </label>
  );
}

function StudentSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="grid gap-1.5 text-sm font-extrabold text-brand-navy">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-10 rounded-md border border-brand-navy/12 bg-surface-white px-3 text-sm font-semibold text-brand-navy outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function StudentTextarea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return (
    <label className="grid gap-1.5 text-sm font-extrabold text-brand-navy">
      {label}
      <textarea
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-24 rounded-md border border-brand-navy/12 bg-surface-white px-3 py-2.5 text-sm font-semibold leading-6 text-brand-navy outline-none transition focus:border-brand-teal focus:ring-4 focus:ring-brand-teal/10"
      />
    </label>
  );
}

function MetricCard({
  label,
  value,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  icon: typeof LayoutDashboard;
  tone: "red" | "teal" | "blue" | "navy";
}) {
  const cardClass =
    tone === "red"
      ? "bg-brand-red"
      : tone === "teal"
        ? "bg-brand-teal"
        : tone === "blue"
          ? "bg-brand-blue"
          : "bg-brand-navy";

  return (
    <article className={`relative isolate flex min-h-[6.75rem] overflow-hidden rounded-xl p-4 text-white shadow-xl shadow-brand-navy/10 sm:min-h-[7.25rem] ${cardClass}`}>
      <div className="absolute -right-8 -top-10 size-24 rounded-full bg-white/10 sm:size-28" aria-hidden />
      <div className="absolute -bottom-14 right-2 size-28 rounded-full bg-white/8 sm:size-32" aria-hidden />
      <div className="relative z-10 flex w-full items-start justify-between gap-4">
        <div className="flex min-h-full flex-col justify-between">
          <p className="text-xs font-extrabold uppercase tracking-[0.08em] text-white/70">{label}</p>
          <p className="mt-4 font-heading text-3xl font-normal leading-none sm:text-4xl">{value}</p>
        </div>
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/16 text-white sm:size-11">
          <Icon size={21} strokeWidth={1.8} aria-hidden />
        </span>
      </div>
    </article>
  );
}

function StatusPill({ status }: { status: LeadStatus | StudentStatus }) {
  const className =
    status === "Won" || status === "Active"
      ? "border-brand-teal-light/22 bg-brand-teal text-white"
      : status === "Trial booked" || status === "Completed"
        ? "border-brand-teal-light/22 bg-brand-blue text-white"
        : status === "Lost" || status === "Paused"
          ? "border-brand-red/22 bg-brand-red text-white"
          : status === "Contacted"
            ? "border-brand-blue/22 bg-brand-blue text-white"
            : "border-brand-teal-light/22 bg-brand-teal-light text-brand-navy";

  return (
    <span className={`inline-flex w-fit min-w-fit items-center justify-center rounded-full border px-3 py-1 text-xs font-extrabold ${className}`}>
      {status}
    </span>
  );
}

function ProgressBar({ value, dark = false }: { value: number; dark?: boolean }) {
  return (
    <div className="min-w-[8rem]">
      <div className={`mb-2 flex items-center justify-between text-xs font-extrabold ${dark ? "text-white/58" : "text-brand-navy/52"}`}>
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <div className={`h-2 overflow-hidden rounded-full ${dark ? "bg-white/12" : "bg-brand-navy/8"}`}>
        <div className="h-full rounded-full bg-brand-teal" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
