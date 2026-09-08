import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Terminal, Cpu } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-all duration-300">
      <nav className={`w-full max-w-6xl rounded-2xl transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel-glow py-3 px-6 shadow-2xl border-purple-500/40' 
          : 'glass-panel py-4 px-6 border-slate-800'
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2.5 group text-left"
          >
            <div className="relative p-2 rounded-lg bg-purple-950/70 border border-purple-500/50 text-purple-400 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-300">
              <Shield className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono font-bold tracking-wider text-slate-100 group-hover:text-purple-400 transition-colors">
                  AYYAPPAN NIREESH
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  SEC_OPS
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-tight">
                STATUS: ONLINE
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-sm font-mono transition-all duration-200 ${
                    isActive
                      ? 'text-purple-300 font-semibold bg-purple-500/15 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.25)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {isActive && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400 mr-1.5 animate-ping" />
                  )}
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Contact Terminal Button (Desktop) */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 transform active:scale-95"
            >
              <Terminal className="w-3.5 h-3.5" />
              INIT_CONTACT
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-purple-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-800 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg font-mono text-sm flex items-center justify-between ${
                  activeSection === link.id
                    ? 'bg-purple-500/15 text-purple-300 border border-purple-500/40'
                    : 'text-slate-300 hover:bg-slate-800/50'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <Cpu className="w-4 h-4 text-purple-400" />}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-mono text-sm font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
            >
              <Terminal className="w-4 h-4" />
              INIT_CONTACT
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
