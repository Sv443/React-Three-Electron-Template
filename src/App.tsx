import { Canvas } from "@react-three/fiber";
import { Cube } from "@obj/Cube.js";
import { GlobalStateCube } from "@obj/GlobalStateCube.js";
import { Sphere } from "@obj/Sphere.js";
import { useEffect, useState } from "react";
import { Vector3 } from "three";

export function App() {
  const [pointLightPos, setPointLightPos] = useState<Vector3>(new Vector3(5, 5, 5));

  // animate the point light position in a rotating loop
  // you can also use libraries like `react-spring` or `framer-motion` for more complex animations
  useEffect(() => {
    let t = 0;
    const interval = setInterval(() => {
      t += 0.015; // to control the speed of the animation
      const radius = 10; // radius of the circular path
      setPointLightPos(new Vector3(
        radius * Math.cos(t),
        radius * Math.sin(t),
        5 // keep the light at a constant height
      ));
    }, 16); // ~60 FPS
    return () => clearInterval(interval);
  }, []);

  return (
    <Canvas>
      <ambientLight intensity={0.8} />
      <Cube position={pointLightPos} />
      <pointLight position={pointLightPos} intensity={2} />
      <Cube position={new Vector3(-2.5, 0, 0)} />
      <Cube position={new Vector3(2.5, 0, 0)} />
      <GlobalStateCube position={[0, 2.5, 0]} />
      <GlobalStateCube position={[0, -2.5, 0]} />
      <Sphere />
    </Canvas>
  );
}
