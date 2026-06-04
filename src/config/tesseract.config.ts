// Tesseract 3D Configuration - SOLID Principles (OCP)

export const tesseractConfig = {
  // Container properties
  container: {
    height: '100%',
    width: '100%',
    className: 'absolute inset-0 z-0 opacity-60 cursor-grab active:cursor-grabbing',
  },

  // Colors based on brand guidelines
  colors: {
    novaBlue: '#00e5ff',
    novaBlueDim: 'rgba(0, 229, 255, 0.15)',
    neonPurple: '#8B5CF6',
    techDarkDeep: '#020617',
    techDarkSurface: '#0F172A',
  },

  // Material properties for the outer glass cube
  glassMaterial: {
    color: '#0F172A', // techDarkSurface base
    transmission: 0.95, // Glass-like transparency
    opacity: 1,
    metalness: 0.8,
    roughness: 0.1,
    ior: 1.5,
    thickness: 2.0,
    specularIntensity: 1,
    specularColor: '#00e5ff',
    envMapIntensity: 1,
    transparent: true,
  },

  // Material properties for the inner neon cube/lines
  neonMaterial: {
    color: '#00e5ff', // novaBlue base
    emissive: '#00e5ff',
    emissiveIntensity: 2.5,
    toneMapped: false,
  },

  // Animation and interaction parameters
  animation: {
    autoRotate: true,
    autoRotateSpeed: 1.5,
    floatSpeed: 2,
    floatRotationIntensity: 0.5,
    floatIntensity: 1,
  },

  // Geometry parameters
  geometry: {
    outerCubeSize: 4.5,
    innerCubeSize: 2.5,
    edgeThickness: 0.05,
  },

  // Lighting
  lighting: {
    ambientIntensity: 0.5,
    mainLightColor: '#00e5ff',
    mainLightIntensity: 2,
    accentLightColor: '#8B5CF6',
    accentLightIntensity: 10,
  }
};
