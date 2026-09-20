import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl bg-[#1a1a1a] border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 group">
      
      {/* Product / UI Review Thumbnail */}
      <div className="relative aspect-video bg-neutral-900 border-b border-neutral-800 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>

          <p className="text-sm text-neutral-400 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="pt-4 border-t border-neutral-800/60">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-xs font-mono text-orange-400/90 tracking-wide">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="px-6 py-4 bg-neutral-900/50 border-t border-neutral-800 flex items-center justify-between gap-3 text-sm">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-neutral-300 bg-transparent border border-neutral-700 hover:bg-neutral-800 hover:text-white transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          <span>Source</span>
        </a>

        {project.hasLiveDemo && project.liveDemoUrl && (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
          >
            <span>Live Demo</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        )}
      </div>

    </div>
  );
}
