import React, { useEffect, useRef } from 'react';
import { ServiceCard } from '../components/ServiceCard/ServiceCard';
import { CTASection } from '../components/CTA/CTASection';
import { services } from '../data/services';
import { animatePageIn } from '../animations/pageTransitions';

export const Services: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animatePageIn(pageRef.current);
  }, []);

  return (
    <div ref={pageRef} className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
            Services & Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Full-Stack Services for Complete Products
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I provide complete software development services from user interfaces to backend systems, APIs, databases, and multi-platform applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </div>

        {/* Working Process */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
              Workflow
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">
              My Engineering Process
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              A structured approach ensuring quality code, predictable timelines, and transparent communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Scope', desc: 'Understanding your requirements, business goals, and defining the system architecture.' },
              { step: '02', title: 'Architecture & UI', desc: 'Designing data schemas, API contracts, component hierarchies, and user workflows.' },
              { step: '03', title: 'Full-Stack Build', desc: 'Developing typed frontend and backend code, connecting databases, and handling state.' },
              { step: '04', title: 'Testing & Delivery', desc: 'Ensuring cross-platform stability, offline behavior, security, and smooth deployment.' },
            ].map((phase) => (
              <div key={phase.step} className="p-6 rounded-2xl glass-card">
                <span className="text-2xl font-black font-display text-brand-500 mb-2 block">
                  {phase.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {phase.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CTASection />
      </div>
    </div>
  );
};
