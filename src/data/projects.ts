import { Project, ProjectVideo } from '../types';

export type { Project, ProjectVideo };

export const projects: Project[] = [
  {
    id: "gestion-de-vente",
    title: "Gestion de Vente",
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
    screenshots: ["/projects/img2.jpg"],
    demoVideo: "/projects/gestionv.mp4",
    videos: [
      {
        title: "Full Project Showcase & Walkthrough",
        url: "/projects/gestionv.mp4",
        description: "عرض شامل للنظام ولوحة التحكم والوظائف الأساسية"
      }
    ],
    liveDemo: null,
    github: "https://github.com/anis-zr"
  },

  {
    id: "plateforme-agritech",
    title: "Plateforme Agritech",
    category: "Web Application / Full-Stack",
    description: "A full-stack agricultural management platform providing crop tracking, interactive dashboards, and farmer-to-client operations.",
    overview: "Built with React, Express.js, MongoDB, and GSAP, this web application modernizes agricultural operations through dynamic data visualization, interactive animations, and a modern responsive interface styled with Shadcn UI.",
    role: "Full-Stack Development",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "GSAP",
      "Shadcn UI"
    ],
    features: [
      "Interactive monitoring dashboard",
      "Crop data and analytics management",
      "RESTful API backend with Express.js",
      "NoSQL database storage with MongoDB",
      "Interactive user animations with GSAP",
      "Modern responsive UI with Shadcn UI & Tailwind CSS"
    ],
    screenshots: ["/projects/img1.jpg"],
    demoVideo: "/projects/video1.mp4",
    videos: [
      {
        title: "Full Project Showcase & Walkthrough",
        url: "/projects/video1.mp4",
        description: "عرض شامل للنظام ولوحة التحكم والوظائف الأساسية"
      }
    ],
    liveDemo: null,
    github: "https://github.com/anis-zr"
  },

  {
    id: "catalogue-parfum",
    title: "Catalogue Parfum",
    category: "Mobile Application / Full-Stack",
    description: "A mobile catalog application built with Flutter and SQLite for perfume inventory and showcase.",
    overview: "A cross-platform mobile application providing product catalog browsing, detailed item presentations, and local offline data storage using SQLite.",
    role: "Full-Stack Development",
    technologies: [
      "Flutter",
      "Dart",
      "SQLite"
    ],
    features: [
      "Product catalog browsing",
      "Detailed fragrance item showcase",
      "Offline database storage with SQLite",
      "Cross-platform mobile UI built with Flutter",
      "Fast local search and filtering"
    ],
    screenshots: ["/projects/mobilesc1.jpg"],
    demoVideo: "/projects/mobile1.mp4",
    videos: [
      {
        title: "Full Project Showcase & Walkthrough",
        url: "/projects/mobile1.mp4",
        description: "عرض شامل للنظام ولوحة التحكم والوظائف الأساسية"
      }
    ],
    liveDemo: null,
    github: "https://github.com/anis-zr"
  },

  {
    id: "landing-page",
    title: "Landing Page",
    category: "Web Application / Full-Stack",
    description: "A modern, high-conversion landing page featuring interactive animations and responsive layout.",
    overview: "A modern frontend landing page engineered with React, TypeScript, and GSAP animations to deliver an engaging product presentation with smooth user interactions across all screen sizes.",
    role: "Full-Stack Development",
    technologies: [
      "React",
      "TypeScript",
      "GSAP"
    ],
    features: [
      "Interactive GSAP animations",
      "Type-safe architecture with TypeScript",
      "Fully responsive design across mobile and desktop",
      "Modern UI components and typography",
      "Performance-optimized layout"
    ],
    screenshots: ["/projects/mdimg.jpg"],
    demoVideo: "/projects/mdph.mp4",
    videos: [
      {
        title: "Full Project Showcase & Walkthrough",
        url: "/projects/mdph.mp4",
        description: "عرض شامل للنظام ولوحة التحكم والوظائف الأساسية"
      }
    ],
    liveDemo: null,
    github: "https://github.com/anis-zr"
  }
];