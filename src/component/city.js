import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { AnimationClip, AnimationMixer, PerspectiveCamera } from "three";
import { useRef } from "react";

export default function City() {
  const groupRef = useRef();
  const fbx = useLoader(FBXLoader, "/FBX/Background_test_230427.fbx");
  console.log(fbx);
  const animations = fbx.animations;
  const mixer = new AnimationMixer(fbx);
  const action = mixer.clipAction(animations[0]);
  action.play();
  const cameraRef = useRef();

  // cameraRef.lookAt(0, 1000, 0);

  // fbx.children.forEach((child) => {
  //   console.log(child.name);
  //   child.traverse(function (node) {
  //     if (node.isMesh) {
  //       // console.log(node);
  //       node.castShadow = true;
  //       node.receiveShadow = true;
  //     }
  //   });
  // });

  // let mixer;
  // fbx.children.forEach((child) => {
  //   mixer = new AnimationMixer(child);
  //   const action = mixer.clipAction(animations[0]);
  //   console.log(action);
  //   action.play();
  // });

  // // `scale.x` 트랙만을 선택합니다.
  // const track = action
  //   .getClip()
  //   .tracks.find((track) => track.name.endsWith(".scale"));
  // const clip = new AnimationClip("", -1, [track]);

  // const newAction = mixer.clipAction(clip);
  // newAction.play();

  useFrame((state, delta) => {
    mixer.update(delta);
    // console.log(fbx.children[0].position);
    // camera.lookAt(fbx.children[0]);
  });

  return (
    <>
      <perspectiveCamera ref={cameraRef} lookAt={(0, 0, 0)} />
      <group ref={groupRef}>
        <primitive object={fbx} scale={0.5} />;
      </group>
    </>
  );
  // nodes["RootNode"] = fbx
  // return (
  //   <group key={nodes["RootNode"].name + "_Root"} rotation={nodes["RootNode"].rotation} position={position} scale={scale}>
  //     <mesh ref={ua2.ref} material={material}>
  //       <boxGeometry args={[0.1, 0.1, 0.1]} />
  //     </mesh>
  //     {nodes["RootNode"].children.map((child) => {
  //       if (child.type == "Mesh") {
  //         return <mesh key={child.name} position={child.position} rotation={child.rotation} scale={child.scale} geometry={child.geometry} material={child.material} />
  //       }

  //       return <group key={child.name} position={child.position} rotation={child.rotation} scale={child.scale}>
  //         {child.children.map((grand) => {
  //           if (grand.name == "pCylinder4") {
  //             return (
  //               <mesh ref={ua1.ref} key={grand.name} position={grand.position} rotation={grand.rotation} scale={grand.scale} geometry={grand.geometry} material={grand.material} />
  //             )
  //           }

  //           return (
  //             <mesh key={grand.name} position={grand.position} rotation={grand.rotation} scale={grand.scale} geometry={grand.geometry} material={grand.material} />
  //           )
  //         })}
  //       </group>
  //     })
  //     }
  //   </group>
  // );

  // return (
  //   <group
  //     key={fbx}
  //     rotation={fbx.rotation}
  //     position={fbx.position}
  //     scale={fbx.scale}
  //   >
  //     {fbx.children.map((child) => {
  //       if (child.type == "Mesh") {
  //         return (
  //           <mesh
  //             key={child.name}
  //             position={child.position}
  //             rotation={child.rotation}
  //             scale={child.scale}
  //             geometry={child.geometry}
  //             material={child.material}
  //           />
  //         );
  //       }

  //       return (
  //         <group
  //           key={child.name}
  //           position={child.position}
  //           rotation={child.rotation}
  //           scale={child.scale}
  //         >
  //           {child.children.map((grand) => {
  //             // if (grand.name == "pCylinder4") {
  //             //   return (
  //             //     <mesh
  //             //       ref={ua1.ref}
  //             //       key={grand.name}
  //             //       position={grand.position}
  //             //       rotation={grand.rotation}
  //             //       scale={grand.scale}
  //             //       geometry={grand.geometry}
  //             //       material={grand.material}
  //             //     />
  //             //   );
  //             // }
  //             // return (
  //             //   <mesh
  //             //     key={grand.name}
  //             //     position={grand.position}
  //             //     rotation={grand.rotation}
  //             //     scale={grand.scale}
  //             //     geometry={grand.geometry}
  //             //     material={grand.material}
  //             //   />
  //             // );
  //           })}
  //         </group>
  //       );
  //     })}
  //   </group>
  // );
}
