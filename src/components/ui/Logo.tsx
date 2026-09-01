import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/anis4.jpg';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 rounded-lg p-1 ${className}`}
      aria-label="Anis - Home"
    >
      <div className="relative flex items-center justify-center w-9 h-9 rounded-xl overflow-hidden shadow-sm border border-slate-200/80 dark:border-slate-800 group-hover:shadow-glow-sm transition-all duration-300 bg-slate-100 dark:bg-slate-800">
        <img
          src={logoImg}
          alt="Anis Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
            Anis
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 dark:text-slate-400">
            Developer
          </span>
        </div>
      )}
    </Link>
  );
};
