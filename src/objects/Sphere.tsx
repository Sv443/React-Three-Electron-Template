import { ThreeElements } from "@react-three/fiber";

export function Sphere(props: ThreeElements["mesh"]) {
  return (
    <mesh {...props}>
      <sphereGeometry />
      <meshStandardMaterial color="red"  />
    </mesh>
  );
}
