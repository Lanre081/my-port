import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  AlertCircle, 
  CheckCircle2, 
  Lightbulb, 
  Code2, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-4xl bg-[#0d1322] light:bg-white border border-slate-700/80 light:border-slate-300 rounded-2xl shadow-2xl overflow-hidden my-auto text-slate-100 light:text-slate-900 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 bg-[#090d16] light:bg-slate-100 border-b border-slate-800 light:border-slate-200 flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-mono font-medium">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Engineering Case Study
              </span>
            </div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm text-slate-400 light:text-slate-600 mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/60 light:bg-slate-200 text-slate-400 hover:text-white light:hover:text-slate-900 hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 text-sm sm:text-base leading-relaxed">
          
          {/* Quick Action Bar (Links) */}
          <div className="flex flex-wrap items-center gap-3 p-4 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
            {project.hasLiveDemo && project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Live Platform</span>
              </a>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-200 light:text-slate-800 text-xs font-semibold transition-all border border-slate-700 light:border-slate-300"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>Inspect Source Code</span>
            </a>

            <div className="ml-auto text-xs font-mono text-slate-400">
              <span className="font-semibold text-slate-300 light:text-slate-700">Role:</span> {caseStudy.role}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Project Overview
            </h3>
            <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed">
              {caseStudy.overview}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl bg-rose-950/20 light:bg-rose-50 border border-rose-800/30 light:border-rose-200">
              <div className="flex items-center gap-2 text-rose-400 light:text-rose-700 font-bold text-sm mb-2">
                <AlertCircle className="w-4 h-4" />
                The Core Problem
              </div>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {caseStudy.problem}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-emerald-950/20 light:bg-emerald-50 border border-emerald-800/30 light:border-emerald-200">
              <div className="flex items-center gap-2 text-emerald-400 light:text-emerald-700 font-bold text-sm mb-2">
                <CheckCircle2 className="w-4 h-4" />
                The Engineering Solution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Architecture Breakdown */}
          <div className="p-5 rounded-xl bg-slate-900/60 light:bg-slate-50 border border-slate-800 light:border-slate-200">
            <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-400" />
              System Architecture & Data Flow
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {caseStudy.architecture}
            </p>
          </div>

          {/* Technologies Used Breakdown */}
          {caseStudy.technologiesUsed && (
            <div>
              <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-3 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" />
                Technology Stack Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.technologiesUsed.map((tech, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-900/40 light:bg-slate-100 border border-slate-800/80 light:border-slate-300 text-xs">
                    <span className="font-semibold text-blue-400 light:text-blue-600">{tech.name}:</span>{' '}
                    <span className="text-slate-300 light:text-slate-700">{tech.role}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Implemented Features */}
          <div>
            <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Key Features & Capabilities
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              {caseStudy.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-900/30 light:bg-slate-50">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></span>
                  <span className="text-slate-300 light:text-slate-700">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Challenges & How They Were Solved */}
          <div>
            <h3 className="text-base font-bold text-slate-100 light:text-slate-900 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              Engineering Challenges & Solutions
            </h3>
            <div className="space-y-3">
              {caseStudy.challengesAndSolutions.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 light:bg-slate-50 border border-slate-800 light:border-slate-200">
                  <div className="text-xs font-semibold text-rose-400 light:text-rose-600 mb-1">
                    Challenge: {item.challenge}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                    <span className="font-semibold text-emerald-400 light:text-emerald-600">Resolution: </span>
                    {item.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lessons Learned */}
          <div className="p-4 rounded-xl bg-blue-950/30 light:bg-blue-50 border border-blue-800/30 light:border-blue-200">
            <div className="flex items-center gap-2 text-blue-400 light:text-blue-700 font-bold text-xs sm:text-sm mb-1.5">
              <Lightbulb className="w-4 h-4" />
              Key Takeaway & Lessons Learned
            </div>
            <p className="text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
              {caseStudy.lessonsLearned}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#090d16] light:bg-slate-100 border-t border-slate-800 light:border-slate-200 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Tajudeen Ahmad • Software Engineer
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 light:bg-slate-200 hover:bg-slate-700 text-slate-200 light:text-slate-800 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
