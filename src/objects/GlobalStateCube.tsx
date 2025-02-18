import { ThreeElements } from "@react-three/fiber";
import { useCubeStore } from "@/stores/index.js";

export function GlobalStateCube(props: ThreeElements["mesh"]) {
  const cs = useCubeStore();

  return (
    <mesh
      {...props}
      scale={cs.clicked ? 2 : 1}
      onClick={() => cs.setClicked(!cs.clicked)}
      onPointerOver={() => cs.setHovering(true)}
      onPointerOut={() => cs.setHovering(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={cs.hovering ? "aquamarine" : "darkcyan"} />
    </mesh>
  );
}
