import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-slate-200 overflow-x-hidden">
      {/* Interactive 3D & Grid Background Layer */}
      <BackgroundCanvas />

      {/* Main UI Layout */}
      <Navbar />

      <main className="relative z-10 space-y-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
