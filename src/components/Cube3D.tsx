'use client'

import { Canvas } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

function DistortedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={1.5}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.8}
        metalness={0.2}
      />
    </Sphere>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#f97316" />
      <DistortedSphere />
    </>
  )
}

export function Cube3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
