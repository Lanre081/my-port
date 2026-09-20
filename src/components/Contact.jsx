import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactEmail = "tajudeen.ahmad.dev@gmail.com";
  const githubUrl = "https://github.com/Lanre081";
  const linkedinUrl = "https://www.linkedin.com/in/tajudeenahmadolanrewaju";
  const whatsappUrl = "https://wa.me/2348149682515";

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitted(true);
    if (onShowToast) {
      onShowToast({
        type: 'success',
        message: `Thank you, ${formData.name}. Your message has been received!`
      });
    }
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submission state after a few seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-b border-neutral-900 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Info */}
          <div className="md:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-orange-500 text-xs font-mono font-medium tracking-wide uppercase mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Accepting Opportunities
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Have a project or engineering challenge?
            </h2>

            <p className="text-base text-neutral-400 leading-relaxed font-light">
              I'm open to software engineering roles, freelance projects, and business collaborations. Let's build something great together.
            </p>

            <div className="pt-6 space-y-5 text-sm border-t border-neutral-900">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">Email</span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-lg font-medium text-white hover:text-orange-500 transition-colors"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="pt-4 flex flex-col gap-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500 block">Social & Profiles</span>
                
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500/50 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-neutral-800 text-neutral-300 hover:text-white hover:border-orange-500/50 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a1a] border border-neutral-800 text-emerald-500 hover:text-emerald-400 hover:border-emerald-500/50 transition-all"
                  >
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean 3-Field Contact Form */}
          <div className="md:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1a1a1a] border border-neutral-800 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-neutral-400 mb-2 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, or technical challenges..."
                    className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-800 text-sm text-white placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all ${
                    isSubmitted 
                      ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                  }`}
                >
                  {isSubmitted ? 'Message Sent Successfully!' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
