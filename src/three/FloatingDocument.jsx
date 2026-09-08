import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function FloatingDocument() {
  const docRef = useRef();

  useFrame((state, delta) => {
    if (docRef.current) {
      docRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      docRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <group ref={docRef} scale={[1.1, 1.1, 1.1]}>
        {/* Main Document Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.2, 3.0, 0.08]} />
          <meshStandardMaterial
            color="#140c24"
            emissive="#a855f7"
            emissiveIntensity={0.2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Glowing Neon Border */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.24, 3.04, 0.09]} />
          <meshBasicMaterial color="#c084fc" wireframe transparent opacity={0.6} />
        </mesh>

        {/* Holographic Header Bar */}
        <mesh position={[0, 1.1, 0.05]}>
          <planeGeometry args={[1.8, 0.3]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.7} />
        </mesh>

        {/* Document Header Text */}
        <Text
          position={[0, 1.1, 0.07]}
          fontSize={0.13}
          color="#070a12"
          font="https://fonts.gstatic.com/s/firacode/v22/u-4n3kernel_1Pr7w5UeW2l00.woff"
          anchorX="center"
          anchorY="middle"
        >
          AYYAPPAN NIREESH | RESUME.DOCX
        </Text>

        {/* Text Lines Simulation */}
        {[-0.6, -0.3, 0.0, 0.3, 0.6].map((y, idx) => (
          <mesh key={idx} position={[-0.2, y - 0.2, 0.05]}>
            <planeGeometry args={[1.4, 0.08]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.7} side={THREE.DoubleSide} />
          </mesh>
        ))}

        {/* Cyber Security Seal Emblem */}
        <mesh position={[0.6, -0.9, 0.06]}>
          <circleGeometry args={[0.25, 32]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.9} />
        </mesh>

        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <pointLight position={[3, 3, 3]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-3, -3, 3]} intensity={1} color="#06b6d4" />
      </group>
    </Float>
  );
}
