import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all duration-200">
      
      {/* Product / UI Review Thumbnail */}
      <div className="relative aspect-video bg-slate-100 border-b border-slate-100 overflow-hidden group">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
            {project.title}
          </h3>

          <p className="text-sm text-slate-600 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="pt-2 border-t border-slate-100">
          <p className="text-xs font-mono text-slate-500 mb-2">
            {project.stack.join(' • ')}
          </p>
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between gap-2 text-xs">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:text-slate-900 transition-colors"
        >
          <GithubIcon className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        {project.hasLiveDemo && project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

    </div>
  );
}
