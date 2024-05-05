import { useState } from "react";
import { ThreeElements } from "@react-three/fiber";

export function Cube(props: ThreeElements["mesh"]) {
  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <mesh
      {...props}
      scale={clicked ? 2 : 1}
      onClick={() => setClicked(!clicked)}
      onPointerOver={() => setHovering(true)}
      onPointerOut={() => setHovering(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovering ? "hotpink" : "orange"} />
    </mesh>
  );
}
