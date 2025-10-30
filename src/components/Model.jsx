import React, { useEffect } from "react";
import { useGLTF, Center, OrbitControls, Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";


const ModelContent = () => {
  const { scene, animations } = useGLTF("src/models/transformers_war_for_cybertron_megatron.glb");
  // Animation setup
  const mixer = React.useMemo(() => new THREE.AnimationMixer(scene), [scene]);
  useEffect(() => {
    if (animations && animations.length > 0) {
      const action = mixer.clipAction(animations[0]);
      action.play();
    }
  }, [animations, mixer]);

  useFrame((_, delta) => mixer.update(delta));

  const animate = () => {
    gsap.to(scene.rotation, {
      x: 0,
      y: 1,
      z: 0,
      
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

   const animate2 = () => {
    gsap.to(scene.rotation, {
      x: 0,
      y: -1,
      z: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    });
  };

  return (
    <group position={[0, -4, 0]} onPointerEnter={animate} onPointerLeave={animate2}>
      <primitive object={scene} scale={0.018} rotation={[0, -1, 0]} />
    </group>
  );
};

const Model = () => {
  return (
    <Canvas camera={{ position: [3, 3, 10], fov: 50, }}  style={{ width: "100vw", height: "100vh" }}>
      {/* Lights */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <spotLight position={[0, 10, 10]} intensity={1.2} angle={0.3} />

      {/* Environment HDRI */}
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/venice_sunset_1k.hdr"
        background={false}
      />

      {/* Model */}
      <ModelContent />

      {/* Controls */}
      <OrbitControls enableDamping />
    </Canvas>
  );
};
export default Model;
