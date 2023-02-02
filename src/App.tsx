import { Canvas } from "@react-three/fiber";
import { Cube, Sphere } from "./objects";

export function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube position={[-3, 0, 0]} />
      <Cube position={[3, 0, 0]} />
      <Sphere />
    </Canvas>
  );
}
