import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-purple-400">04.</span> ACADEMIC_TIMELINE
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Educational Qualifications & Academic Track Record
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-500/40 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Symmetrical Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto py-4">
          
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500" />

          <div className="space-y-12">
            {education.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="relative flex flex-col sm:flex-row items-center"
                >
                  {/* Glowing Node Icon positioned on line */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-slate-950 border-2 border-purple-400 flex items-center justify-center text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.6)] z-20">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-ping" />
                  </div>

                  {/* Card wrapper */}
                  <div className={`w-full pl-14 sm:pl-0 sm:w-[calc(50%-2.5rem)] ${
                    isEven ? 'sm:mr-auto sm:text-left' : 'sm:ml-auto sm:text-left'
                  }`}>
                    <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-purple-500/40 transition-all duration-300 shadow-lg">
                      
                      <div className="flex flex-wrap justify-between items-center gap-2">
                        <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                          {item.duration}
                        </span>
                        <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                          {item.grade}
                        </span>
                      </div>

                      <h3 className="text-lg font-mono font-bold text-white leading-snug">
                        {item.degree}
                      </h3>

                      <p className="text-xs font-mono text-cyan-300 font-semibold">
                        {item.field}
                      </p>

                      <div className="flex items-center gap-2 text-xs font-sans text-slate-300 pt-1">
                        <BookOpen className="w-4 h-4 text-purple-400 shrink-0" />
                        <span className="font-medium text-slate-200">{item.institution}</span>
                      </div>

                      {item.details && (
                        <div className="pt-3 border-t border-slate-800 space-y-1.5">
                          {item.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-400 font-sans">
                              <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
