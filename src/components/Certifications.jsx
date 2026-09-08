import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, CheckCircle2, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-purple-400">05.</span> CERTIFICATIONS
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Verified Professional Cyber Credentials
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-500/40 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="glass-panel-glow p-6 sm:p-8 rounded-2xl border-2 border-purple-500/40 space-y-6 relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Holographic Top Banner */}
                <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-purple-400" />
                    <span className="font-mono text-xs font-bold text-purple-300">
                      VERIFIED CREDENTIAL | {cert.organization.toUpperCase()}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    STATUS: {cert.status.toUpperCase()}
                  </span>
                </div>

                {/* Title & Organization */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-mono font-extrabold text-white leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-cyan-300 font-semibold">
                      Issuing Organization: {cert.organization}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-500/50 text-purple-400 shrink-0">
                    <Shield className="w-7 h-7 animate-pulse" />
                  </div>
                </div>

                {/* Description Narrative */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-sans">
                  {cert.description}
                </p>

                {/* Skills Verified Badges */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 block font-semibold">
                    VERIFIED COMPETENCIES:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cert.skillsVerified.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="px-3 py-1 rounded-lg bg-slate-900 text-slate-200 border border-slate-800 text-xs font-mono flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certificate Verification Footer */}
              <div className="flex justify-between items-center pt-4 mt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                <span>REF: {cert.verifyId}</span>
                <span className="text-purple-300 font-semibold">ISSUED: {cert.issueDate}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
