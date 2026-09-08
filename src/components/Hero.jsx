import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Shield, ArrowRight, Download, Mail, Terminal, CheckCircle2, Activity, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import CyberShield from '../three/CyberShield';
import { generateResumePDF } from '../utils/resumeGenerator';

export default function Hero() {
  const { personal, heroStatusCards } = portfolioData;
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [pointerPos, setPointerPos] = useState({ x: 0, y: 0 });

  // Typing Effect Logic
  useEffect(() => {
    const currentFullText = personal.typingSubtitles[subtitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setSubtitleIndex((prev) => (prev + 1) % personal.typingSubtitles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentFullText.substring(0, displayText.length - 1)
            : currentFullText.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, subtitleIndex, personal.typingSubtitles]);

  // Track Mouse Movement for 3D Parallax
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    setPointerPos({ x, y });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text & Actions Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* Cyber Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-purple-500/40 text-purple-300 font-mono text-xs shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-slate-300">CYBER THREAT RECONNAISSANCE</span>
            <span className="text-purple-400 font-bold">| ACTIVE</span>
          </div>

          {/* Name & Title Header */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-mono font-extrabold tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-cyan-300">
                {personal.name}
              </span>
            </h1>

            {/* Animated Typing Subtitle */}
            <div className="h-10 flex items-center">
              <span className="font-mono text-xl sm:text-2xl text-purple-400 font-semibold flex items-center">
                <Terminal className="w-5 h-5 mr-2 text-cyan-400 inline" />
                {displayText}
                <span className="w-2 h-6 bg-purple-400 ml-1 animate-pulse" />
              </span>
            </div>
          </div>

          {/* Hero Bio Statement */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-sans">
            "{personal.heroDescription}"
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-bold bg-purple-600 text-white hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 transform active:scale-95"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={generateResumePDF}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold glass-panel text-slate-200 border-purple-500/40 hover:border-purple-400 hover:text-purple-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 transform active:scale-95"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-sm font-semibold glass-panel text-slate-300 border-cyan-500/40 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-300 transform active:scale-95"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
            {heroStatusCards.map((card, i) => (
              <div 
                key={i} 
                className="p-3 rounded-lg glass-panel border-slate-800/80 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-purple-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="truncate">{card.text}</span>
                </div>
                <p className="text-[10px] font-mono text-slate-400 mt-1 truncate">
                  {card.code}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right 3D Interactive Shield Canvas & Floating Status Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative h-[450px] sm:h-[500px] flex items-center justify-center"
        >
          {/* 3D R3F Canvas */}
          <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
            <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
              <CyberShield pointerPos={pointerPos} />
            </Canvas>

            {/* Overlaid Floating Cyber Cards */}
            <div className="absolute top-6 left-2 glass-panel-glow px-3 py-2 rounded-lg font-mono text-[11px] text-purple-300 border border-purple-500/40 shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                <span>FIREWALL: ACTIVE</span>
              </div>
            </div>

            <div className="absolute bottom-10 right-2 glass-panel-cyan px-3 py-2 rounded-lg font-mono text-[11px] text-cyan-300 border border-cyan-500/40 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span>SYSTEM ONLINE: 100%</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
