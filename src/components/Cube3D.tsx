'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere, Stars, Float } from '@react-three/drei'

interface ImmersiveCoreProps {
  width?: string | number
  height?: string | number
}

export function Cube3D({ width = '100%', height = '500px' }: ImmersiveCoreProps) {
  return (
    <div
      style={{ width, height }}
      className="relative z-20 cursor-grab active:cursor-grabbing bg-gradient-to-b from-tech-dark-surface/20 to-tech-dark-deep/50 rounded-xl border border-tech-dark-border overflow-hidden"
      role="img"
      aria-label="Esfera 3D interactiva con efecto de distorsión e iluminación dinámica"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>

        {/* Iluminación base */}
        <ambientLight intensity={0.5} />

        {/* Luz principal (Tonos azules de Bitnova) */}
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#3b82f6" />

        {/* Luz de acento dramática (Naranja acento de Bitnova) para reflejos */}
        <pointLight position={[-10, -5, 5]} intensity={60} color="#f97316" distance={20} />

        {/* Campo de partículas flotantes (Da sensación de profundidad e inmersión) */}
        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={2} />

        {/* Efecto de flotación natural */}
        <Float
          speed={2.5} // Velocidad de flotación
          rotationIntensity={1.5} // Qué tanto rota mientras flota
          floatIntensity={2} // Altura de la flotación
        >
          {/* Geometría: Una esfera hiper-segmentada para deformación suave */}
          <Sphere args={[1.3, 100, 100]}>
            <MeshDistortMaterial
              color="#1e3a8a" // Azul oscuro Bitnova
              attach="material"
              distort={0.45} // Nivel de deformación (modo "líquido/plasma")
              speed={2} // Velocidad de la mutación
              roughness={0.1} // Superficie lisa
              metalness={0.8} // Reflejo metálico de alta tecnología
            />
          </Sphere>
        </Float>

        {/* Controles para que el usuario pueda rotar el orbe */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  )
}
