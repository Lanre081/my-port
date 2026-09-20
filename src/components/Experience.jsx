import React from 'react';
import { Milestone, CheckCircle2 } from 'lucide-react';
import { experienceJourneyData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative bg-[#111111] border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 text-xs font-mono font-medium tracking-wide uppercase mb-4">
            <Milestone className="w-3.5 h-3.5" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Experience
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-base leading-relaxed">
            A transparent timeline of my continuous engineering growth, specialized core competencies, and practical software development focus.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-neutral-800 ml-4 sm:ml-8 md:ml-32 space-y-16">
          {experienceJourneyData.map((item, index) => (
            <div key={index} className="relative pl-8 sm:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#111111] border-2 border-orange-500 flex items-center justify-center group-hover:scale-125 transition-transform shadow-lg shadow-orange-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
              </div>

              {/* Timeline Content Card */}
              <div className="p-7 sm:p-8 rounded-2xl bg-[#1a1a1a] border border-neutral-800 hover:border-orange-500/40 transition-all shadow-xl shadow-black/20 group-hover:-translate-y-1">
                
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-orange-400 text-[11px] font-mono font-semibold tracking-wider uppercase">
                    {item.phase}
                  </span>
                  <span className="text-xs font-mono text-emerald-500 flex items-center gap-1.5 font-medium tracking-wide">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-base text-neutral-400 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 mb-8 text-sm text-neutral-300">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2 shrink-0 shadow-sm shadow-orange-500/50"></span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-neutral-800/80">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 text-[11px] font-mono tracking-wide"
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
