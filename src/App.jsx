import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./assets/components/Cube";
import Sphere from "./assets/components/Sphere";
import Torus from "./assets/components/Torus";
import TorusKnot from "./assets/components/TorusKnot";
import "./App.css";
import { OrbitControls } from "@react-three/drei";

function App() {
  const [geometry, setGeometry] = useState("torus");
  const btns = ["cube", "sphere", "torus", "torusKnot"];
  return (
    <>
      <div>
        {btns.map((btn, index) => (
          <button
            key={index}
            type="button"
            onClick={() => {
              setGeometry(btn);
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      <Canvas>
        <directionalLight position={[0, 0, 2]} intensity={0.9} />
        <ambientLight intensity={0.7} />

        {geometry === "cube" && (
          <Cube position={[0, 0, 0]} color={"green"} size={[1, 1, 1]} />
        )}
        {geometry === "sphere" && (
          <Sphere position={[0, 0, 0]} color={"red"} size={[1, 30, 30]} />
        )}
        {geometry === "torus" && (
          <Torus
            position={[0, 0, 0]}
            color={"orange"}
            size={[0.5, 0.2, 30, 30]}
          />
        )}
        {geometry === "torusKnot" && (
          <TorusKnot
            position={[0, 0, 0]}
            color={"yellow"}
            size={[1, 0.4, 1000, 50]}
          />
        )}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
}

export default App;
