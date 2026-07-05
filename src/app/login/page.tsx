import type { Metadata } from "next";
import { AdminLogin } from "@/components/admin/admin-panel";

export const metadata: Metadata = {
  title: "Login | Alberto Academy",
  description: "Alberto Academy admin login preview.",
};

export default function LoginPage() {
  return <AdminLogin />;
}
