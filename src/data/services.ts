export interface ServiceData {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  icon: string;
}

export const services: ServiceData[] = [
  {
    id: "fullstack-dev",
    title: "Full-Stack Development",
    description: "Complete solutions combining intuitive user interfaces, backend logic, APIs, databases, and scalable system architecture.",
    technologies: ["MERN STACK", "PERN STACK", "Node.js", "SQL", "Prisma", "NO SQL", "GRAPHQL", "MICROSERVICES"],
    icon: "Layers"
  },
  {
    id: "web-dev",
    title: "Web Development",
    description: "Modern and responsive web applications built around real business needs, with clean interfaces and reliable functionality.",
    technologies: ["NEXT JS", "React", "JAVASCRIPT", "TypeScript", "Tailwind CSS", "shadcn UI", "GSAP", "Node.js"],
    icon: "Globe"
  },
  {
    id: "mobile-desktop-dev",
    title: "Mobile & Desktop Applications",
    description: "Practical applications designed for performance, usability, and real-world workflows across mobile and desktop platforms.",
    technologies: ["FLUTTER", "REACT NATIVE", "Electron", "React", "SQLite"],
    icon: "Monitor"
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    description: "Engineering responsive, performant, and interactive client-side interfaces with modern state management and clean UI design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    icon: "Layout"
  },
  {
    id: "backend-dev",
    title: "Backend & API Development",
    description: "Building secure, well-documented REST APIs, business logic layers, authentication, and server-side workflows.",
    technologies: ["Node.js", "Express", "fastAPI", "TypeScript"],
    icon: "Server"
  },
  {
    id: "database-integration",
    title: "Database Integration & Modeling",
    description: "Designing structured schemas, relational databases, migrations, and efficient query pipelines for online and offline apps.",
    technologies: ["PostgreSQL", "SQLite", "Prisma ORM", "MySQL", "MongoDB"],
    icon: "Database"
  }
];
