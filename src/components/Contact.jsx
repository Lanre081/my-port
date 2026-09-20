import React, { useState } from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactEmail = "tajudeen.ahmad.dev@gmail.com";
  const githubUrl = "https://github.com/Lanre081";
  const linkedinUrl = "https://www.linkedin.com/in/tajudeenahmadolanrewaju";

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
  };

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Left: Contact Info */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Let's Work Together
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              I'm open to software engineering opportunities, freelance projects, and collaborations.
            </p>

            <div className="pt-4 space-y-2.5 text-sm">
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-0.5">Email</span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-medium text-slate-900 hover:text-blue-600 transition-colors"
                >
                  {contactEmail}
                </a>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-medium text-slate-600">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Clean 3-Field Contact Form */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium tracking-wide transition-colors"
              >
                {isSubmitted ? 'Message Prepared' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
