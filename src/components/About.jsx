import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 border-b border-neutral-900 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-8">
            About Me
          </h2>

          <div className="space-y-6 text-lg sm:text-xl text-neutral-400 leading-relaxed font-light">
            <p>
              I'm a <strong className="text-white font-medium">software engineer from Nigeria</strong> who enjoys turning complex business requirements into functional, scalable software. I work across the entire stack—from intuitive frontend interfaces to robust backend architectures.
            </p>

            <p>
              With a particular focus on <strong className="text-white font-medium">APIs, databases, and authentication</strong>, my goal is always to build practical digital products that solve real-world problems. Whether it's an e-commerce platform or an internal business tool, I prioritize clean code and reliable deployments.
            </p>

            <p className="text-base text-neutral-500 font-medium pt-4 border-t border-neutral-900">
              Currently expanding my expertise in cloud deployments and advanced system architecture.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
