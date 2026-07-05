export type LeadStatus = "New" | "Contacted" | "Trial booked" | "Won" | "Lost";
export type StudentStatus = "Active" | "Paused" | "Completed";
export type Level = "Beginner" | "Intermediate" | "Advanced" | "Not sure";

export type Lead = {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  level: Level;
  status: LeadStatus;
  source: string;
  submittedAt: string;
  notes: string;
};

export type Student = {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  level: Exclude<Level, "Not sure">;
  status: StudentStatus;
  progress: number;
  lastSession: string;
  nextSession: string;
  goals: string;
  notes: string;
};
