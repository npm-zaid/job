import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";

import gsap from "gsap";



const Box = () => {
  const meshRef = useRef();

 const animate = ()=>{
  gsap.to(meshRef.current.scale, {
    x: 2,
    y: 2,
    z: 2,
    duration: 1,
    ease: "elastic.out(1, 0.3)",
  });
 }
  // Rotate box every frame
  useFrame(() => {
   
    
  });

  return (
    <mesh
      ref={meshRef}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      scale={[1.2, 1, 1]}
      castShadow
      receiveShadow
      onPointerOver={animate}
      onPointerOut={() => {
        gsap.to(meshRef.current.scale, {
          x: 1,
          y: 1,
          z: 1,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
      }}

    >
      <boxGeometry args={[3, 3, 3, 2, 2, 2]} />
      <meshStandardMaterial
        color="#403d39"
        metalness={0.6}
        roughness={0.3}
        // emissive="purple"
        emissiveIntensity={0.2}
        wireframe={true}
      />
    </mesh>
  );
};




const R3FScene = () => {
  return (
    <Canvas
      camera={{ position: [3, 3, 3], fov: 75 }}
      style={{ width: "100vw", height: "100vh", background: "#7f4f24" }}
    >
      {/* 💡 Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 5]} intensity={1} />

      {/* 🎁 Object */}
      <Box />

      {/* 🌀 Controls */}
      <OrbitControls enableDamping />
    </Canvas>
  );
};

export default R3FScene;
