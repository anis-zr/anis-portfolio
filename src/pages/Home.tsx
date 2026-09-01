import React, { useEffect, useRef } from 'react';
import { ArrowRight, Globe, Monitor, Layers } from 'lucide-react';
import { Hero } from '../components/Hero/Hero';
import { ProjectCard } from '../components/ProjectCard/ProjectCard';
import { ServiceCard } from '../components/ServiceCard/ServiceCard';
import { SkillCard } from '../components/SkillCard/SkillCard';
import { CTASection } from '../components/CTA/CTASection';
import { Button } from '../components/ui/Button';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { skillsData } from '../data/skills';
import { animatePageIn } from '../animations/pageTransitions';
import { animateSectionReveal } from '../animations/scrollAnimations';

export const Home: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const whatIDoRef = useRef<HTMLDivElement>(null);
  const featuredProjectsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animatePageIn(pageRef.current);
    animateSectionReveal(whatIDoRef.current);
    animateSectionReveal(featuredProjectsRef.current);
    animateSectionReveal(servicesRef.current);
    animateSectionReveal(skillsRef.current);
  }, []);

  return (
    <div ref={pageRef} className="space-y-16 sm:space-y-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Capability Cards: Web, Mobile & Desktop, Full-Stack */}
      <section ref={whatIDoRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
            Development Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Complete Application Engineering
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            From intuitive user interfaces to robust backend logic, databases, and multi-platform deployments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Web Applications */}
          <div className="p-8 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-brand-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-3">
              Web Applications
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Modern and responsive web applications built around real business needs, with clean interfaces and reliable functionality.
            </p>
          </div>

          {/* Card 2: Mobile & Desktop Applications */}
          <div className="p-8 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-950 text-cyan-600 dark:text-cyan-400 flex items-center justify-center mb-6">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-3">
              Mobile & Desktop Applications
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Practical applications designed for performance, usability and real-world workflows across mobile and desktop platforms.
            </p>
          </div>

          {/* Card 3: Full-Stack Solutions */}
          <div className="p-8 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800 hover:border-indigo-500/40 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-3">
              Full-Stack Solutions
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Complete solutions combining frontend, backend, APIs, databases and application architecture.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Featured Real Projects */}
      <section ref={featuredProjectsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
              Featured Real Projects
            </h2>
            <p className="mt-2 text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Real applications built for businesses and specific operational workflows.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button
              to="/projects"
              variant="outline"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View All Projects
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 4. Services Offered */}
      <section ref={servicesRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
            What I Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Services for Clients & Teams
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            End-to-end development services tailored to deliver maximum commercial value and complete product functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 5. Tech Stack & Skills */}
      <section ref={skillsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Technologies & Tools
          </h2>
          <p className="mt-2 text-base text-slate-600 dark:text-slate-400">
            A comprehensive stack spanning frontend interfaces, backend services, databases, desktop runtimes, and networking fundamentals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>
      </section>

      {/* 6. Call To Action */}
      <CTASection />
    </div>
  );
};
