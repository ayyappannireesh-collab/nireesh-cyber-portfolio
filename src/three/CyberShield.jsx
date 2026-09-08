import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

export default function CyberShield({ pointerPos = { x: 0, y: 0 } }) {
  const groupRef = useRef();
  const shieldRef = useRef();
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const scanLineRef = useRef();

  useFrame((state, delta) => {
    // Gentle rotation
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.3;
      outerRingRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.5;
    }
    if (shieldRef.current) {
      shieldRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
    // Scan line vertical oscillation
    if (scanLineRef.current) {
      scanLineRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 1.5;
    }
    // Mouse follow smoothing
    if (groupRef.current) {
      const targetX = (pointerPos.x * Math.PI) / 8;
      const targetY = (pointerPos.y * Math.PI) / 8;
      groupRef.current.rotation.y += (targetX - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (-targetY - groupRef.current.rotation.x) * 0.05;
    }
  });

  // Create Shield Mesh Shape
  const shieldShape = React.useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(0, 1.8);
    shape.lineTo(1.3, 1.2);
    shape.lineTo(1.1, -0.6);
    shape.lineTo(0, -1.8);
    shape.lineTo(-1.1, -0.6);
    shape.lineTo(-1.3, 1.2);
    shape.closePath();
    return shape;
  }, []);

  const extrudeSettings = {
    steps: 1,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.08,
    bevelSize: 0.08,
    bevelSegments: 3,
  };

  return (
    <group ref={groupRef} scale={[1.2, 1.2, 1.2]}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Central Core Glowing Shield */}
        <group ref={shieldRef}>
          <mesh position={[0, 0, -0.1]}>
            <extrudeGeometry args={[shieldShape, extrudeSettings]} />
            <meshStandardMaterial
              color="#1e1035"
              emissive="#a855f7"
              emissiveIntensity={0.4}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>

          {/* Wireframe Shield Overlay */}
          <mesh position={[0, 0, 0.05]}>
            <extrudeGeometry args={[shieldShape, { ...extrudeSettings, depth: 0.22 }]} />
            <meshBasicMaterial color="#c084fc" wireframe transparent opacity={0.5} />
          </mesh>

          {/* Cyber Lock Core Icon in 3D */}
          <group position={[0, 0, 0.25]}>
            {/* Lock Body */}
            <mesh position={[0, -0.2, 0]}>
              <boxGeometry args={[0.6, 0.5, 0.15]} />
              <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
            </mesh>
            {/* Lock Shackle */}
            <mesh position={[0, 0.15, 0]}>
              <torusGeometry args={[0.22, 0.06, 16, 32, Math.PI]} />
              <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.9} />
            </mesh>
          </group>

          {/* Holographic Text inside Shield */}
          <Text
            position={[0, 0.8, 0.25]}
            fontSize={0.22}
            color="#a855f7"
            font="https://fonts.gstatic.com/s/firacode/v22/u-4n3kernel_1Pr7w5UeW2l00.woff"
            anchorX="center"
            anchorY="middle"
          >
            SECURE
          </Text>
        </group>

        {/* Outer Rotating Binary/Tech Ring */}
        <group ref={outerRingRef}>
          <mesh>
            <torusGeometry args={[2.2, 0.03, 16, 100]} />
            <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} />
          </mesh>
          {/* Orbital Nodes */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <mesh key={i} position={[Math.cos(rad) * 2.2, Math.sin(rad) * 2.2, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1} />
              </mesh>
            );
          })}
        </group>

        {/* Inner Counter-Rotating Cyan Ring */}
        <group ref={innerRingRef}>
          <mesh rotation={[Math.PI / 4, 0, 0]}>
            <torusGeometry args={[1.8, 0.02, 16, 80]} />
            <meshBasicMaterial color="#06b6d4" transparent opacity={0.7} />
          </mesh>
        </group>

        {/* Scanning Laser Line */}
        <mesh ref={scanLineRef} position={[0, 0, 0.3]} rotation={[0, 0, 0]}>
          <planeGeometry args={[2.8, 0.04]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.8} side={THREE.DoubleSide} />
        </mesh>
      </Float>

      {/* Ambient Lighting */}
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.8} color="#a855f7" />
      <pointLight position={[-5, -5, 5]} intensity={1.4} color="#06b6d4" />
    </group>
  );
}
