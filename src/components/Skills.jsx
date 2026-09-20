import React from 'react';
import { skillsGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 border-b border-neutral-900 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 text-xs font-mono font-medium tracking-wide uppercase mb-4">
            Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technologies & Tools
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-base leading-relaxed">
            The core stack and tools I use to build robust, scalable applications. 
            I focus on modern, reliable technologies that solve real business problems.
          </p>
        </div>

        {/* 4 Clean Compact Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsGroups.map((group) => (
            <div 
              key={group.category}
              className="p-6 rounded-2xl bg-[#1a1a1a] border border-neutral-800 flex flex-col justify-between hover:border-orange-500/30 transition-colors group"
            >
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider mb-4 pb-4 border-b border-neutral-800/80 group-hover:text-orange-500 transition-colors">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md bg-neutral-900/80 border border-neutral-800 text-xs text-neutral-300 font-medium tracking-wide hover:bg-neutral-800 transition-colors cursor-default"
                    >
                      {skill}
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
