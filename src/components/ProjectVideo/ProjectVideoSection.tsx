import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Maximize2, 
  Film, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Tv, 
  MonitorPlay,
  RotateCcw,
  CheckCircle2
} from 'lucide-react';
import { ProjectVideo } from '../../types';
import { VideoModal } from '../VideoPlayer/VideoModal';

interface ProjectVideoSectionProps {
  videos: ProjectVideo[];
  projectTitle: string;
}

export const ProjectVideoSection: React.FC<ProjectVideoSectionProps> = ({
  videos,
  projectTitle,
}) => {
  // Filter only valid videos with non-empty URLs
  const validVideos = videos.filter((v) => v.url && v.url.trim() !== '');

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = validVideos[activeIndex] || validVideos[0];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setProgress(0);
      videoRef.current.load();
    }
  }, [activeIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay policy or error
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 1;
    setCurrentTime(curr);
    setProgress((curr / dur) * 100);
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = pos * duration;
  };

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!validVideos || validVideos.length === 0) {
    return null;
  }

  return (
    <section className="my-16 relative">
      {/* Ambient background glow decoration */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-r from-brand-500/15 via-cyan-500/15 to-emerald-500/15 blur-3xl pointer-events-none rounded-full -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Tv className="w-3.5 h-3.5" />
            <span>Interactive Video Showcase</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Watch Project in Action
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Experience the features, interface, and live workflows recorded directly from the application.
          </p>
        </div>

        {validVideos.length > 1 && (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-600 dark:text-slate-300 self-start sm:self-auto">
            <Film className="w-3.5 h-3.5 text-brand-500" />
            <span>{validVideos.length} Video Demonstrations Available</span>
          </div>
        )}
      </div>

      {/* Cinema Stage Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Main Master Cinema Player (8 Cols on LG) */}
        <div className="lg:col-span-8 rounded-2xl overflow-hidden glass-card border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative group/player bg-slate-950">
          {/* Top subtle gloss effect */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent z-20" />

          {/* Video element container */}
          <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
            <video
              ref={videoRef}
              src={activeVideo.url}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
              className="w-full h-full object-contain cursor-pointer"
            >
              Your browser does not support HTML5 video.
            </video>

            {/* Central Big Play/Pause Button (Appears when paused or on hover) */}
            {(!isPlaying || !videoRef.current) && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-[2px] cursor-pointer transition-all duration-300"
              >
                <div className="relative group/btn flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-brand-500/30 blur-xl scale-125 animate-pulse" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-brand-600 to-emerald-400 text-white flex items-center justify-center shadow-xl shadow-brand-500/30 transform group-hover/btn:scale-110 transition-transform duration-300 border border-white/20">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
                  </div>
                </div>
              </div>
            )}

            {/* Top Bar inside Video: Active Video Title */}
            <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent flex items-center justify-between z-20 pointer-events-none">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-400 animate-ping" />
                <span className="text-xs sm:text-sm font-semibold text-white/90 drop-shadow-md truncate max-w-xs sm:max-w-md">
                  {activeVideo.title}
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-black/60 text-brand-400 border border-brand-500/30 backdrop-blur-md">
                HD 1080p
              </span>
            </div>

            {/* Bottom Custom Control Overlay */}
            <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 sm:opacity-0 group-hover/player:opacity-100 transition-opacity duration-300 z-20">
              {/* Progress Scrub Bar */}
              <div
                onClick={handleSeek}
                className="w-full h-2 bg-white/20 hover:h-3 rounded-full cursor-pointer mb-3 relative overflow-hidden transition-all duration-200"
              >
                <div
                  className="h-full bg-gradient-to-r from-brand-500 to-emerald-400 rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-white/10 hover:bg-brand-500 text-white transition-colors focus:outline-none"
                    title={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                    title={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <span className="text-slate-300 font-mono text-[11px] select-none">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-brand-500 text-white font-medium transition-all text-xs"
                    title="Open Full Cinema Theater Mode"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Theater View</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Description Banner underneath player */}
          {activeVideo.description && (
            <div className="p-4 bg-slate-900/90 border-t border-slate-800/80 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeVideo.description}
              </p>
            </div>
          )}
        </div>

        {/* Video Playlist / Selector Sidebar (4 Cols on LG) */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <div className="flex items-center justify-between px-1 mb-1">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Film className="w-3.5 h-3.5 text-brand-500" />
              Playlist ({validVideos.length})
            </span>
            <span className="text-[11px] text-slate-400">Click to switch</span>
          </div>

          <div className="space-y-3">
            {validVideos.map((vid, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative p-4 rounded-2xl cursor-pointer transition-all duration-300 border text-left ${
                    isActive
                      ? 'glass-card border-brand-500 shadow-lg shadow-brand-500/10 ring-1 ring-brand-500/50 bg-brand-500/5 dark:bg-brand-500/10'
                      : 'glass-card border-slate-200/80 dark:border-slate-800/80 hover:border-brand-500/40 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Thumbnail Play Indicator */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-tr from-brand-600 to-emerald-400 text-white shadow-md shadow-brand-500/30'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-brand-500 group-hover:text-white'
                      }`}
                    >
                      {isActive && isPlaying ? (
                        <div className="flex items-end gap-0.5 h-4">
                          <span className="w-1 bg-white animate-[pulse_0.6s_ease-in-out_infinite] h-3" />
                          <span className="w-1 bg-white animate-[pulse_0.8s_ease-in-out_infinite] h-4" />
                          <span className="w-1 bg-white animate-[pulse_0.4s_ease-in-out_infinite] h-2" />
                        </div>
                      ) : (
                        <Play className="w-4 h-4 fill-current translate-x-0.5" />
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isActive ? 'text-brand-600 dark:text-brand-400' : 'text-slate-400 dark:text-slate-500'
                          }`}
                        >
                          Part 0{idx + 1}
                        </span>
                        {isActive && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Now Playing
                          </span>
                        )}
                      </div>

                      <h4
                        className={`text-sm font-bold truncate transition-colors ${
                          isActive
                            ? 'text-slate-900 dark:text-white'
                            : 'text-slate-700 dark:text-slate-300 group-hover:text-brand-500'
                        }`}
                      >
                        {vid.title}
                      </h4>

                      {vid.description && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                          {vid.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Cinema Launch button */}
          <button
            onClick={() => setModalOpen(true)}
            className="mt-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-600 to-emerald-600 hover:from-brand-500 hover:to-emerald-500 text-white font-semibold text-xs shadow-lg shadow-brand-500/20 flex items-center justify-center gap-2 transition-all hover:shadow-brand-500/40 hover:-translate-y-0.5"
          >
            <Maximize2 className="w-4 h-4" />
            <span>Launch Fullscreen Cinema Player</span>
          </button>
        </div>
      </div>

      {/* Pop-up VideoModal in Theater Mode */}
      <VideoModal
        videos={validVideos}
        initialIndex={activeIndex}
        title={projectTitle}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
};
