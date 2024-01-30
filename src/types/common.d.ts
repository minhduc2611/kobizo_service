import { Object3DNode, extend } from "@react-three/fiber";
import { UnrealBloomPass } from "three-stdlib";
extend({ UnrealBloomPass });

// Add types to ThreeElements elements so primitives pick up on it
declare module "@react-three/fiber" {
  interface ThreeElements {
    unrealBloomPass: Object3DNode<UnrealBloomPass, typeof UnrealBloomPass>;
  }
}
