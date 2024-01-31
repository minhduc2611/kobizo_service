import {
    Effects,
    Environment,
    OrbitControls,
    PerspectiveCamera,
    Sphere,
    Stars,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { Suspense, useRef } from "react";
import type { Mesh, PointLight } from "three";

import * as THREE from "three";


const Background = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere scale={[100, 100, 1001]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
          <Gradient colorA={"#1d2a58"} colorB={"#59d1f0"} />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
const ShowCaseGallerySpaceOne = () => {
  const sunRef = useRef<PointLight>(null!);
  const planet1Ref = useRef<Mesh>(null!);
  const planet2Ref = useRef<Mesh>(null!);
  const orbitRef = useRef<Mesh>(null!);
  return (
    <div className="w-full h-full relative">
      <Canvas
        className="DivCardInner lg:row-span-4 lg:col-span-1 w-full h-full rounded-2xl bg-black"
        shadows
        frameloop="demand"
      >
        <Stars />
        <Background />
        <color attach="background" args={["#59d1f0"]} />

        {/* <axesHelper args={[50]} /> */}
        <PerspectiveCamera
          makeDefault={true}
          fov={75}
          position={[5, -3.5, -3.5]}
        />
        <ambientLight intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.5}
          intensity={1}
          castShadow
          penumbra={1}
        />
        {/* <ambientLight intensity={0.5} /> */}

        {/* <Bloom>
        
          <Box position={[1.2, 0, 0]} />
        </Bloom> */}
        <hemisphereLight intensity={0.2} color="#59d1f0" groundColor="blue" />
        <directionalLight
          castShadow
          intensity={1.2}
          shadow-mapSize={[2024, 2024]}
          shadow-bias={-0.0001}
          position={[10, 10, 0]}
        />
        <Effects disableGamma>
          <unrealBloomPass threshold={0.9} strength={3} radius={4} />
        </Effects>

        {/* Sun */}
        <pointLight
          ref={sunRef}
          position={[30, 30, 0]}
          intensity={1}
          color="#59d1f0"
        />
        <mesh position={[10, 10, 10]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial emissive="#59d1f0" />
        </mesh>

        {/* solar orbit */}
        <mesh ref={orbitRef} position={[0, 0, 0]}>
          <torusGeometry args={[3, 0.01, 16, 100]}></torusGeometry>
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Planet 1 */}
        <mesh ref={planet1Ref} position={[0, 0, 0]}>
          <sphereGeometry args={[2, 42, 42]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Planet 2 */}
        <mesh
          ref={planet2Ref}
          position={[-8, 10, 0]}
          onClick={() => console.log("Clicked on Planet 2!")}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>

        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div className="absolute bottom-8 lg:bottom-24 left-8 text-lg md:text-2xl lg:text-4xl">
        <span>
          Designing <br /> for Delight
        </span>
      </div>
    </div>
  );
};

export default ShowCaseGallerySpaceOne;
