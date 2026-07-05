export type FAQItem = {
  question: string;
  answer: string;
  category: "Lessons" | "Materials" | "Scheduling" | "Progress";
};

export const allFaqs: FAQItem[] = [
  {
    question: "What platforms are utilized?",
    answer:
      "We use high-quality video conferencing for live instruction, pronunciation practice, screen sharing, and real-time feedback.",
    category: "Lessons",
  },
  {
    question: "Are materials included?",
    answer:
      "Yes. Students receive guided practice materials, class notes, and interactive resources connected to their learning path.",
    category: "Materials",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Lessons can be rescheduled with advance notice. Final terms will be confirmed when your tutoring plan is selected.",
    category: "Scheduling",
  },
  {
    question: "Do you offer group immersion?",
    answer:
      "Private tutoring is the core offer, but small group immersion sessions can be arranged for teams, families, or focused cohorts.",
    category: "Lessons",
  },
  {
    question: "Who are Alberto Academy lessons best for?",
    answer:
      "Lessons are designed for adults and motivated students who want practical English for work, travel, school, exams, interviews, or everyday communication.",
    category: "Lessons",
  },
  {
    question: "Do I need to know my English level before booking?",
    answer:
      "No. The trial lesson includes a focused level check so Alberto can recommend the right starting point and learning path.",
    category: "Progress",
  },
  {
    question: "How long is a typical lesson?",
    answer:
      "Lesson length depends on the plan selected, but sessions are structured to include instruction, guided practice, correction, and next-step assignments.",
    category: "Scheduling",
  },
  {
    question: "Can lessons focus on business English?",
    answer:
      "Yes. Lessons can target meetings, presentations, interviews, professional writing, client communication, and workplace vocabulary.",
    category: "Lessons",
  },
  {
    question: "Will I receive homework?",
    answer:
      "Most students receive focused practice tasks after class. Assignments are practical, manageable, and connected to the goals discussed during lessons.",
    category: "Materials",
  },
  {
    question: "How is progress measured?",
    answer:
      "Progress is tracked through speaking confidence, accuracy, vocabulary use, writing improvement, listening comprehension, and the goals defined in your plan.",
    category: "Progress",
  },
  {
    question: "Can Alberto help with exams or interviews?",
    answer:
      "Yes. Sessions can include exam strategy, mock interviews, answer structure, pronunciation support, writing feedback, and targeted vocabulary.",
    category: "Progress",
  },
  {
    question: "Are lessons personalized for Spanish-speaking learners?",
    answer:
      "Yes. Alberto designs instruction with Spanish-speaking learners in mind, especially around pronunciation, sentence structure, common grammar patterns, and confidence.",
    category: "Lessons",
  },
  {
    question: "What happens during the trial lesson?",
    answer:
      "The trial lesson reviews your goals, current level, speaking needs, learning history, and recommended next steps before choosing a tutoring plan.",
    category: "Scheduling",
  },
  {
    question: "Can I pause or change my learning plan?",
    answer:
      "Plans can be adjusted as your schedule, goals, or progress changes. The best option will depend on availability and the plan terms.",
    category: "Scheduling",
  },
  {
    question: "Do you provide downloadable resources?",
    answer:
      "When useful, students receive notes, practice activities, vocabulary lists, writing prompts, or review materials to support independent study.",
    category: "Materials",
  },
];

export const homepageFaqs = allFaqs.slice(0, 4);
