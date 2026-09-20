import React from 'react';
import { 
  Layout, 
  Server, 
  Database, 
  Globe, 
  CreditCard, 
  Wrench, 
  CheckCircle2, 
  Briefcase, 
  ArrowRight 
} from 'lucide-react';
import { servicesData } from '../data/services';

const iconMap = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Globe: Globe,
  CreditCard: CreditCard,
  Wrench: Wrench
};

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-[#111111] border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 text-xs font-mono font-medium tracking-wide uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SOLUTIONS & OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            What I Can Build For You
          </h2>
          <p className="mt-4 text-neutral-400 max-w-2xl text-base leading-relaxed">
            Professional software engineering services focused on reliability, modern architecture, and solving real-world business challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const IconComp = iconMap[service.icon] || Layout;
            return (
              <div
                key={service.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#1a1a1a] border border-neutral-800 hover:border-orange-500/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 mb-6 group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-400 transition-all shadow-sm">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono text-orange-500 uppercase tracking-wider font-semibold block mb-2">
                    {service.tagline}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed mb-8 font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-neutral-800/80">
                  <h4 className="text-[11px] font-semibold text-neutral-500 mb-3 uppercase tracking-widest">
                    Key Deliverables
                  </h4>
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA bottom row */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/2348149682515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:border-orange-500 hover:text-white text-sm font-semibold transition-all shadow-md"
          >
            <span>Have a specific project in mind? Let's discuss requirements</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
