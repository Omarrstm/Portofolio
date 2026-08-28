export const personalInfo = {
  name: "Omar Rostom",
  title: "Computer Engineer",
  tagline: "I turn ideas into full-stack products that actually ship.",
  about:
    "I'm a 22-year-old Computer Engineer freshly graduated from Altınbaş University in Istanbul. I enjoy building things end-to-end — whether that's customizing ERP modules, analyzing data pipelines, or shipping web apps. I've gained hands-on experience through a software development internship and data analysis work, and I'm fluent in Arabic, English, and conversational Turkish. Currently open to full-time Software Engineer opportunities.",
  email: "omarrestom11@gmail.com",
  github: "https://github.com/Omarrstm",
  linkedin: "https://www.linkedin.com/in/omar-rostom-11873a182/",
  whatsapp: "https://wa.me/905314718803",
  location: "Istanbul, Turkey",
};

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "C", "C++", "SQL"],
  Frontend: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  Backend: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Prisma", "Odoo"],
  Tools: ["Git", "GitHub", "Linux", "VS Code", "Microsoft Office"],
};

export const projects = [
  {
    title: "SnapSpend",
    description:
      "An offline, on-device expense tracker for Android. Snap a photo of a receipt and on-device OCR (Google ML Kit) parses the merchant, total, and date into an editable form — no cloud API, no account, no network connection required. Full expense history with category filtering and a stats screen breaking down spending by category and month, all backed by local SQLite storage. Covered by Jest unit tests for the receipt-parsing heuristic, with GitHub Actions CI on every push.",
    tech: ["React Native", "Expo", "TypeScript", "SQLite", "ML Kit", "Jest"],
    github: "https://github.com/Omarrstm/snapspend",
    live: "",
  },
  {
    title: "FitFork",
    description:
      "A two-sided marketplace connecting home cooks with buyers who care about their macros. Cooks list meals with full nutrition breakdowns and diet tags; buyers filter by macros/diet, place orders through a real status lifecycle, and leave ratings/reviews. Hand-rolled auth, schema, and API layer rather than a backend-as-a-service, backed by automated tests and CI running on every push.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth", "Vitest", "Tailwind CSS"],
    github: "https://github.com/Omarrstm/FitFork",
    live: "https://fitfork-ochre.vercel.app",
  },
  {
    title: "TheTouristGuide",
    description:
      "A full-stack travel review platform where travelers rate and review places, message local guides, and plan trips into shareable itineraries. Includes an interactive map (Leaflet/OpenStreetMap), an admin moderation queue for reported content, in-app and email notifications, and guide ratings — all backed by a normalized Postgres schema with 15+ Prisma models.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Leaflet"],
    github: "https://github.com/Omarrstm/TheTouristGuide",
    live: "https://the-tourist-guide.vercel.app",
  },
  {
    title: "Gym Tracker",
    description:
      "A self-hosted workout tracker for planning training programs and logging sessions. Build weekly programs with per-exercise targets, log sets against today's workout, and track progress with PR detection and an estimated 1RM chart, plus body-stat tracking with BMI/BMR and a configurable rest timer.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "Resend"],
    github: "https://github.com/Omarrstm/Gym-tracker",
    live: "https://gym-tracker-chi-tawny.vercel.app",
  },
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "EDM Company · Beirut, Lebanon",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Developed and customized Odoo CRM modules supporting client relationship management workflows.",
      "Built a real estate management module with property listings, offer handling, and role-based access control.",
      "Collaborated with senior developers to translate business requirements into functional solutions.",
      "Tested, debugged, and documented CRM features to ensure reliability in production.",
    ],
  },
  {
    role: "Web Data Analyst",
    company: "Oktamam · Istanbul, Turkey (Hybrid)",
    period: "Jan 2024 – Jan 2025",
    bullets: [
      "Analyzed and structured web data while maintaining accuracy and consistency across digital platforms.",
      "Applied analytical skills to support reporting and data-driven decision making.",
      "Worked independently and collaboratively in a hybrid environment across multiple projects.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Engineering – Computer Engineering",
    school: "Altınbaş University · Istanbul, Turkey",
    period: "Oct 2022 – Jul 2026",
    gpa: "3.3 / 4.0",
  },
];
