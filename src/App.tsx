import { Canvas } from "@react-three/fiber";
import { Cube, GlobalStateCube, Sphere } from "@/objects/index.js";

export function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 3, 3]} intensity={2} />
      <Cube position={[-2.5, 0, 0]} />
      <Cube position={[2.5, 0, 0]} />
      <GlobalStateCube position={[0, 2.5, 0]} />
      <GlobalStateCube position={[0, -2.5, 0]} />
      <Sphere />
    </Canvas>
  );
}
