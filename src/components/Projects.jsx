import React from 'react';
import ProjectCard from './ProjectCard';
import { selectedProjects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-8">
          Selected Projects
        </h2>

        {/* 3 Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
