import React, { useState, useEffect } from 'react';
import { Shield, Heart } from 'lucide-react';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toUTCString().split(' ')[4] + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-[#070a12]/90 backdrop-blur-md py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-400">
        
        {/* Left Brand info */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <span className="text-slate-200 font-bold text-sm block">AYYAPPAN NIREESH</span>
            <span className="text-slate-400 text-[11px]">Junior Cyber Security Analyst</span>
          </div>
        </div>

        {/* Center Credits */}
        <div className="text-center space-y-1">
          <p className="text-slate-300">
            &copy; 2026 Ayyappan Nireesh. All Rights Reserved.
          </p>
          <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <span>Built with React, Three.js and Cybersecurity Passion</span>
            <Heart className="w-3 h-3 text-purple-400 inline fill-purple-400" />
          </p>
        </div>

        {/* Right Live Uptime Status */}
        <div className="flex items-center gap-4 bg-slate-900/80 px-4 py-2 rounded-xl border border-slate-800 text-[11px]">
          <div className="flex items-center gap-1.5 text-purple-300">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
            <span>SYS_ONLINE</span>
          </div>
          <span className="text-slate-700">|</span>
          <span className="text-cyan-300 font-bold">{timeStr}</span>
        </div>

      </div>
    </footer>
  );
}
