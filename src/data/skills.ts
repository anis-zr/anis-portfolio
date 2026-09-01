export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "REST APIs"]
  },
  {
    title: "Database",
    skills: ["SQL", "SQLite", "PostgreSQL", "Prisma"]
  },
  {
    title: "Desktop",
    skills: ["Electron"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"]
  },
  {
    title: "Networking",
    skills: ["CCNA 3"]
  }
];
