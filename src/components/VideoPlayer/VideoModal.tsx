import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Play, 
  Film, 
  ChevronLeft, 
  ChevronRight, 
  Tv 
} from 'lucide-react';
import gsap from 'gsap';
import { ProjectVideo } from '../../types';

interface VideoModalProps {
  videoSrc?: string;
  videos?: (ProjectVideo | string)[];
  initialIndex?: number;
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  videoSrc,
  videos,
  initialIndex = 0,
  title,
  isOpen,
  onClose,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Normalize video list and filter out empty strings
  const normalizedVideos: ProjectVideo[] = React.useMemo(() => {
    if (videos && videos.length > 0) {
      return videos
        .map((v, i) =>
          typeof v === 'string'
            ? { title: `Video ${i + 1}`, url: v }
            : { title: v.title || `Video ${i + 1}`, url: v.url, description: v.description }
        )
        .filter((v) => v.url && v.url.trim() !== '');
    }
    if (videoSrc && videoSrc.trim() !== '') {
      return [{ title: 'Demo Walkthrough', url: videoSrc }];
    }
    return [];
  }, [videos, videoSrc]);

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const currentVideo = normalizedVideos[currentIndex] || normalizedVideos[0];

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'ArrowRight' && normalizedVideos.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % normalizedVideos.length);
      }
      if (e.key === 'ArrowLeft' && normalizedVideos.length > 1) {
        setCurrentIndex((prev) => (prev - 1 + normalizedVideos.length) % normalizedVideos.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (overlayRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }
      );
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (videoRef.current) {
        videoRef.current.pause();
      }
    };
  }, [isOpen, onClose, normalizedVideos.length]);

  if (!isOpen || !currentVideo || typeof document === 'undefined') return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Demo Video for ${title}`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-2 sm:p-6"
      onClick={onClose}
    >
      {/* Dynamic ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

      <div
        className="relative w-full max-w-5xl bg-slate-950 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-800 flex flex-col max-h-[96vh] sm:max-h-[92vh] ring-1 ring-white/10 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 border-b border-slate-800/80 bg-slate-900/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 text-brand-400 flex items-center justify-center shrink-0">
              <Tv className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <div className="min-w-0">
              <h3 className="text-white font-bold text-xs sm:text-sm truncate flex items-center gap-2">
                <span>{title}</span>
                {normalizedVideos.length > 1 && (
                  <span className="text-[10px] sm:text-xs font-normal text-brand-400 px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20 shrink-0">
                    {currentIndex + 1} of {normalizedVideos.length}
                  </span>
                )}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-400 truncate">
                {currentVideo.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Master Player Video View */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            key={currentVideo.url}
            src={currentVideo.url}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Description if available */}
        {currentVideo.description && (
          <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/60 text-xs text-slate-300">
            {currentVideo.description}
          </div>
        )}

        {/* Footer Playlist Navigation Bar if multiple videos */}
        {normalizedVideos.length > 1 && (
          <div className="p-3 sm:p-4 bg-slate-900/90 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0 flex items-center gap-1.5 mr-1">
                <Film className="w-3.5 h-3.5 text-brand-400" />
                Demos:
              </span>
              {normalizedVideos.map((vid, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-600 to-emerald-500 text-white shadow-lg shadow-brand-500/25 ring-1 ring-brand-400'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/50'
                    }`}
                  >
                    <Play className={`w-3 h-3 ${isActive ? 'fill-white' : 'text-slate-400'}`} />
                    <span>{vid.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Next/Prev controls */}
            <div className="flex items-center gap-1 shrink-0 self-end sm:self-auto">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + normalizedVideos.length) % normalizedVideos.length)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs flex items-center gap-1"
                title="Previous Video"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % normalizedVideos.length)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors text-xs flex items-center gap-1"
                title="Next Video"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};
