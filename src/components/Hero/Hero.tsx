import React, { useEffect, useRef } from 'react';
import { ArrowRight, Layers, Terminal, Database, Cpu, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { WhatsAppIcon } from '../ui/WhatsAppIcon';
import { profile, getWhatsAppUrl } from '../../data/profile';
import { animateHeroEntrance } from '../../animations/heroAnimations';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animateHeroEntrance(containerRef.current);
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden radial-gradient-bg"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Availability Tag */}
        <div className="hero-tag inline-flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/80 shadow-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            <span>Available for WhatsApp Inquiry & Freelance Projects</span>
          </div>
        </div>

        {/* Hero Title */}
        <div className="hero-title space-y-3 mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Hi, I'm <span className="gradient-text-brand">{profile.name}</span>
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100">
            Full-Stack Developer
          </p>
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg font-medium text-slate-600 dark:text-slate-300">
            <span>Web</span>
            <span className="text-brand-500 font-bold">•</span>
            <span>Mobile</span>
            <span className="text-brand-500 font-bold">•</span>
            <span>Desktop Applications</span>
          </div>
        </div>

        {/* Description */}
        <p className="hero-desc max-w-2xl mx-auto text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
          {profile.shortDescription}
        </p>

        {/* CTA Buttons */}
        <div className="hero-btn flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            to="/projects"
            size="lg"
            variant="primary"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            View My Work
          </Button>
          <Button
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="secondary"
            icon={<WhatsAppIcon className="w-4 h-4 fill-emerald-500" />}
            iconPosition="left"
          >
            Chat on WhatsApp
          </Button>
        </div>

        {/* Specialization Pill Row */}
        <div className="hero-badge flex flex-wrap items-center justify-center gap-2.5 pt-4">
          <Badge variant="primary" size="md">
            <Layers className="w-3.5 h-3.5 text-brand-500" />
            <span>Full-Stack Architecture</span>
          </Badge>
          <Badge variant="default" size="md">
            <Cpu className="w-3.5 h-3.5 text-slate-500" />
            <span>Web • Mobile • Desktop</span>
          </Badge>
          <Badge variant="default" size="md">
            <Database className="w-3.5 h-3.5 text-indigo-500" />
            <span>APIs & Databases</span>
          </Badge>
          <Badge variant="accent" size="md">
            <Terminal className="w-3.5 h-3.5 text-cyan-500" />
            <span>CCNA 3 Certified</span>
          </Badge>
          <Badge variant="default" size="md">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>End-to-End Delivery</span>
          </Badge>
        </div>
      </div>
    </section>
  );
};
