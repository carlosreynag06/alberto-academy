export type ProgramTrack = {
  id: string;
  title: string;
  shortTitle: string;
  detail: string;
  badge: string;
  format: string;
  image: string;
  imageAlt: string;
  focus: string;
  support: string;
  eyebrow: string;
  headline: string;
  description: string;
  outcomes: string[];
  bestFor: string;
};

export const programTracks: ProgramTrack[] = [
  {
    id: "conversation-fluency",
    title: "Conversation fluency",
    shortTitle: "Live Speaking",
    detail: "Guided speaking practice, pronunciation support, listening confidence, and real-time correction.",
    badge: "Live Speaking",
    format: "1:1 Online",
    image: "/images/program-live-speaking-portrait.webp",
    imageAlt: "Adult learner practicing live English conversation in an online lesson",
    focus: "Conversation lab",
    support: "Realtime correction",
    eyebrow: "Speak Naturally",
    headline: "Build the confidence to respond in real conversations.",
    description:
      "Built for learners who want to stop freezing, translating, or overthinking when it is time to speak. Lessons use guided conversation, pronunciation coaching, listening practice, and immediate correction.",
    outcomes: ["Clearer pronunciation", "Faster responses", "Better listening confidence", "Real-life vocabulary"],
    bestFor: "Adults who need English for meetings, travel, customer conversations, interviews, or daily communication.",
  },
  {
    id: "grammar-writing",
    title: "Grammar and writing",
    shortTitle: "Writing Track",
    detail: "Clear grammar instruction, writing feedback, vocabulary building, and structured practice.",
    badge: "Writing Track",
    format: "Guided Practice",
    image: "/images/program-writing-track-portrait.webp",
    imageAlt: "Student practicing English grammar and writing with a tablet and notebook",
    focus: "Grammar clarity",
    support: "Writing feedback",
    eyebrow: "Write Clearly",
    headline: "Turn grammar into clear, confident written English.",
    description:
      "Grammar, vocabulary, and writing are connected through practical communication. Learn the patterns behind English sentences, then use them in messages, paragraphs, essays, and professional writing.",
    outcomes: ["Cleaner sentence structure", "Stronger vocabulary", "Practical writing feedback", "Better grammar accuracy"],
    bestFor: "Students and professionals who need clearer written English for school, work, exams, or formal communication.",
  },
  {
    id: "academic-career-english",
    title: "Academic English",
    shortTitle: "Career Ready",
    detail: "Interview preparation, presentations, academic writing, exam strategy, and professional communication.",
    badge: "Career Ready",
    format: "Goal-Based",
    image: "/images/program-academic-career-portrait.webp",
    imageAlt: "Professional preparing for an English interview or academic presentation online",
    focus: "Interviews and exams",
    support: "Presentation coaching",
    eyebrow: "Advance Goals",
    headline: "Prepare for interviews, exams, presentations, and bigger opportunities.",
    description:
      "Designed around high-stakes English moments: interviews, presentations, academic writing, exam strategy, professional vocabulary, and the language you need to sound prepared.",
    outcomes: ["Interview structure", "Presentation confidence", "Exam strategy", "Academic vocabulary"],
    bestFor: "Learners preparing for career moves, university goals, exams, presentations, or professional communication.",
  },
];
