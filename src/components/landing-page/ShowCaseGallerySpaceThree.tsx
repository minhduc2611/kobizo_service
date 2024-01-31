import {
  Effects,
  Environment,
  GradientTexture,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Stars
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { Suspense, useRef } from "react";
import type { Mesh,PointLight} from 'three'
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
          <Gradient colorA={"#1d2a58"} colorB={"#8282ed"} />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
const ShowCaseGallerySpaceOne = () => {
  const sunRef = useRef<PointLight>(null!);
  const planet1Ref = useRef<Mesh>(null!);
  const orbitRef = useRef<Mesh>(null!);
  const planet2Ref = useRef<Mesh>(null!);
  const planet3Ref = useRef<Mesh>(null!);
  return (
    <div className="w-full h-full relative">
      <Canvas
        className="DivCardInner lg:row-span-4 lg:col-span-1 w-full h-full rounded-2xl bg-black"
        shadows
        frameloop="demand"

      >
        <Stars />
        <Background />
        <color attach="background" args={["#8282ed"]} />

        <PerspectiveCamera makeDefault={true} fov={75} position={[10, 3, -6]} />
        <ambientLight intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.5}
          intensity={1}
          castShadow
          penumbra={1}
        />
        <hemisphereLight intensity={0.2} color="#8282ed" groundColor="blue" />
        <directionalLight
          castShadow
          intensity={1.2}
          shadow-mapSize={[2024, 2024]}
          shadow-bias={-0.0001}
          position={[5, 5, -10]}
        />

        <group>
          <Effects disableGamma>
            <unrealBloomPass threshold={0.9} strength={3} radius={4} />
          </Effects>

          {/* Sun */}
          <pointLight
            ref={sunRef}
            position={[5, 5, -10]}
            intensity={1}
            color="#8282ed"
          />
          <mesh position={[5, 5, -12]}>
            <sphereGeometry args={[2, 32, 32]} />
            <meshStandardMaterial emissive="#59a0d4" />
          </mesh>
        </group>

        {/* solar orbit */}
        <mesh
          ref={orbitRef}
          position={[0, 0, -10]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <torusGeometry args={[3, 0.01, 16, 100]}></torusGeometry>
          {/* <meshStandardMaterial  color="black" /> */}
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.8, 1]}
              colors={["#e63946", "#f1faee", "#a8dadc"]}
              size={100}
            />
          </meshBasicMaterial>
        </mesh>

        {/* Planet 1 */}
        <mesh ref={planet1Ref} position={[0, 0, -10]}>
          <sphereGeometry args={[2, 42, 42]} />
          <meshBasicMaterial>
            <GradientTexture
              stops={[0, 0.5, 1]}
              colors={["#f194ff", "#aec0ff", "#c9f1ff"]}
              size={100}
            />
          </meshBasicMaterial>
        </mesh>

        {/* Planet 2 */}
        <mesh
          ref={planet2Ref}
          position={[5, 2, -7]}
          onClick={() => console.log("Clicked on Planet 2!")}
        >
          <sphereGeometry args={[0.4, 16, 16]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Planet 3 */}
        <mesh
          ref={planet3Ref}
          position={[5, -1, -5]}
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
          Revolutionizing <br /> Customer Engagement
        </span>
      </div>
    </div>
  );
};

export default ShowCaseGallerySpaceOne;
