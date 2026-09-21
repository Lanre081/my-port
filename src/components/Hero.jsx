import React from 'react';
import { ArrowRight, Code2, Download } from 'lucide-react';
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
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 border-b border-neutral-900 relative overflow-hidden">
      
      {/* Subtle ambient glow in the background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 text-xs font-mono font-medium tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
              Available For Work
            </div>

            {/* Large Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Software Engineer building scalable digital products and business solutions.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-neutral-400 leading-relaxed max-w-xl mb-10 font-light">
              Hi, I'm <strong className="text-white font-medium">Tajudeen Ahmad</strong>, a full-stack developer specialized in modern web applications, robust backend systems, and high-performance APIs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm bg-orange-500 hover:bg-orange-600 text-white transition-all shadow-lg shadow-orange-500/20"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/2348149682515"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm bg-transparent hover:bg-neutral-900 text-neutral-300 border border-neutral-800 transition-colors"
              >
                <span>Let's Work Together</span>
              </a>

              <a
                href="/Tajudeen_Ahmad_CV.pdf"
                download="Tajudeen_Ahmad_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm bg-transparent hover:bg-neutral-900 text-neutral-300 border border-neutral-800 transition-colors"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Subtle Developer-Themed Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-2xl bg-neutral-950/80 backdrop-blur-sm border border-neutral-800 shadow-2xl overflow-hidden font-mono text-sm relative group">
              
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-neutral-900/50 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-neutral-700 group-hover:bg-rose-500 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-neutral-700 group-hover:bg-amber-500 transition-colors delay-75"></div>
                  <div className="w-3 h-3 rounded-full bg-neutral-700 group-hover:bg-emerald-500 transition-colors delay-150"></div>
                  <span className="ml-3 text-[11px] text-neutral-500 font-medium">tajudeen.ts</span>
                </div>
                <Code2 className="w-4 h-4 text-neutral-600" />
              </div>

              {/* Code Snippet */}
              <div className="p-6 leading-relaxed overflow-x-auto text-neutral-300 text-xs sm:text-[13px]">
                <pre>
                  <span className="text-neutral-500">/**</span>
                  {'\n'}
                  <span className="text-neutral-500"> * Primary Engineering Profile</span>
                  {'\n'}
                  <span className="text-neutral-500"> */</span>
                  {'\n'}
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}
                  {'\n  '}
                  <span className="text-orange-400">name</span>: <span className="text-emerald-400">'Tajudeen Ahmad'</span>,
                  {'\n  '}
                  <span className="text-orange-400">role</span>: <span className="text-emerald-400">'Software Engineer'</span>,
                  {'\n  '}
                  <span className="text-orange-400">core</span>: [
                  {'\n    '}
                  <span className="text-emerald-400">'React & Node.js'</span>,
                  {'\n    '}
                  <span className="text-emerald-400">'PostgreSQL & REST APIs'</span>,
                  {'\n    '}
                  <span className="text-emerald-400">'System Architecture'</span>
                  {'\n  '}
                  ],
                  {'\n  '}
                  <span className="text-orange-400">availability</span>: <span className="text-purple-400">true</span>
                  {'\n'}
                  {'};'}
                </pre>
              </div>

              <div className="px-5 py-3 bg-neutral-900/30 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
                <span>Compiled successfully</span>
                <span className="text-emerald-500 font-medium">Ready</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
