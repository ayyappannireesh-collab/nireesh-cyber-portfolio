import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import ParticleField from '../three/ParticleField';

export default function BackgroundCanvas() {
  const [isMobile, setIsMobile] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) setWebglSupported(false);
    } catch (e) {
      setWebglSupported(false);
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {webglSupported ? (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          dpr={[1, isMobile ? 1 : 1.5]}
          gl={{ antialias: false, powerPreference: 'high-performance' }}
        >
          <ParticleField count={isMobile ? 50 : 130} />
        </Canvas>
      ) : null}

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30 scanline" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-[#a855f7]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#06b6d4]/15 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
