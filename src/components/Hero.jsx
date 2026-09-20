import React from 'react';
import { ArrowDown, ExternalLink, Terminal, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Label */}
            <div className="text-xs font-mono font-semibold tracking-wider text-blue-600 uppercase mb-3.5">
              SOFTWARE ENGINEER
            </div>

            {/* Large Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-4">
              Building practical software for real-world problems.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-7">
              I'm Tajudeen Ahmad, a software engineer focused on building modern web applications, backend systems, and APIs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-slate-900 hover:bg-slate-800 text-white transition-colors shadow-xs"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/Lanre081"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href="https://wa.me/2348149682515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm bg-green-500 hover:bg-green-600 text-white transition-colors shadow-xs"
              >
                <span>Let's Talk</span>
              </a>
            </div>

          </div>

          {/* Right Column: Subtle Developer-Themed Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-xl bg-slate-900 text-slate-200 border border-slate-800 shadow-md overflow-hidden text-xs font-mono">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-950/80 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-[11px] text-slate-400">engineer.json</span>
                </div>
                <Code2 className="w-3.5 h-3.5 text-slate-500" />
              </div>

              {/* Code Snippet */}
              <div className="p-4 leading-relaxed overflow-x-auto text-slate-300 text-[11.5px]">
                <pre>
                  <span className="text-slate-500">// Engineering Profile</span>
                  {'\n'}
                  {'{'}
                  {'\n  '}
                  <span className="text-blue-400">"name"</span>: <span className="text-emerald-300">"Tajudeen Ahmad"</span>,
                  {'\n  '}
                  <span className="text-blue-400">"role"</span>: <span className="text-emerald-300">"Software Engineer"</span>,
                  {'\n  '}
                  <span className="text-blue-400">"location"</span>: <span className="text-emerald-300">"Nigeria"</span>,
                  {'\n  '}
                  <span className="text-blue-400">"focus"</span>: [
                  <span className="text-amber-300">"Full-Stack"</span>,{' '}
                  <span className="text-amber-300">"Backend & APIs"</span>,{' '}
                  <span className="text-amber-300">"Databases"</span>],
                  {'\n  '}
                  <span className="text-blue-400">"status"</span>: <span className="text-emerald-300">"Open to opportunities"</span>
                  {'\n'}
                  {'}'}
                </pre>
              </div>

              <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 text-[10.5px] text-slate-400 flex items-center justify-between">
                <span>Available for hire & contracts</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              </div>

            </div>
          </div>

        </div>

        {/* Stack Line under hero */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 flex items-center justify-center text-center">
          <p className="text-xs sm:text-sm font-mono text-slate-500 font-medium">
            React • Node.js • Express • PostgreSQL • REST APIs
          </p>
        </div>

      </div>
    </section>
  );
}
