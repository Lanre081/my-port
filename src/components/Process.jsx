import React from 'react';
import { Lightbulb, Compass, Code, Rocket, CheckCircle2, GitPullRequest } from 'lucide-react';
import { processSteps } from '../data/process';

const stepIcons = [Lightbulb, Compass, Code, Rocket];

export default function Process() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-mono font-medium mb-3">
            <GitPullRequest className="w-3.5 h-3.5" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            How I Build
          </h2>
          <p className="mt-3 text-slate-400 light:text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
            A structured, engineering-first development lifecycle that turns high-level requirements into scalable, reliable production software.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => {
            const IconComp = stepIcons[idx] || Code;
            return (
              <div
                key={step.step}
                className="relative p-6 sm:p-7 rounded-2xl bg-slate-900/50 light:bg-white border border-slate-800/80 light:border-slate-200 hover:border-blue-500/40 transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-blue-500/80 light:text-blue-600">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/10 light:bg-blue-50 border border-blue-500/20 flex items-center justify-center text-blue-400 light:text-blue-600 group-hover:scale-105 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 mb-1">
                    {step.name}
                  </h3>
                  <div className="text-xs font-mono text-blue-400 light:text-blue-600 mb-3">
                    {step.headline}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 light:border-slate-100 space-y-2">
                  {step.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-400 light:text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
