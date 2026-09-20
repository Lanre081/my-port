import React from 'react';
import ProjectCard from './ProjectCard';
import { selectedProjects } from '../data/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 border-b border-neutral-900 bg-[#111111]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-12">
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
