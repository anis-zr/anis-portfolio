import React, { useEffect, useRef, useState } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Clock,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  MessageSquareText
} from 'lucide-react';
import { profile, getWhatsAppUrl } from '../data/profile';
import { WhatsAppIcon } from '../components/ui/WhatsAppIcon';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { animatePageIn } from '../animations/pageTransitions';

const PRESET_MESSAGES = [
  {
    id: 'general',
    label: 'General Project Discussion',
    message: 'Hi Anis! I have a new project in mind and would like to discuss the scope and timeline.'
  },
  {
    id: 'fullstack',
    label: 'Full-Stack Web or Mobile App',
    message: 'Hi Anis! I am looking for a full-stack developer to build a web/mobile application.'
  },
  {
    id: 'desktop',
    label: 'Desktop Software / Systems',
    message: 'Hi Anis! I need development work on a desktop application / backend architecture.'
  }
];

export const Contact: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedMessage, setSelectedMessage] = useState(PRESET_MESSAGES[0].message);

  useEffect(() => {
    animatePageIn(pageRef.current);
  }, []);

  return (
    <div ref={pageRef} className="pt-28 pb-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <span className="text-xs uppercase font-bold tracking-wider text-brand-600 dark:text-brand-400 mb-2 block">
          Contact
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
          Let's Work Together
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Have a project in mind? Let's discuss it directly on WhatsApp.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Main WhatsApp Card (Primary Channel) */}
        <div className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-brand-500/30 dark:border-brand-500/30 p-8 sm:p-10 shadow-xl space-y-8">
            {/* Ambient Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/15 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                  <span>Direct & Instant Channel</span>
                </div>
                <Badge variant="primary" size="sm">
                  Primary Contact Method
                </Badge>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
                  Chat Directly on WhatsApp
                </h2>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  WhatsApp is the fastest way to get in touch with me for contract inquiries, project timelines, and technical consultation.
                </p>
              </div>

              {/* Pre-filled Message Selector */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">
                  Select a Conversation Starter
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {PRESET_MESSAGES.map((preset) => {
                    const isSelected = selectedMessage === preset.message;
                    return (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setSelectedMessage(preset.message)}
                        className={`text-left p-3 rounded-xl text-xs font-medium transition-all duration-200 border ${
                          isSelected
                            ? 'bg-brand-500/10 dark:bg-brand-500/20 border-brand-500 text-brand-600 dark:text-brand-300 shadow-sm'
                            : 'bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1 font-semibold">
                          <MessageSquareText className="w-3.5 h-3.5 text-brand-500" />
                          <span>{preset.label}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  <span className="font-semibold text-slate-400 block uppercase text-[10px] tracking-wider mb-1">
                    Pre-filled Message:
                  </span>
                  "{selectedMessage}"
                </div>
              </div>

              {/* Main Primary Action Button */}
              <div className="pt-2">
                <Button
                  href={getWhatsAppUrl(selectedMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="primary"
                  className="w-full justify-center bg-emerald-600 hover:bg-emerald-500 shadow-emerald-500/20 hover:shadow-emerald-500/30 text-white font-bold"
                  icon={<WhatsAppIcon className="w-5 h-5 fill-white" />}
                  iconPosition="left"
                >
                  Contact me on WhatsApp
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>No forms or waiting for email loops</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                  <span>Fast reply time</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Channels & Information */}
        <div className="lg:col-span-5 space-y-6">
          {/* Secondary Professional Channels */}
          <div className="p-6 sm:p-8 rounded-3xl glass-card space-y-6">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                Other Profiles
              </span>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">
                Secondary Contact & Links
              </h3>
            </div>

            <div className="space-y-3">
              {/* Upwork */}
              {profile.upwork && (
                <a
                  href={profile.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block">Upwork</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        Hire on Upwork
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {/* LinkedIn */}
              {profile.linkedin && (
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block">LinkedIn</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        Connect on LinkedIn
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {/* GitHub */}
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <Github className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block">GitHub</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-brand-500 transition-colors">
                        View Code Repositories
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}

              {/* Email (Secondary option) */}
              {profile.email && (
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block">Email (Secondary)</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-500 transition-colors">
                        {profile.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brand-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
            </div>
          </div>

          {/* Availability Card */}
          <div className="p-6 rounded-2xl glass-card space-y-3">
            <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-sm">
              <Sparkles className="w-4 h-4 text-brand-500" />
              <span>Project Scope & Availability</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Available for full project builds, technical architecture, and dedicated contracts. Feel free to message on WhatsApp to share your project brief or schedule a quick sync.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
