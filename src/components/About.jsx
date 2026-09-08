import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Mail, Globe, ShieldCheck, UserCheck, GraduationCap, Award, Terminal, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, stats } = portfolioData;

  const statIcons = {
    ShieldCheck: ShieldCheck,
    UserCheck: UserCheck,
    GraduationCap: GraduationCap,
    Award: Award
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-purple-400">01.</span> ABOUT_ME
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Identity Verification & Core Background
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-500/40 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Personal Info Profile Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel-glow p-6 sm:p-8 rounded-2xl space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-purple-500/15 border-b border-l border-purple-500/30 font-mono text-[11px] text-purple-300 rounded-bl-xl">
              ID: ANALYST_NIREESH
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.25)]">
                <User className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-mono font-bold text-white">{personal.name}</h3>
                <p className="text-xs font-mono text-purple-300">{personal.title}</p>
                <span className="inline-block mt-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                  VEL TECH UNIVERSITY
                </span>
              </div>
            </div>

            <div className="space-y-3.5 pt-4 border-t border-slate-800 font-mono text-sm">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span className="text-slate-400 text-xs">Location:</span>
                <span className="text-slate-200 text-xs font-semibold">{personal.location}</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-400 text-xs">Email:</span>
                <a 
                  href={`mailto:${personal.email}`} 
                  className="text-cyan-300 hover:underline text-xs font-semibold truncate"
                >
                  {personal.email}
                </a>
              </div>

              {personal.phone && (
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-slate-400 text-xs">Phone:</span>
                  <span className="text-slate-200 text-xs font-semibold">{personal.phone}</span>
                </div>
              )}

              <div className="flex items-start gap-3 text-slate-300">
                <Globe className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-xs">Languages:</span>
                <div className="flex flex-wrap gap-1.5">
                  {personal.languages.map((lang, idx) => (
                    <span 
                      key={idx} 
                      className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-200 border border-slate-700"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Narrative & Animated Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-mono font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                BIOGRAPHY & MISSION
              </h3>
              <p className="text-base text-slate-300 leading-relaxed font-sans">
                {personal.aboutDescription}
              </p>
            </div>

            {/* Animated Statistics Grid with Responsive Text Fitting */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800">
              {stats.map((stat, i) => {
                const IconComponent = statIcons[stat.icon] || ShieldCheck;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.03 }}
                    className="p-3.5 rounded-xl glass-panel-glow border border-purple-500/30 text-center flex flex-col justify-between items-center min-h-[110px]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-1">
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <div className={`font-mono font-extrabold text-purple-300 w-full break-words ${
                      stat.isText ? 'text-[11px] sm:text-xs leading-tight' : 'text-xl sm:text-2xl'
                    }`}>
                      {stat.value}
                    </div>
                    <p className="text-[10px] font-mono text-slate-400 mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
