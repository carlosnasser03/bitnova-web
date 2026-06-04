'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Edges, Float, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { tesseractConfig } from '@/config/tesseract.config'

// Inner Core Component
function NeonCore() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x -= delta * 0.2
      meshRef.current.rotation.y -= delta * 0.3
    }
  })

  return (
    <Box ref={meshRef} args={[tesseractConfig.geometry.innerCubeSize, tesseractConfig.geometry.innerCubeSize, tesseractConfig.geometry.innerCubeSize]}>
      <meshBasicMaterial color={tesseractConfig.colors.novaBlue} transparent opacity={0.1} />
      {/* Neon Edges */}
      <Edges
        scale={1.05}
        threshold={15}
        color={tesseractConfig.neonMaterial.emissive}
      />
      {/* Inner purple core for depth */}
      <Box args={[tesseractConfig.geometry.innerCubeSize * 0.5, tesseractConfig.geometry.innerCubeSize * 0.5, tesseractConfig.geometry.innerCubeSize * 0.5]}>
        <meshBasicMaterial color={tesseractConfig.colors.neonPurple} transparent opacity={0.8} />
        <Edges
          scale={1}
          threshold={15}
          color={tesseractConfig.colors.neonPurple}
        />
      </Box>
    </Box>
  )
}

// Outer Shell Component
function GlassShell() {
  const meshRef = useRef<THREE.Mesh>(null)

  return (
    <Box ref={meshRef} args={[tesseractConfig.geometry.outerCubeSize, tesseractConfig.geometry.outerCubeSize, tesseractConfig.geometry.outerCubeSize]}>
      {/* Glass Material */}
      <meshPhysicalMaterial 
        {...tesseractConfig.glassMaterial} 
        side={THREE.DoubleSide}
      />
      {/* Outer Edges */}
      <Edges
        scale={1}
        threshold={15}
        color={tesseractConfig.colors.novaBlueDim}
      />
    </Box>
  )
}

// Main Interactive Component
export function Tesseract3D() {
  return (
    <div 
      className={tesseractConfig.container.className}
      style={{ height: tesseractConfig.container.height, width: tesseractConfig.container.width }}
      role="img"
      aria-label="Tesseract 3D interactivo que representa la arquitectura técnica"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        {/* Lights */}
        <ambientLight intensity={tesseractConfig.lighting.ambientIntensity} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={tesseractConfig.lighting.mainLightIntensity} 
          color={tesseractConfig.lighting.mainLightColor} 
        />
        <pointLight 
          position={[-10, -5, 5]} 
          intensity={tesseractConfig.lighting.accentLightIntensity} 
          color={tesseractConfig.lighting.accentLightColor} 
          distance={20} 
        />

        {/* Environment for reflections on the glass */}
        <Environment preset="city" />

        {/* Floating Tesseract */}
        <Float
          speed={tesseractConfig.animation.floatSpeed} 
          rotationIntensity={tesseractConfig.animation.floatRotationIntensity} 
          floatIntensity={tesseractConfig.animation.floatIntensity}
        >
          <group>
            <GlassShell />
            <NeonCore />
          </group>
        </Float>

        {/* User Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={tesseractConfig.animation.autoRotate}
          autoRotateSpeed={tesseractConfig.animation.autoRotateSpeed}
        />
      </Canvas>
    </div>
  )
}
