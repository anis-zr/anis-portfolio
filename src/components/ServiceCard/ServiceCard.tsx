import React from 'react';
import { 
  Layout, 
  Globe, 
  Smartphone, 
  Monitor, 
  Database, 
  Code, 
  Layers, 
  Server,
  Sparkles,
  LucideIcon 
} from 'lucide-react';
import { ServiceData } from '../../types';
import { Badge } from '../ui/Badge';

interface ServiceCardProps {
  service: ServiceData;
}

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Globe,
  Smartphone,
  Monitor,
  Database,
  Code,
  Layers,
  Server,
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Sparkles;

  return (
    <div
      className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl glass-card hover:border-brand-500/40 dark:hover:border-brand-500/40 hover:shadow-lg transition-all duration-300"
    >
      <div>
        {/* Service Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-brand-50/80 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200/80 dark:border-brand-800/80 transition-transform duration-300 group-hover:scale-110"
        >
          <IconComponent className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-3 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
          {service.title}
        </h3>

        {/* Client-Oriented Description */}
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
          {service.description}
        </p>
      </div>

      {/* Technologies */}
      {service.technologies && service.technologies.length > 0 && (
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap gap-1.5">
            {service.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="default"
                size="sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
