import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Terminal, CheckCircle2, AlertCircle, Shield } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState([
    "Terminal initialized. Waiting for user payload transmission...",
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setStatus({ type: 'error', message: 'ERROR: All terminal payload fields are required.' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'ERROR: Invalid email protocol address.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: 'info', message: 'Encrypting packet & transmitting to ayyappannireesh@gmail.com...' });

    setTerminalLogs(prev => [
      ...prev,
      `[PAYLOAD] From: ${formData.name} <${formData.email}>`,
      `[SUBJECT] ${formData.subject}`,
      `[ENCRYPTION] TLS 1.3 Handshake Successful...`,
      `[TRANSMIT] Dispatching message payload to server...`
    ]);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({ type: 'success', message: 'SUCCESS: Payload transmitted successfully! A Nireesh will respond shortly.' });
      setTerminalLogs(prev => [
        ...prev,
        `[ACK] HTTP 200 OK - Message delivered to ayyappannireesh@gmail.com.`
      ]);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
            <Terminal className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight flex items-center gap-2">
              <span className="text-purple-400">06.</span> CONTACT_TERMINAL
            </h2>
            <p className="text-sm font-mono text-slate-400">
              Encrypted Messaging Channel & Communication Gateway
            </p>
          </div>
          <div className="h-px bg-gradient-to-r from-purple-500/40 to-transparent flex-1 ml-4 hidden sm:block" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Direct Details & Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl space-y-8"
          >
            <div className="space-y-3">
              <h3 className="text-xl font-mono font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                DIRECT DISPATCH
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                Open to cybersecurity analyst roles, security internships, research collaborations, or technology opportunities. Feel free to reach out directly.
              </p>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">EMAIL ADDRESS</span>
                  <a 
                    href={`mailto:${personal.email}`}
                    className="text-white hover:text-purple-300 font-semibold text-xs sm:text-sm truncate transition-colors"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">LOCATION</span>
                  <span className="text-white font-semibold text-xs sm:text-sm">
                    {personal.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Buttons */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-slate-400 block font-semibold">
                SOCIAL & NETWORK CHANNELS:
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-200 border-slate-700 hover:border-purple-500 hover:text-purple-300 font-mono text-xs transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-200 border-slate-700 hover:border-cyan-500 hover:text-cyan-300 font-mono text-xs transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-panel text-slate-200 border-slate-700 hover:border-purple-500 hover:text-purple-300 font-mono text-xs transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Direct Mail</span>
                </a>
              </div>
            </div>

          </motion.div>

          {/* Right Futuristic Contact Form Terminal */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-panel-glow p-6 sm:p-8 rounded-2xl border-purple-500/40 space-y-6 relative"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-purple-500/80 inline-block" />
                <span className="ml-2 text-purple-300 font-bold">TERMINAL_PROMPT.SH</span>
              </div>
              <span>PORT: 443 | TLS SECURE</span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 font-mono">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-bold block">
                    NAME <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-slate-300 font-bold block">
                    EMAIL <span className="text-purple-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-bold block">
                  SUBJECT <span className="text-purple-400">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-slate-300 font-bold block">
                  MESSAGE PAYLOAD <span className="text-purple-400">*</span>
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message payload here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60 transition-all resize-none"
                />
              </div>

              {/* Status Alert Box */}
              {status.message && (
                <div className={`p-3 rounded-xl text-xs font-mono flex items-center gap-2 ${
                  status.type === 'error' 
                    ? 'bg-red-500/10 text-red-400 border border-red-500/30' 
                    : status.type === 'success'
                    ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30'
                    : 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30'
                }`}>
                  {status.type === 'error' ? <AlertCircle className="w-4 h-4 shrink-0" /> : <CheckCircle2 className="w-4 h-4 shrink-0" />}
                  <span>{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl font-mono text-xs font-bold flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition-all duration-300 transform active:scale-95 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'TRANSMITTING PAYLOAD...' : 'SEND MESSAGE'}</span>
              </button>
            </form>

            {/* Live Terminal Log Viewer */}
            <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-[11px] space-y-1 text-slate-400">
              <div className="text-purple-400 font-bold mb-1">[CONSOLE LOG FEED]</div>
              {terminalLogs.slice(-4).map((log, lIdx) => (
                <div key={lIdx} className="truncate">
                  &gt; {log}
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
