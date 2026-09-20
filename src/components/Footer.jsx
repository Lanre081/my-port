import React from 'react';

export default function Footer() {
  const githubUrl = "https://github.com/Lanre081";
  const linkedinUrl = "https://www.linkedin.com/in/tajudeenahmadolanrewaju";

  return (
    <footer className="py-10 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
        
        <div>
          <span className="font-semibold text-slate-700">Tajudeen Ahmad</span> © 2026
        </div>

        <div>
          Software Engineer • Nigeria
        </div>

        <div className="flex items-center gap-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            GitHub
          </a>
          <span>|</span>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}
