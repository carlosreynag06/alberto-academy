import type { Metadata } from "next";
import { AdminPanel } from "@/components/admin/admin-panel";

export const metadata: Metadata = {
  title: "Admin | Alberto Academy",
  description: "Alberto Academy internal admin panel mockup for leads, students, and CRM workflows.",
};

export default function AdminPage() {
  return <AdminPanel />;
}
