import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetEl = document.getElementById(href.substring(1));
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3.5'
          : 'bg-white/80 backdrop-blur-sm py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-base font-bold text-slate-900 tracking-tight hover:text-blue-600 transition-colors"
        >
          Tajudeen Ahmad
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}

          <a
            href="https://github.com/Lanre081"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors pl-2 border-l border-slate-200"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://wa.me/2348149682515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 rounded-full font-medium text-sm bg-green-500 text-white hover:bg-green-600 transition-colors shadow-sm ml-2"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="https://github.com/Lanre081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 p-1"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-1.5 hover:text-blue-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/2348149682515"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 mt-2 text-center rounded-md font-medium text-white bg-green-500 hover:bg-green-600 transition-colors"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
