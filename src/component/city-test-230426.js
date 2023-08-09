import { useLoader, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

export default function City() {
  // const gltf = useLoader(GLTFLoader, "/cyberpunk_city/scene.gltf");
  const gltf = useLoader(FBXLoader, "/FBX/Background_test_230427.fbx");

  const city = useRef();

  const camera = useThree((state) => state.camera);

  //   camera.zoom = 100;

  return (
    <Suspense fallback={null}>
      <primitive
        ref={city}
        object={gltf.scene}
        scale={16}
        position={[0, -5, 0]}
      />
      <mesh onWheel={(event) => console.log("wheel")} />
    </Suspense>
  );
}
