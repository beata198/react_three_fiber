import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

const TorusKnot = ({ position, size, color }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.1;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={(e) => setIsHovered(false)}
      scale={isHovered ? 1.2 : 1}
    >
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={isHovered ? color : "lightblue"} />
    </mesh>
  );
};

export default TorusKnot;
