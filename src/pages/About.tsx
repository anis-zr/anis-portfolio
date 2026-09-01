import React, { useEffect, useRef } from 'react';
import { 
  Terminal, 
  CheckCircle2, 
  Award, 
  Monitor, 
  Smartphone, 
  Globe,
  Layers,
  Database,
  Server
} from 'lucide-react';
import { CTASection } from '../components/CTA/CTASection';
import { animatePageIn } from '../animations/pageTransitions';

export const About: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animatePageIn(pageRef.current);
  }, []);

  return (
    <div ref={pageRef} className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
          About Me
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
          Full-Stack Developer Building Complete Products
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          I develop complete applications across web, mobile, and desktop platforms — bridging intuitive user interfaces with robust backend architectures, APIs, and databases.
        </p>
      </div>

      {/* Main Professional Profile Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
          <p className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100">
            As a <strong className="text-brand-600 dark:text-brand-400 font-bold">Full-Stack Developer</strong>, my focus is delivering the entire software solution. Whether you need a web app, a cross-platform mobile app, or a desktop management system with offline capabilities, I handle the full lifecycle from frontend UI to backend systems and data models.
          </p>

          <p>
            My core development capabilities span across key platforms and layers:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl glass-card">
              <Globe className="w-5 h-5 text-brand-500 mb-2" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Web Apps</h4>
              <p className="text-xs text-slate-500 mt-1">Modern, responsive, full-stack web platforms.</p>
            </div>
            <div className="p-4 rounded-xl glass-card">
              <Smartphone className="w-5 h-5 text-cyan-500 mb-2" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Mobile</h4>
              <p className="text-xs text-slate-500 mt-1">Cross-platform mobile interfaces and integrations.</p>
            </div>
            <div className="p-4 rounded-xl glass-card">
              <Monitor className="w-5 h-5 text-indigo-500 mb-2" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Desktop</h4>
              <p className="text-xs text-slate-500 mt-1">Electron desktop software with offline databases.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl glass-card">
              <Server className="w-5 h-5 text-emerald-500 mb-2" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Backend & APIs</h4>
              <p className="text-xs text-slate-500 mt-1">REST APIs, business logic, and authentication.</p>
            </div>
            <div className="p-4 rounded-xl glass-card">
              <Database className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Databases</h4>
              <p className="text-xs text-slate-500 mt-1">Relational SQL, SQLite, PostgreSQL, and ORM pipelines.</p>
            </div>
          </div>

          <p>
            I work with founders, engineering teams, and freelance clients on Upwork and global platforms to take ideas from concept to a fully functioning production release.
          </p>
        </div>

        {/* Quick Highlights / Philosophy Card */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl glass-card space-y-4">
            <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-500" />
              <span>Engineering Philosophy</span>
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Complete product development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Clean, maintainable, typed codebase</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Modern interfaces & solid backends</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span>Performance, reliability & security</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education / Certification Section */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <Award className="w-5 h-5 text-brand-500" />
          <span>Certifications & Additional Qualifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 shrink-0">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                CCNA 3 Certification
              </h3>
              <p className="text-xs uppercase font-semibold text-slate-500 tracking-wider mt-0.5">
                Cisco Certified Network Associate
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                Foundational understanding of networking protocols, enterprise routing, switching, and network security fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTASection />
    </div>
  );
};
