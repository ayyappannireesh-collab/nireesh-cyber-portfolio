import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Cpu, Shield, Code, Server } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import SkillOrbit from '../three/SkillOrbit';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-cyan-400">02.</span> SKILL_MATRIX
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Technical Proficiencies & Cybersecurity Stack
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-cyan-500/40 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* 3D Orbit Visualization & Skill Cards Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* 3D Interactive Floating Orbit Canvas (Left) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 h-[400px] sm:h-[450px] glass-panel-glow rounded-2xl relative overflow-hidden flex flex-col items-center justify-center p-4 border-purple-500/40"
          >
            <div className="absolute top-4 left-4 z-10 font-mono text-xs text-purple-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              3D_SKILL_ORBIT (INTERACTIVE)
            </div>

            <div className="w-full h-full cursor-grab active:cursor-grabbing">
              <Canvas camera={{ position: [0, 2, 7], fov: 50 }}>
                <SkillOrbit />
              </Canvas>
            </div>

            <p className="absolute bottom-3 text-[11px] font-mono text-slate-400">
              Click & Drag to rotate 3D skill constellation
            </p>
          </motion.div>

          {/* Interactive Skill Cards without Percentages (Right) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Category 1: Core Cybersecurity */}
            <div className="glass-panel p-6 rounded-2xl space-y-4">
              <h3 className="text-lg font-mono font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                CYBERSECURITY & THREAT RECON
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.core.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.02 }}
                    className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all cursor-pointer relative group"
                  >
                    <div className="flex justify-between items-center mb-1.5 font-mono text-xs">
                      <span className="font-bold text-slate-200 group-hover:text-purple-300 transition-colors">
                        {item.name}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                      />
                    </div>

                    {/* Hover Description Tooltip */}
                    <p className="mt-2 text-[11px] font-sans text-slate-400 group-hover:text-slate-200 transition-colors">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Category 2 & 3: Programming & Technologies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Programming */}
              <div className="glass-panel p-5 rounded-2xl space-y-4">
                <h3 className="text-base font-mono font-bold text-white flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-400" />
                  PROGRAMMING
                </h3>
                <div className="space-y-3">
                  {skills.programming.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex justify-between items-center mb-1 font-mono text-xs">
                        <span className="font-semibold text-slate-200 group-hover:text-cyan-300">
                          {item.name}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-[10px] text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="glass-panel p-5 rounded-2xl space-y-4">
                <h3 className="text-base font-mono font-bold text-white flex items-center gap-2">
                  <Server className="w-4 h-4 text-purple-400" />
                  TECHNOLOGIES
                </h3>
                <div className="space-y-3">
                  {skills.technologies.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all group"
                    >
                      <div className="flex justify-between items-center mb-1 font-mono text-xs">
                        <span className="font-semibold text-slate-200 group-hover:text-purple-300">
                          {item.name}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-purple-400 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                          style={{ width: `${item.level}%` }}
                        />
                      </div>
                      <p className="mt-1.5 text-[10px] text-slate-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
