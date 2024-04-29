import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./assets/components/Cube";
import Sphere from "./assets/components/Sphere";
import Torus from "./assets/components/Torus";
import TorusKnot from "./assets/components/TorusKnot";
import "./App.css";

function App() {
  const [geometry, setGeometry] = useState("torus");
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setGeometry("cube");
        }}
      >
        Cube
      </button>
      <button
        type="button"
        onClick={() => {
          setGeometry("sphere");
        }}
      >
        Sphere
      </button>
      <button
        type="button"
        onClick={() => {
          setGeometry("torus");
        }}
      >
        Torus
      </button>
      <button
        type="button"
        onClick={() => {
          setGeometry("torusKnot");
        }}
      >
        Torus Knot
      </button>
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
      </Canvas>
    </>
  );
}

export default App;
