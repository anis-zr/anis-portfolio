import React, { useState } from 'react';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { Lightbox } from '../Lightbox/Lightbox';

interface ProjectGalleryProps {
  screenshots: string[];
  projectTitle: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  screenshots,
  projectTitle,
}) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const handleOpenLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="my-12">
      <div className="flex items-center gap-2 mb-6">
        <ImageIcon className="w-5 h-5 text-brand-500" />
        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
          Application Screenshots
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screenshots.map((src, index) => (
          <div
            key={index}
            onClick={() => handleOpenLightbox(index)}
            className="group relative aspect-[16/10] rounded-xl overflow-hidden glass-card cursor-pointer border border-slate-200 dark:border-slate-800 hover:border-brand-500/50 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={src}
              alt={`${projectTitle} screenshot ${index + 1}`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="p-3 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-white shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Maximize2 className="w-5 h-5" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        images={screenshots}
        currentIndex={activeImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActiveImageIndex(newIdx)}
      />
    </section>
  );
};
