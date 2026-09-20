import React from 'react';
import { skillsGroups } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-8">
          Technical Skills
        </h2>

        {/* 4 Clean Compact Groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsGroups.map((group) => (
            <div 
              key={group.category}
              className="p-5 rounded-xl bg-slate-50/70 border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-200">
                  {group.category}
                </h3>
                
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200/80 text-xs text-slate-700 font-medium"
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
