export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  role: string;
  technologies: string[];
  features: string[];
  screenshots: string[]; // paths to screenshots relative to public dir
  demoVideo: string | null; // path to video or null
  liveDemo: string | null; // URL or null
  github: string | null; // URL or null
}

export const projects: Project[] = [
  {
    id: "restaurant-scolaire",
    title: "Restaurant Scolaire Management System",
    category: "Desktop Application / Full-Stack",
    description: "A complete desktop management application designed for a school restaurant.",
    overview: "This application streamlines the daily operations of a school restaurant, handling everything from product and supplier management to detailed consumption tracking. Designed with offline capabilities, it provides a robust and reliable solution for inventory and reporting without relying on a continuous internet connection.",
    role: "Frontend / Full-Stack Development",
    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "Prisma",
      "SQLite"
    ],
    features: [
      "Product management",
      "Supplier management",
      "Purchases tracking",
      "Consumption tracking",
      "Stock management",
      "CRUD operations",
      "PDF reports generation",
      "Offline database support"
    ],
    screenshots: [],
    demoVideo: null,
    liveDemo: null,
    github: null
  }
];
