import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#111111]/90 backdrop-blur-lg border-b border-neutral-900/50 shadow-lg shadow-black/20 py-4'
          : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="text-lg font-bold text-white tracking-tight hover:text-orange-500 transition-colors"
        >
          Tajudeen<span className="text-orange-500">.</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}

          <div className="w-px h-4 bg-neutral-800 mx-2"></div>

          <a
            href="https://github.com/Lanre081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href="https://wa.me/2348149682515"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-semibold text-xs bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 ml-2"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="https://github.com/Lanre081"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-400 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#111111] border-b border-neutral-900 shadow-2xl py-6 px-6">
          <nav className="flex flex-col gap-5 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-orange-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="w-full h-px bg-neutral-900 my-2"></div>
            <a
              href="https://wa.me/2348149682515"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 text-center rounded-lg font-medium text-white bg-orange-500 hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
