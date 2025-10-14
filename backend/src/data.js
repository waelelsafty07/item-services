export const profile = {
  name: "Alex Rivera",
  title: "Full Stack Developer",
  location: "Remote · Open to relocation",
  introduction:
    "I build inclusive web experiences that balance performance, accessibility, and delightful design.",
  contact: {
    email: "alex.rivera@example.com",
    phone: "+1 (555) 123-9876",
    github: "https://github.com/alexrivera",
    linkedin: "https://linkedin.com/in/alex-rivera",
    website: "https://alexrivera.dev"
  }
};

export const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Vite", "Redux Toolkit", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Fastify", "Node.js", "PostgreSQL", "Prisma", "REST APIs"]
  },
  {
    category: "DevOps",
    items: ["Docker", "GitHub Actions", "AWS", "Vercel", "Terraform"]
  }
];

export const experience = [
  {
    company: "Nebula Labs",
    role: "Senior Software Engineer",
    startDate: "2022",
    endDate: "Present",
    achievements: [
      "Led the rebuild of a design system used across 7 product teams, reducing UI regressions by 40%.",
      "Architected a serverless analytics pipeline that processes over 50M events per day.",
      "Mentored 5 engineers, formalizing onboarding that cut ramp-up time by half."
    ]
  },
  {
    company: "Orbit Commerce",
    role: "Full Stack Developer",
    startDate: "2019",
    endDate: "2022",
    achievements: [
      "Created a personalization engine that increased checkout conversion by 18%.",
      "Introduced automated accessibility testing, keeping the site WCAG 2.1 AA compliant.",
      "Maintained CI/CD pipelines that delivered weekly releases with under 1% rollback rate."
    ]
  }
];

export const projects = [
  {
    name: "PulseView Dashboard",
    description:
      "An observability dashboard combining real-time metrics with long term analytics for SRE teams.",
    tech: ["React", "D3.js", "WebSockets", "Fastify"],
    url: "https://pulseview.dev"
  },
  {
    name: "Gatherly",
    description: "A community event platform that helps organizers host hybrid events with ease.",
    tech: ["Next.js", "PostgreSQL", "GraphQL", "Tailwind"],
    url: "https://gatherly.app"
  },
  {
    name: "FocusKit",
    description: "A productivity toolkit with Pomodoro timers, focus music, and team leaderboards.",
    tech: ["React Native", "Expo", "Firebase"],
    url: "https://focuskit.io"
  }
];

export const testimonials = [
  {
    name: "Priya Patel",
    role: "Director of Engineering · Nebula Labs",
    quote:
      "Alex brings a rare blend of product intuition and technical rigor. Their solutions uplift the whole team."
  },
  {
    name: "Marcus Chen",
    role: "Product Manager · Orbit Commerce",
    quote:
      "They continually translated ambiguous requirements into polished experiences that users loved."
  }
];

export const timeline = [
  { year: "2014", label: "Discovered HTML & CSS" },
  { year: "2016", label: "Internship at CloudScale" },
  { year: "2018", label: "Graduated B.S. Computer Science" },
  { year: "2019", label: "Joined Orbit Commerce" },
  { year: "2022", label: "Promoted to Senior at Nebula Labs" }
];
