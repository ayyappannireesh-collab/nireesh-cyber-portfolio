import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Download, FileText, CheckCircle2 } from 'lucide-react';
import FloatingDocument from '../three/FloatingDocument';
import { generateResumePDF } from '../utils/resumeGenerator';

export default function ResumeSection() {
  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel-glow p-8 sm:p-12 rounded-3xl border border-purple-500/40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text & Download Action */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 font-mono text-xs text-purple-300">
              <FileText className="w-4 h-4" />
              <span>OFFICIAL CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-mono font-extrabold text-white">
              Want to know more about my skills and experience?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans max-w-xl">
              Download my complete cybersecurity resume containing verified coursework, technical projects, programming credentials, and academic milestones in DOCX format.
            </p>

            <div className="space-y-2 font-mono text-xs text-slate-300 pt-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Verified Education & GPA Breakdown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Full Architectural Details for Key Cybersecurity Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                <span>Certified Ethical Hacker (CEH) EC-Council Reference</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={generateResumePDF}
                className="flex items-center gap-3 px-8 py-4 rounded-xl font-mono text-sm font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 transform active:scale-95"
              >
                <Download className="w-5 h-5" />
                <span>DOWNLOAD RESUME (Nireesh_Resume.docx)</span>
              </button>
            </div>
          </div>

          {/* Right 3D Floating Document Model */}
          <div className="lg:col-span-5 h-[320px] sm:h-[380px] relative flex items-center justify-center">
            <div className="w-full h-full cursor-grab active:cursor-grabbing">
              <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <FloatingDocument />
              </Canvas>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
