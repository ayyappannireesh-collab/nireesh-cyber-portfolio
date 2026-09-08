import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldAlert, CheckCircle2, Terminal, Activity, Bot } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [scanProgress, setScanProgress] = useState(15);
  const [logs, setLogs] = useState([]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const defaultLogs = project.id === 'secure-web-app' ? [
      "[RECON] Initializing BCrypt Salt Hash Validation...",
      "[AUTH] Tracking failed password telemetry (Max Attempt: 3)...",
      "[FIREWALL] Triggering automatic account lock on threshold breach...",
      "[DB] Secure MySQL session persisted via encrypted REST API...",
      "[STATUS] Intrusion Detection System: 0 ACTIVE THREATS"
    ] : [
      "[NEURAL_NET] Initializing AI LLM Prompt Engine...",
      "[AWS_S3] Verifying encrypted cloud media storage bucket...",
      "[QUIZ_GEN] Dynamic automated quiz generation active...",
      "[CHATBOT] Real-time multilingual student assistance online..."
    ];

    setLogs(defaultLogs);

    if (project.id === 'secure-web-app') {
      const interval = setInterval(() => {
        setScanProgress((prev) => (prev >= 100 ? 15 : prev + 5));
      }, 200);
      return () => clearInterval(interval);
    }
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#070a12]/95 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-panel-glow rounded-2xl border border-purple-500/50 p-6 sm:p-8 space-y-6 my-auto max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.9)] bg-[#0c101d]"
        >
          {/* Modal Header */}
          <div className="flex justify-between items-start border-b border-slate-800 pb-4 pt-1">
            <div className="space-y-1.5 pr-4 max-w-[85%]">
              <span className="inline-block px-3 py-1 rounded-md text-xs font-mono font-bold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                {project.badge}
              </span>
              <h2 className="text-lg sm:text-xl font-mono font-extrabold text-white leading-snug break-words">
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-purple-500/40 transition-colors shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Security Scanner / AI Visualizer Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/30 font-mono text-xs space-y-3 relative overflow-hidden">
            <div className="flex justify-between items-center text-purple-300">
              <span className="flex items-center gap-2 font-bold">
                {project.id === 'secure-web-app' ? (
                  <>
                    <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
                    SECURITY SCANNER & INTRUSION DETECTION TELEMETRY
                  </>
                ) : (
                  <>
                    <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
                    AI NEURAL NETWORK & CLOUD ARCHITECTURE DEMO
                  </>
                )}
              </span>
              <span className="font-bold text-purple-400">
                {project.id === 'secure-web-app' ? `SCAN: ${scanProgress}%` : 'STATUS: OPTIMAL'}
              </span>
            </div>

            {project.id === 'secure-web-app' && (
              <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-purple-900/50">
                <div 
                  className="h-full bg-gradient-to-r from-purple-600 via-purple-400 to-cyan-400 transition-all duration-200 shadow-[0_0_12px_#a855f7]"
                  style={{ width: `${scanProgress}%` }}
                />
              </div>
            )}

            {/* System Terminal Log Feed */}
            <div className="space-y-1.5 text-[11px] text-slate-300 font-mono pt-1">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">&gt;</span>
                  <span className="text-slate-200">{log}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Overview & Problem Statement / Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="space-y-3">
              <h3 className="font-mono font-bold text-white text-base flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-purple-400" />
                Problem Statement
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.problemStatement}
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-mono font-bold text-white text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                Architectural Solution
              </h3>
              <p className="text-slate-300 leading-relaxed text-xs sm:text-sm">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-3 pt-2">
            <h3 className="font-mono font-bold text-white text-base flex items-center gap-2">
              <Terminal className="w-4 h-4 text-purple-400" />
              Core Implemented Features
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-900/60 border border-slate-800 text-slate-200 text-xs font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h3 className="font-mono font-bold text-white text-xs text-slate-400">
              KEY SECURITY & TECHNICAL TAKEAWAYS:
            </h3>
            <ul className="list-disc list-inside space-y-1 text-xs font-mono text-slate-300">
              {project.keyLearnings.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
            <span className="text-xs font-mono text-slate-400 mr-2 self-center">Technologies:</span>
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-md text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/30">
                {tech}
              </span>
            ))}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
