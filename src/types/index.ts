export interface ProjectVideo {
  title: string;
  url: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  overview: string;
  role: string;
  technologies: string[];
  features: string[];
  screenshots: string[];
  demoVideo?: string | null;
  videos?: (ProjectVideo | string)[];
  liveDemo?: string | null;
  github?: string | null;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  technologies?: string[];
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  title: string;
  shortDescription: string;
  whatsapp: string;
  whatsappDefaultMessage?: string;
  email?: string | null;
  github: string | null;
  linkedin: string | null;
  upwork: string | null;
  socialLinks: SocialLink[];
}
