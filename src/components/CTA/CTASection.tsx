import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { getWhatsAppUrl } from '../../data/profile';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-brand-500/30 p-8 sm:p-12 lg:p-16 text-center shadow-xl">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              Available for New Projects & Contracts
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Have a Project in Mind? <br />
              <span className="gradient-text-brand">Let's Discuss on WhatsApp.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you need a complete web platform, a cross-platform mobile app, a desktop application, or backend API integrations, let's talk directly on WhatsApp.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Button
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="primary"
                className="bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20 hover:shadow-emerald-500/30 font-bold"
                icon={<WhatsAppIcon className="w-5 h-5 fill-white" />}
                iconPosition="left"
              >
                Contact me on WhatsApp
              </Button>
              <Button
                to="/projects"
                size="lg"
                variant="outline"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
