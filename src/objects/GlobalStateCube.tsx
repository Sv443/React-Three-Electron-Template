import { ThreeElements } from "@react-three/fiber";
import { useCubeStore } from "@store/cubeStore.js";

export function GlobalStateCube(props: ThreeElements["mesh"]) {
  const cs = useCubeStore();

  return (
    <mesh
      {...props}
      scale={(cs.clicked ? 1.5 : 1) + (cs.hovering ? 0.15 : 0)}
      onClick={() => cs.setClicked(!cs.clicked)}
      onPointerOver={() => cs.setHovering(true)}
      onPointerOut={() => cs.setHovering(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={cs.hovering ? "aquamarine" : "darkcyan"} />
    </mesh>
  );
}
