import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { profile, getWhatsAppUrl } from '../../data/profile';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/40 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Logo />
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              {profile.title} specializing in building complete applications across Web, Mobile, and Desktop platforms with clean architecture and solid backend foundations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* WhatsApp (Primary) */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {profile.upwork && (
                <a
                  href={profile.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork Profile"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors inline-flex items-center gap-1 text-xs font-semibold"
                >
                  <span>Upwork</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="Send Email"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-brand-500 text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Projects & Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Services Offered
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  About & Background
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact / Inquiry */}
          <div>
            <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white uppercase tracking-wider mb-4">
              Available For Work
            </h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              Looking for a dedicated full-stack developer to build your web, mobile, or desktop product?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline"
            >
              <span>Let's talk about your project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <p>© {currentYear} {profile.name}. All rights reserved.</p>
          <p>Full-Stack Engineering • Web • Mobile • Desktop</p>
        </div>
      </div>
    </footer>
  );
};
