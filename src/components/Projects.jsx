import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-purple-400">03.</span> FEATURED_PROJECTS
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Cybersecurity Solutions & Full-Stack Systems
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-500/40 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className={`group glass-panel p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative flex flex-col justify-between ${
                project.color === 'purple' 
                  ? 'hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]' 
                  : 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]'
              }`}
            >
              {/* Badge & Category */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold border ${
                    project.color === 'purple'
                      ? 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                      : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                  }`}>
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-mono font-bold text-white group-hover:text-purple-300 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {project.fullDescription}
                </p>

                {/* Key Features Bullet list */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-slate-400 block font-semibold">
                    KEY HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Tech Stack & Action Trigger */}
              <div className="pt-6 mt-6 border-t border-slate-800 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300 ${
                    project.color === 'purple'
                      ? 'bg-purple-500/10 text-purple-300 border border-purple-500/30 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                      : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                  }`}
                >
                  <span>View Project Details & Architecture</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Modal Window Component */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
