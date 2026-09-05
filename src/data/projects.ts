import { Project, ProjectVideo } from '../types';

export type { Project, ProjectVideo };

export const projects: Project[] = [
  {
    id: "gestion-de-vente",
    title: "Gestion de Vente",
    category: "Desktop Application / Full-Stack",
    description: "Application de bureau moderne et complète pour la gestion des ventes, des stocks, des fournisseurs et de la facturation.",
    overview: "Cette application simplifie la gestion quotidienne des activités commerciales : suivi des ventes et achats, gestion des stocks en temps réel, génération de rapports et factures PDF. Conçue avec une architecture moderne, elle garantit performance, robustesse et fonctionnement fluide en mode hors-ligne.",
    role: "Frontend / Full-Stack Development",
    technologies: [
      "React",
      "TypeScript",
      "Electron",
      "Prisma",
      "SQLite"
    ],
    features: [
      "Gestion des produits et du catalogue",
      "Gestion des clients et fournisseurs",
      "Suivi des ventes et achats en temps réel",
      "Gestion avancée des stocks et alertes",
      "Opérations CRUD rapides et sécurisées",
      "Génération et impression de factures & rapports PDF",
      "Base de données locale hors-ligne (Offline support)"
    ],
    screenshots: ["/projects/img2.jpg"],
    demoVideo: null,
    // قائمة الفيديوهات
    videos: [
      {
        title: "Full Project Showcase & Walkthrough",
        url: "/projects/gestionv.mp4",
        description: "عرض شامل للنظام ولوحة التحكم والوظائف الأساسية"
      }
    ],
    liveDemo: null,
    github: null
  },

  {
    id: "plateforme-agritech",
    title: "Plateforme Agritech",
    category: "Web Application / Full-Stack",
    description: "Plateforme web innovante dédiée au secteur agricole (AgriTech) facilitant la gestion, le suivi des cultures et les interactions producteurs-clients.",
    overview: "Une solution web full-stack développée pour moderniser la gestion agricole. Elle intègre un tableau de bord dynamique, des animations fluides avec GSAP, et une interface utilisateur moderne avec Shadcn UI pour offrir une expérience utilisateur intuitive et performante.",
    role: "Full-Stack Development",
    technologies: [
      "React",
      "Express.js",
      "MongoDB",
      "GSAP",
      "Shadcn UI",
      "Node.js"
    ],
    features: [
      "Tableau de bord interactif pour le suivi agricole",
      "Gestion des données et analytics des cultures",
      "API REST sécurisée avec Node.js et Express",
      "Base de données NoSQL évolutive avec MongoDB",
      "Animations interactives et fluides avec GSAP",
      "Design moderne et responsive avec Shadcn UI & Tailwind CSS"
    ],
    screenshots: ["/projects/img1.jpg"],
    demoVideo: null,
    // قائمة الفيديوهات
    videos: [
      {
        title: "Full Project Showcase & Walkthrough",
        url: "/projects/video1.mp4",
        description: "عرض شامل للنظام ولوحة التحكم والوظائف الأساسية"
      }
    ],
    liveDemo: null,
    github: null
  }
];