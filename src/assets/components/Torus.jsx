import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Torus = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
    ref.current.rotation.x += delta;
    ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.01;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Torus;
