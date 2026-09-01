import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ExternalLink, 
  Github, 
  Play, 
  CheckCircle2, 
  Sparkles,
  Monitor
} from 'lucide-react';
import { projects } from '../data/projects';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { getWhatsAppUrl } from '../data/profile';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ProjectGallery } from '../components/ProjectGallery/ProjectGallery';
import { VideoModal } from '../components/VideoPlayer/VideoModal';
import { animatePageIn } from '../animations/pageTransitions';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const pageRef = useRef<HTMLDivElement>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    animatePageIn(pageRef.current);
  }, [id]);

  if (!project) {
    return (
      <div className="pt-36 pb-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
          Project Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          The project you are looking for does not exist or has been moved.
        </p>
        <Button to="/projects" variant="primary" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
          Back to All Projects
        </Button>
      </div>
    );
  }

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const mainImage = hasScreenshots ? project.screenshots[0] : null;

  return (
    <div ref={pageRef} className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* 1. Project Hero */}
      <div className="space-y-4 mb-10">
        <div className="inline-flex items-center gap-2">
          <Badge variant="primary" size="md">
            {project.category}
          </Badge>
          <Badge variant="outline" size="md">
            {project.role}
          </Badge>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          {project.description}
        </p>

        {/* Quick Action Bar (Video, Live Demo, GitHub) */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.demoVideo && (
            <Button
              onClick={() => setVideoModalOpen(true)}
              variant="primary"
              size="md"
              icon={<Play className="w-4 h-4 fill-white" />}
              iconPosition="left"
            >
              Watch Demo
            </Button>
          )}

          {project.liveDemo && (
            <Button
              href={project.liveDemo}
              target="_blank"
              variant="secondary"
              size="md"
              icon={<ExternalLink className="w-4 h-4" />}
            >
              Live Demo
            </Button>
          )}

          {project.github && (
            <Button
              href={project.github}
              target="_blank"
              variant="outline"
              size="md"
              icon={<Github className="w-4 h-4" />}
            >
              GitHub
            </Button>
          )}
        </div>
      </div>

      {/* 2. Large Project Hero / Screenshot */}
      <div className="mb-14 rounded-2xl overflow-hidden glass-card border border-slate-200 dark:border-slate-800 shadow-xl">
        {mainImage ? (
          <img
            src={mainImage}
            alt={`${project.title} Hero View`}
            className="w-full aspect-[16/9] object-cover object-top"
          />
        ) : (
          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-950 text-slate-400 dark:text-slate-600">
            <div className="p-6 rounded-3xl bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 shadow-md mb-4">
              <Monitor className="w-14 h-14 text-brand-500" />
            </div>
            <span className="font-display font-bold text-xl text-slate-800 dark:text-slate-200">
              {project.title}
            </span>
            <span className="text-xs uppercase font-semibold tracking-widest text-slate-500 mt-1">
              {project.category}
            </span>
          </div>
        )}
      </div>

      {/* 3. Overview & Problem / Purpose */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">
        <div className="md:col-span-2 space-y-8">
          {/* Overview */}
          <div>
            <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4">
                Key Features & Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar Info: Role & Tech Stack */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl glass-card space-y-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                My Role
              </span>
              <p className="text-base font-semibold text-slate-900 dark:text-white">
                {project.role}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="primary" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Screenshot Gallery */}
      {hasScreenshots && (
        <ProjectGallery
          screenshots={project.screenshots}
          projectTitle={project.title}
        />
      )}

      {/* 5. Bottom Navigation */}
      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Button
          to="/projects"
          variant="secondary"
          icon={<ArrowLeft className="w-4 h-4" />}
          iconPosition="left"
        >
          Back to Projects
        </Button>

        <Button
          href={getWhatsAppUrl(`Hi Anis! I saw your ${project.title} project and would like to discuss a similar project.`)}
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          className="bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20 text-white font-semibold"
          icon={<WhatsAppIcon className="w-4 h-4 fill-white" />}
          iconPosition="left"
        >
          Discuss on WhatsApp
        </Button>
      </div>

      {/* Demo Video Modal */}
      {project.demoVideo && (
        <VideoModal
          videoSrc={project.demoVideo}
          title={project.title}
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
        />
      )}
    </div>
  );
};
