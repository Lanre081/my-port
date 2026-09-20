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
    <section id="services" className="py-20 md:py-28 bg-[#0b101c]/70 light:bg-slate-50 border-y border-slate-800/60 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 light:text-blue-600 text-xs font-mono font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>SOLUTIONS & OFFERINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 light:text-slate-900 tracking-tight">
            What I Can Build For You
          </h2>
          <p className="mt-3 text-slate-400 light:text-slate-600 max-w-2xl text-sm sm:text-base leading-relaxed">
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
                className="p-6 sm:p-7 rounded-2xl bg-slate-900/50 light:bg-white border border-slate-800/80 light:border-slate-200 hover:border-blue-500/50 light:hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 light:bg-blue-50 border border-blue-500/20 flex items-center justify-center text-blue-400 light:text-blue-600 mb-5 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono text-blue-400 light:text-blue-600 uppercase tracking-wider font-semibold block mb-1">
                    {service.tagline}
                  </span>

                  <h3 className="text-lg font-bold text-slate-100 light:text-slate-900 mb-2.5 group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60 light:border-slate-100">
                  <h4 className="text-xs font-semibold text-slate-300 light:text-slate-700 mb-2 uppercase tracking-wide">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-400 light:text-slate-600">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA bottom row */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-700 light:border-slate-300 text-slate-200 light:text-slate-800 hover:border-blue-500 hover:text-blue-400 text-xs font-semibold transition-all"
          >
            <span>Have a specific project in mind? Let's discuss requirements</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
