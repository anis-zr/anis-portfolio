import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Monitor, Layers, Play } from 'lucide-react';
import { Project } from '../../types';
import { Badge } from '../ui/Badge';
import { init3DTilt } from '../../animations/projectAnimations';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cleanup = init3DTilt(cardRef.current, innerRef.current);
    return cleanup;
  }, []);

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const mainImage = hasScreenshots ? project.screenshots[0] : null;

  return (
    <div
      ref={cardRef}
      className={`group relative rounded-2xl transition-all duration-300 ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{ perspective: '1000px' }}
    >
      <div
        ref={innerRef}
        className="h-full flex flex-col rounded-2xl overflow-hidden glass-card hover:border-brand-500/50 dark:hover:border-brand-500/40 hover:shadow-card-dark transition-all duration-300"
      >
        {/* Project Thumbnail Area */}
        <Link 
          to={`/projects/${project.id}`}
          className="relative aspect-[16/9] w-full bg-slate-100 dark:bg-slate-900/80 overflow-hidden block focus:outline-none"
          tabIndex={-1}
        >
          {mainImage ? (
            <img
              src={mainImage}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            /* Clean, modern aesthetic placeholder when screenshots are not yet provided */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 text-slate-400 dark:text-slate-600 transition-colors">
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-sm mb-3 group-hover:scale-110 transition-transform duration-300">
                <Monitor className="w-8 h-8 text-brand-500" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
                {project.category}
              </span>
            </div>
          )}

          {/* Category Tag Overlay */}
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-900/80 text-white backdrop-blur-md border border-white/10 shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Video indicator if demo video exists */}
          {project.demoVideo && (
            <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-brand-600/90 text-white backdrop-blur-md shadow-md">
              <Play className="w-3.5 h-3.5 fill-white" />
            </div>
          )}
        </Link>

        {/* Card Body */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                <Link to={`/projects/${project.id}`}>
                  {project.title}
                </Link>
              </h3>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.technologies.slice(0, 5).map((tech) => (
                <Badge key={tech} variant="default" size="sm">
                  {tech}
                </Badge>
              ))}
              {project.technologies.length > 5 && (
                <Badge variant="outline" size="sm">
                  +{project.technologies.length - 5} more
                </Badge>
              )}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" />
              {project.role}
            </span>
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-brand-400 group-hover:translate-x-1 transition-transform"
            >
              <span>View Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
