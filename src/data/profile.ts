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
  socialLinks: { name: string; url: string; icon: string }[];
}

export const profile: ProfileData = {
  name: "Anis",
  title: "Full-Stack Developer",
  shortDescription: "I build modern, reliable and scalable applications, from intuitive user interfaces to backend systems, APIs and databases.",
  whatsapp: "+213770731096", // Placeholder: Replace with your international WhatsApp phone number (e.g. +213..., +1..., +33...)
  whatsappDefaultMessage: "Hi Anis, I found your portfolio and would like to discuss a project.",

  github: "https://github.com/anis-zr", // Secondary link
  linkedin: "https://linkedin.com/in/yourusername", // Secondary link
  upwork: "https://www.upwork.com/freelancers/~017b153c8db89b40c5?mp_source=share", // Secondary link
  socialLinks: []
};

/**
 * Generates a direct WhatsApp (wa.me) URL using the configured phone number and pre-filled message.
 */
export const getWhatsAppUrl = (customMessage?: string): string => {
  const cleanNumber = profile.whatsapp
    ? profile.whatsapp.replace(/[^0-9]/g, '')
    : '';

  const message =
    customMessage ||
    profile.whatsappDefaultMessage ||
    'Hi Anis, I found your portfolio and would like to discuss a project.';

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
};
