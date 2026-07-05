import type { Metadata } from "next";
import { ClipboardCheck, Database, LockKeyhole, MailCheck, ShieldCheck, UserCheck } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Alberto Academy",
  description: "Privacy practices for Alberto Academy online English tutoring, trial lesson booking, and student communication.",
};

const sections = [
  {
    title: "Information We Collect",
    icon: Database,
    copy: [
      "When you contact Alberto Academy or request a trial lesson, we may collect your name, email address, current English level, learning goals, and any details you choose to share about your needs.",
      "We may also keep basic communication records connected to scheduling, lesson planning, support, and follow-up messages.",
    ],
  },
  {
    title: "How We Use Information",
    icon: ClipboardCheck,
    copy: [
      "Information is used to respond to inquiries, recommend an appropriate learning path, schedule sessions, prepare lessons, and improve the tutoring experience.",
      "We do not use student information for unrelated marketing lists, and we do not sell personal information.",
    ],
  },
  {
    title: "Student Materials",
    icon: UserCheck,
    copy: [
      "Lesson notes, practice activities, writing samples, and level observations may be used to personalize instruction and track progress.",
      "Student work is treated as private learning material and is not published or shared publicly without permission.",
    ],
  },
  {
    title: "Data Protection",
    icon: LockKeyhole,
    copy: [
      "Alberto Academy uses reasonable administrative and technical safeguards to protect student information from unauthorized access, loss, or misuse.",
      "No online service can guarantee absolute security, but we keep information limited to what is useful for tutoring, communication, and student support.",
    ],
  },
  {
    title: "Your Choices",
    icon: ShieldCheck,
    copy: [
      "You may request that your contact details, lesson notes, or inquiry information be corrected or deleted when it is no longer needed for active tutoring or legitimate records.",
      "You may also choose not to share optional details, though this may limit how personalized the trial recommendation can be.",
    ],
  },
  {
    title: "Contact",
    icon: MailCheck,
    copy: [
      "For privacy questions or requests, contact hello@albertoacademy.com. We will review reasonable requests and respond as soon as practical.",
      "This policy may be updated as Alberto Academy grows or adjusts its online tutoring systems.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Clear privacy practices for online English tutoring."
      description="This page explains how Alberto Academy handles information shared through inquiries, trial lessons, tutoring sessions, and student communication."
      updated="June 29, 2026"
      sections={sections}
    />
  );
}
