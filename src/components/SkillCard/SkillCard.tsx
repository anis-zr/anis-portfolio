import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Monitor, 
  Wrench, 
  Network,
  Sparkles,
  LucideIcon 
} from 'lucide-react';
import { SkillCategory } from '../../types';

interface SkillCardProps {
  category: SkillCategory;
}

const categoryIconMap: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Database: Database,
  Desktop: Monitor,
  Tools: Wrench,
  Networking: Network,
};

export const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  const IconComponent = categoryIconMap[category.title] || Sparkles;

  return (
    <div
      className="p-6 rounded-2xl glass-card hover:border-brand-500/40 dark:hover:border-brand-500/40 hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div
          className="p-2.5 rounded-xl bg-brand-50/80 dark:bg-brand-950/80 text-brand-600 dark:text-brand-400 border border-brand-200/80 dark:border-brand-800/80"
        >
          <IconComponent className="w-5 h-5" />
        </div>
        <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-brand-500/40 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
