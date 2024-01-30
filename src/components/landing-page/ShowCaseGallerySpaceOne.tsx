import {
  Effects,
  Environment,
  OrbitControls,
  PerspectiveCamera,
  Sphere,
  Stars,
} from "@react-three/drei";
import { Canvas, extend } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { Suspense, useRef } from "react";
import type { Mesh, PointLight } from "three";

import * as THREE from "three";
import { UnrealBloomPass } from "three-stdlib";
extend({ UnrealBloomPass });

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
          <Gradient colorA={"#1d2a58"} colorB={"purple"} colorC={"#1d2a58"} />
        </LayerMaterial>
      </Sphere>
    </>
  );
};
const ShowCaseGallerySpaceOne = () => {
  const sunRef = useRef<PointLight>(null!);
  const planet1Ref = useRef<Mesh>(null!);
  const planet2Ref = useRef<Mesh>(null!);
  return (
    <div className="w-full h-full relative">
      <Canvas
        className="DivCardInner lg:row-span-4 lg:col-span-1 w-full h-full rounded-2xl bg-black"
        shadows
        gl={{
          useLegacyLights: true,
        }}
      >
        <Stars />
        <Background />
        <color attach="background" args={["#171720"]} />

        {/* <axesHelper args={[50]} /> */}
        <PerspectiveCamera
          makeDefault={true}
          fov={75}
          position={[16, 18, -6]}
        />
        <hemisphereLight intensity={0.2} color="#c434d8" groundColor="blue" />
        <directionalLight
          castShadow
          intensity={1.2}
          shadow-mapSize={[2024, 2024]}
          shadow-bias={-0.0001}
          position={[10, 10, -10]}
        />
        <Effects disableGamma>
          <unrealBloomPass threshold={0.9} strength={1} radius={2} />
        </Effects>

        {/* Sun */}
        <pointLight
          ref={sunRef}
          position={[0, 0, 0]}
          intensity={1}
          color="purple"
        />
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[2, 32, 32]} />
          <meshStandardMaterial emissive="purple" />
        </mesh>
        {/* Planet 1 */}
        <mesh
          ref={planet1Ref}
          position={[10, 10, -6]}
          onClick={() => console.log("Clicked on Planet 1!")}
        >
          <sphereGeometry args={[2, 42, 42]} />
          <meshStandardMaterial color="black" />
        </mesh>

        {/* Planet 2 */}
        <mesh
          ref={planet2Ref}
          position={[-8, 10, 0]}
          onClick={() => console.log("Clicked on Planet 2!")}
        >
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>

        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div className="absolute bottom-28 left-8 text-4xl">
        <span>
          Unlocking the <br />
          Secrets of Seamless
        </span>
      </div>
    </div>
  );
};

export default ShowCaseGallerySpaceOne;
