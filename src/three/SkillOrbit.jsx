import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { portfolioData } from '../data/portfolioData';

function ConnectedLine({ start, end, color }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color={color} transparent opacity={0.4} linewidth={1} />
    </line>
  );
}

export default function SkillOrbit() {
  const groupRef = useRef();
  const nodes = portfolioData.orbitSkillNodes;

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.0} maxPolarAngle={Math.PI / 1.5} minPolarAngle={Math.PI / 3} />
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#a855f7" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#06b6d4" />

      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Orbit Rings */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.18, 2.22, 64]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[3.48, 3.52, 64]} />
          <meshBasicMaterial color="#06b6d4" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>

        {/* Central CYBERSECURITY Node */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={0.6} wireframe />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial color="#0b0f19" emissive="#a855f7" emissiveIntensity={0.8} />
        </mesh>
        <Text
          position={[0, 0.9, 0]}
          fontSize={0.28}
          color="#c084fc"
          font="https://fonts.gstatic.com/s/firacode/v22/u-4n3kernel_1Pr7w5UeW2l00.woff"
          anchorX="center"
          anchorY="middle"
        >
          CYBERSECURITY
        </Text>

        {/* Orbiting Nodes */}
        {nodes.filter(n => n.category === 'orbit').map((node) => {
          const x = Math.cos(node.angle) * node.radius;
          const z = Math.sin(node.angle) * node.radius;
          const pos = [x, 0, z];

          return (
            <group key={node.id}>
              {/* Line connecting to center */}
              <ConnectedLine start={[0, 0, 0]} end={pos} color={node.color} />

              {/* Node Mesh */}
              <mesh position={pos}>
                <sphereGeometry args={[0.25, 24, 24]} />
                <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.8} />
              </mesh>

              {/* Node Glow Outer Sphere */}
              <mesh position={pos}>
                <sphereGeometry args={[0.35, 16, 16]} />
                <meshBasicMaterial color={node.color} transparent opacity={0.3} wireframe />
              </mesh>

              {/* Node Label */}
              <Text
                position={[x, 0.45, z]}
                fontSize={0.22}
                color="#f8fafc"
                font="https://fonts.gstatic.com/s/firacode/v22/u-4n3kernel_1Pr7w5UeW2l00.woff"
                anchorX="center"
                anchorY="middle"
              >
                {node.name}
              </Text>
            </group>
          );
        })}
      </group>
    </>
  );
}
