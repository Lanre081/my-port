import React from 'react';
import { Code2, GitFork, Star, ArrowUpRight, GitBranch, Terminal } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function GithubSection() {
  const sampleRepos = [
    {
      name: "shopnow-ecommerce-backend",
      desc: "Node.js/Express REST API with PostgreSQL relational database models & Paystack webhook listener.",
      lang: "JavaScript",
      langColor: "bg-amber-400"
    },
    {
      name: "school-management-system",
      desc: "Full-stack academic administration system with RBAC permissions and grading algorithms.",
      lang: "React / Node",
      langColor: "bg-blue-400"
    },
    {
      name: "lead-capture-widget",
      desc: "Lightweight framework-agnostic client embed script with CORS verification and rate-limiting.",
      lang: "Vanilla JS / Node",
      langColor: "bg-emerald-400"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#0b101c]/80 light:bg-slate-50 border-y border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-gradient-to-br from-[#0d1424] via-slate-900 to-[#0d1424] light:from-white light:to-slate-100 border border-slate-800 light:border-slate-300 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Background subtle glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-mono font-medium">
                <GithubIcon className="w-3.5 h-3.5" />
                <span>OPEN SOURCE & REPOSITORIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
                Explore My Code
              </h2>

              <p className="text-slate-300 light:text-slate-600 text-sm sm:text-base leading-relaxed">
                See how I structure projects, build APIs, work with databases, and turn ideas into working software. Clean commits, modular folders, and defensive logic.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/Lanre081"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-white light:bg-slate-900 light:hover:bg-slate-800 text-slate-900 light:text-white font-semibold text-xs transition-all shadow-md shadow-black/20"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Visit GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-xs font-mono text-slate-400 light:text-slate-500">
                  @Lanre081
                </span>
              </div>
            </div>

            {/* Right Column: Code Repositories Preview */}
            <div className="lg:col-span-6 space-y-3">
              {sampleRepos.map((repo, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-200 hover:border-slate-700 light:hover:border-slate-400 transition-colors"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-blue-400 light:text-blue-600">
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>{repo.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 light:text-slate-500 flex items-center gap-1.5">
                      <span className={`w-2 h-2 rounded-full ${repo.langColor}`}></span>
                      {repo.lang}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 light:text-slate-600">
                    {repo.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
