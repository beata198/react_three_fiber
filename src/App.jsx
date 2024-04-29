import { Canvas, useFrame } from "@react-three/fiber";
import "./App.css";
import { useRef } from "react";

function App() {
  const Cube = ({ position, size, color }) => {
    const ref = useRef();
    useFrame((state, delta) => {
      ref.current.rotation.y += delta;
      ref.current.rotation.x += delta;
      ref.current.position.z += Math.sin(state.clock.elapsedTime) * 0.03;
    });
    return (
      <mesh position={position} ref={ref}>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  };
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} intensity={0.9} />
      <ambientLight intensity={0.7} />

      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"green"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"yellow"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"pink"} size={[1, 1, 1]} />
      </group> */}
      <Cube position={[0, 0, 0]} color={"green"} size={[1, 1, 1]} />
    </Canvas>
  );
}

export default App;
