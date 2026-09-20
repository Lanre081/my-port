import React from 'react';
import { Milestone, CheckCircle2, ArrowRight, Code2, Sparkles, BookOpen } from 'lucide-react';
import { experienceJourneyData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-mono font-medium mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>LEARNING & ENGINEERING JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            Development & Technical Progression
          </h2>
          <p className="mt-3 text-slate-400 light:text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            A transparent timeline of my continuous engineering growth, specialized core competencies, and practical software development focus.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 light:border-slate-300 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experienceJourneyData.map((item, index) => (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090d16] light:bg-white border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 transition-transform shadow-md shadow-blue-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              </div>

              {/* Timeline Content Card */}
              <div className="p-6 rounded-2xl bg-slate-900/50 light:bg-white border border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all shadow-sm">
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 light:text-blue-600 text-[11px] font-mono font-medium border border-blue-500/20">
                    {item.phase}
                  </span>
                  <span className="text-xs font-mono text-emerald-400 light:text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 light:text-slate-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-5 text-xs sm:text-sm text-slate-400 light:text-slate-600">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 light:border-slate-200/60">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-800/60 light:bg-slate-100 text-slate-300 light:text-slate-700 text-[11px] font-mono border border-slate-700/40 light:border-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
