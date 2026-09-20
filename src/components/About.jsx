import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-4">
            About Me
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-3">
            I'm a software engineer from Nigeria who enjoys turning ideas and business requirements into functional software. I work across frontend and backend development, with a particular interest in APIs, databases, authentication, and building practical digital products.
          </p>

          <p className="text-sm sm:text-base text-slate-500 font-medium">
            Currently focused on improving my skills through real-world projects and continuous learning.
          </p>

        </div>
      </div>
    </section>
  );
}
