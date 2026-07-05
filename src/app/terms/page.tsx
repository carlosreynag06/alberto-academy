import type { Metadata } from "next";
import { CalendarClock, CreditCard, FileCheck2, GraduationCap, RefreshCcw, Scale } from "lucide-react";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | Alberto Academy",
  description: "Terms for Alberto Academy online English tutoring, trial lessons, scheduling, resources, and student responsibilities.",
};

const sections = [
  {
    title: "Service Overview",
    icon: GraduationCap,
    copy: [
      "Alberto Academy provides personalized online English tutoring, trial sessions, learning recommendations, and interactive resources for students who want practical communication skills.",
      "Programs may include live lessons, guided practice, progress feedback, course materials, and recommendations based on the student's goals and current level.",
    ],
  },
  {
    title: "Booking and Scheduling",
    icon: CalendarClock,
    copy: [
      "Trial lessons and tutoring sessions are scheduled based on availability. A session is confirmed only after the date, time, and format have been agreed upon.",
      "Students are responsible for joining sessions on time with a stable internet connection, working microphone, and any requested materials.",
    ],
  },
  {
    title: "Payments and Plans",
    icon: CreditCard,
    copy: [
      "Pricing, packages, and payment timing will be confirmed before paid tutoring begins. Any included materials, session length, and plan details should be reviewed before purchase.",
      "Paid lessons or packages are intended for the student or group named at booking unless Alberto Academy agrees otherwise.",
    ],
  },
  {
    title: "Cancellations and Changes",
    icon: RefreshCcw,
    copy: [
      "Students should request schedule changes with reasonable advance notice. Rescheduling options may depend on tutor availability and the selected tutoring plan.",
      "Repeated missed sessions, late arrivals, or last-minute cancellations may affect future scheduling or package terms.",
    ],
  },
  {
    title: "Learning Materials",
    icon: FileCheck2,
    copy: [
      "Course resources, class notes, worksheets, and learning materials provided by Alberto Academy are for personal study and tutoring use.",
      "Materials may not be copied, resold, distributed, or presented as another program without written permission.",
    ],
  },
  {
    title: "Student Responsibilities",
    icon: Scale,
    copy: [
      "Students are expected to participate respectfully, complete agreed practice tasks, and communicate honestly about goals, level, progress, and scheduling needs.",
      "Alberto Academy aims to provide structured instruction and useful feedback, but results depend on attendance, practice, consistency, and each student's learning context.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Service"
      title="Simple terms for a focused learning experience."
      description="These terms explain how Alberto Academy handles tutoring sessions, scheduling, materials, payments, and student participation."
      updated="June 29, 2026"
      sections={sections}
    />
  );
}
