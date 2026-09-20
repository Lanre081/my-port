import React from 'react';

export default function Footer() {
  const githubUrl = "https://github.com/Lanre081";
  const linkedinUrl = "https://www.linkedin.com/in/tajudeenahmadolanrewaju";

  return (
    <footer className="py-12 bg-[#111111] border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight block mb-1">
              Tajudeen Ahmad<span className="text-orange-500">.</span>
            </span>
            <span className="text-xs text-neutral-500 font-mono tracking-wide uppercase">
              Software Engineer
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-neutral-900/50 text-center flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-600 font-mono">
          <p>© {new Date().getFullYear()} Tajudeen Ahmad. All rights reserved.</p>
          <p>
            Developed by{' '}
            <a 
              href="https://www.alfrajdigitalsolutions.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-2 transition-colors font-medium"
            >
              Alfraj Digitals
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
