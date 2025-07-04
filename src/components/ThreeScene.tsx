import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const ThreeScene = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <EffectComposer>
        <Bloom
          intensity={1} // The bloom intensity.
          luminanceThreshold={0.2} // luminance threshold. 0 is white
          luminanceSmoothing={0.9} // smoothness of the luminance threshold.
          height={300} // render height
        />
      </EffectComposer>
    </Canvas>
  );
};

export default ThreeScene;
