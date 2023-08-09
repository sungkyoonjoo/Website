import logo from "./logo.svg";
import "./App.css";
import "./scene.css";
import React, {
  useState,
  useEffect,
  Suspense,
  useRef,
  useLayoutEffect,
} from "react";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import {
  CameraShake,
  Cloud,
  OrbitControls,
  ScrollControls,
  Sky,
  useAnimations,
  useScroll,
  useTexture,
} from "@react-three/drei";
import PulseLoader from "react-spinners/PulseLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import {
  AnimationAction,
  AnimationMixer,
  Group,
  TextureLoader,
  Vector3,
} from "three";
import gsap from "gsap";
import Header from "./component/Header";
import Soulutions from "./component/Services";
import {
  BrowserRouter,
  BrowserRouter as Route,
  Router,
  Routes,
} from "react-router-dom";
import Contact from "./component/Contact.js";
import Loader from "./component/loader.js";
import City from "./component/city";
import * as THREE from "three";

// TEST용
function Rig() {
  const camera = useThree((state) => state.camera);

  return useFrame((state) => {
    camera.position.z = Math.sin(state.clock.elapsedTime) * 20;
  });
}

function Rig2() {
  const [vec] = useState(() => new THREE.Vector3());
  const { camera, mouse } = useThree();
  useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, 1, 60), 0.05));
  return (
    <CameraShake
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.4}
    />
  );
}

// 모델
function Model() {
  // const gltf = useLoader(GLTFLoader, "/blue_whale/scene.gltf");
  // const gltf = useLoader(GLTFLoader, "/yellow_submarine/scene.gltf");
  // const gltf = useLoader(GLTFLoader, "/FBX/Background_test_230427.fbx");
  const gltf = useLoader(GLTFLoader, "/submarine_low-poly/scene.gltf");
  const whale = useRef();

  const tl = useRef();
  const camera = useThree((state) => state.camera);

  const scroll = useScroll();

  console.log(scroll);

  let currentPage = 1;
  let pastPage = currentPage;
  let time = -1;
  // 카메라가 이동될때 스크롤 막기
  let lockScroll = true;
  let prevWheelTime = Date.now();
  let prevWheelDelta = 0;

  // 현재 페이지 번호
  const currentNumber = document.querySelector(".current-page");
  console.log(currentNumber.innerText);

  // 스킵
  const skip = document.querySelector(".skip");
  skip.addEventListener("click", function () {
    console.log("click");
    // currentPage = 5;
    // lockScroll = false;
    // gsap.to(canvas, 2, {
    //   opacity: 0,
    //   ease: "power1.easeout",
    // });
  });

  let prevCameraPositionX = 0;
  let prevCameraPositionY = 0;
  /**
   * Cursor
   */
  const cursor = {};
  cursor.x = 0;
  cursor.y = 0;
  let xx, yy;
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // 시작하자마자 1번째 씬 실행
    startScene1();

    window.addEventListener("wheel", function (e) {
      let wheelCount = e.deltaY;
      let now = Date.now();
      let delta = Math.abs(wheelCount);

      if (delta <= prevWheelDelta && now - prevWheelTime < 100 && lockScroll) {
        return;
      } else {
        prevWheelTime = now;
        prevWheelDelta = delta;
        changeScene(wheelCount);
      }
    });

    // 화면 바꾸는 부분
    function changeScene(wheelCount) {
      if (lockScroll) {
        //휠 감지
        if (wheelCount > 0) {
          if (currentPage === 5) return;
          pastPage = currentPage;
          currentPage++;
        } else {
          if (1 === currentPage) return;
          pastPage = currentPage;
          currentPage--;
        }
        // 현재페이지 번호 출력
        currentNumber.innerText = "0" + currentPage;
        setScene(currentPage);
        console.log(currentPage);
      }
    }

    let currentScene = 1;
    function setScene(currentPage) {
      return (
        (currentScene = currentPage),
        1 === currentScene
          ? startScene1()
          : 2 === currentScene
          ? startScene2()
          : 3 === currentScene
          ? startScene3()
          : 4 === currentScene
          ? startScene4()
          : 5 === currentScene && startScene5()
      );
    }
    // 텍스트 부분 가져오기
    const contents = document.querySelectorAll(".common-contents");
    // console.log(contents);

    // 1번재 씬
    function startScene1() {
      tl.current.to(camera.position, 3, {
        onStart() {
          lockScroll = false;
          console.log("start");
          console.log("pastPage = " + pastPage);
          // 이전 페이지가 0이면 실행하지 않기
          if (pastPage == 0) return;
          // 이전 페이지 텍스트 지우기
          contents[pastPage - 1].classList.remove("show");
        },
        x: 10,
        y: 23,
        z: -10,
        ease: "power1.inOut",
        onComplete() {
          console.log("end");
          lockScroll = true;
        },
      });
      camera.rotation.z = -2;
      xx = camera.position.x;
      yy = camera.position.y;

      // 글자 나타나기 (2.33초뒤)
      gsap.delayedCall(2.33, function () {
        contents[currentPage - 1].classList.add("show");
      });
    }

    // 2번째 씬
    function startScene2() {
      tl.current.to(camera.position, 3, {
        onStart() {
          lockScroll = false;
          console.log("start");
          console.log("pastPage = " + pastPage);
          if (pastPage == 0) return;
          contents[pastPage - 1].classList.remove("show");
        },
        x: -4,
        y: 20,
        z: 30,
        onUpdate() {
          cursor.x = camera.position.x;
          cursor.y = camera.position.y;
        },
        onComplete() {
          console.log("end");
          lockScroll = true;
        },
      });
      camera.rotation.z = 180;

      // 글자 나타나기 (2.33초뒤)
      gsap.delayedCall(2.33, function () {
        contents[currentPage - 1].classList.add("show");
      });
    }

    // 3번째 씬
    function startScene3() {
      tl.current.to(camera.position, 3, {
        onStart() {
          lockScroll = false;
          console.log("start");
          console.log("pastPage = " + pastPage);
          contents[pastPage - 1].classList.remove("show");
        },
        x: -20,
        y: 10,
        z: 30,
        ease: "power1.inOut",
        onComplete() {
          // cursor.x = camera.position.x;
          // cursor.y = camera.position.y;
          console.log("end");
          lockScroll = true;
        },
      });
      camera.rotation.z = 3;

      // 글자 나타나기 (2초뒤)
      gsap.delayedCall(2, function () {
        contents[currentPage - 1].classList.add("show");
      });
    }

    // 4번째 씬
    function startScene4() {
      tl.current.to(camera.position, 3, {
        onStart() {
          lockScroll = false;
          console.log("start");
          console.log("pastPage = " + pastPage);
          contents[pastPage - 1].classList.remove("show");
        },
        x: 10,
        y: 9,
        z: 10,
        ease: "power1.inOut",
        onComplete() {
          // cursor.x = camera.position.x;
          // cursor.y = camera.position.y;
          console.log("end");
          lockScroll = true;
        },
      });

      camera.rotation.z = 4;
      // 글자 나타나기 (2초뒤)
      gsap.delayedCall(2, function () {
        contents[currentPage - 1].classList.add("show");
      });
    }

    function startScene5() {
      console.log("scene5");
    }

    window.addEventListener("mousemove", (event) => {
      cursor.x = event.clientX / window.innerWidth - 0.5;
      cursor.y = event.clientY / window.innerHeight - 0.5;
    });
  }, []);

  // 모델 에니메이션
  const mixer = new AnimationMixer(gltf.scene);

  gltf.animations.forEach((clip) => {
    const action = mixer.clipAction(clip);
    action.play();
  });

  // console.log(gltf);
  // console.log("mixer : " + mixer);

  useFrame((state, delta) => {
    // tl.current.seek(scroll.offset * tl.current.duration());
    // whale.current.position.z = (whale.current.position.z + delta) % 10;
    whale.current.position.z += delta;
    if (whale.current.position.z >= 8) {
      whale.current.rotation.y += delta;
      if (whale.current.position.z >= 9) {
        whale.current.position.z = 9;
      }
      if (whale.current.rotation.y >= 1.6) {
        whale.current.rotation.y = 1.6;
        whale.current.position.x += delta;
      }
    }

    // console.log(whale.current.position);
    // camera.position.x = Math.sin(state.clock.elapsedTime) * 20;

    // console.log(camera.lookAt());

    if (mixer) {
      mixer.update(delta);
    }
    // console.log(Math.sin(state.pointer.x));
    // camera.position.x += (Math.sin(state.pointer.x) - xx) * 2 * delta;
    console.log(camera.position);
    // camera.position.y += (Math.cos(-state.pointer.y) - yy) * 2 * delta;
    camera.lookAt(whale.current.position);
    // console.log(state.pointer);

    // camera.position.x;

    // if (lockScroll) {
    //   //마우스로 camera 시점 움직이기
    //   const parallaxX = cursor.x * 5;
    //   const parallaxY = -cursor.y * 5;

    //   // camera.position.x += (parallaxX - camera.position.x) * 5 * delta;
    //   // camera.position.y += (parallaxY - camera.position.y) * 5 * delta;
    //   camera.position.x = prevCameraPositionX;
    //   camera.position.y = prevCameraPositionY;

    //   camera.position.x += parallaxX - camera.position.x;
    //   camera.position.y += parallaxY - camera.position.y;

    //   // console.log(parallaxX);
    // }
    // console.log(cursor.x);
    // console.log(camera.position);
  });

  return (
    <Suspense fallback={null}>
      <primitive ref={whale} object={gltf.scene} scale={1} />
      <mesh onWheel={(event) => console.log("wheel")} />
    </Suspense>
  );
}

function CameraControls() {
  const { camera } = useThree();
  const cameraRef = useRef();

  useFrame(({ mouse }) => {
    const x = (mouse.x * 2 - 1) * 0.1;
    const y = (mouse.y * 2 - 1) * 0.1;
    cameraRef.current.position.x = x;
    cameraRef.current.position.y = y;
    camera.lookAt(0, 0, 0);
  });

  return <perspectiveCamera ref={cameraRef} />;
}

function Scene() {
  return (
    <div className="scene">
      <Canvas
        className="canvas"
        camera={{ position: [0, 0, 16], fov: 64 }}
        style={{
          backgroundColor: "#727272",
          // width: "3072px",
          width: "100%",
          height: "100%",
          // height: "1586px",
        }}
      >
        <CameraControls />
        {/* 로딩 */}
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.8} />
          <pointLight intensity={2} position={[0, 0, -1000]} />
          {/* <ScrollControls pages={3} damping={0.1}> */}
          <City />
          <Model />
          {/* </ScrollControls> */}
          {/* <OrbitControls target={Scene.position} /> */}
          {/* <Cloud
            opacity={0.5}
            speed={0.4} // Rotation speed
            width={10} // Width of the full cloud
            depth={1.5} // Z-dir depth
            segments={20} // Number of particles
          />
          <Cloud
            opacity={0.5}
            speed={0.4} // Rotation speed
            width={10} // Width of the full cloud
            depth={1.5} // Z-dir depth
            segments={20} // Number of particles
          />
          <Cloud
            opacity={1}
            speed={0.7} // Rotation speed
            width={30} // Width of the full cloud
            depth={1.5} // Z-dir depth
            segments={20} // Number of particles
          />
          <Cloud
            opacity={1}
            speed={0.7} // Rotation speed
            width={100} // Width of the full cloud
            depth={3.5} // Z-dir depth
            segments={20} // Number of particles
          />
          <Sky
            azimuth={0.1}
            turbidity={10}
            rayleigh={0.5}
            inclination={0.6}
            distance={1000}
          /> */}
          {/* <CameraShake
              maxYaw={0.1} // Max amount camera can yaw in either direction
              maxPitch={0.1} // Max amount camera can pitch in either direction
              maxRoll={0.1} // Max amount camera can roll in either direction
              yawFrequency={0.1} // Frequency of the the yaw rotation
              pitchFrequency={0.1} // Frequency of the pitch rotation
              rollFrequency={0.1} // Frequency of the roll rotation
              intensity={1} // initial intensity of the shake
              decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
            /> */}
        </Suspense>
      </Canvas>
      <div className="scroll">
        <span className="current-page">01</span>
        <span> / 05</span>
      </div>
      <div className="skip">
        <span>skip</span>
      </div>
      {/* 텍스트 부분 */}
      <div>
        <section className="common-contents content-1">
          <h1>LOGO</h1>
        </section>
        <section className="common-contents content-2">
          <h1>services</h1>
          <div>
            <span>Digital Solutions</span>
            <br />
            <span>Creative Offerings</span>
            <br />
            <a href="/services">-{">"} see more</a>
          </div>
        </section>
        <section className="common-contents content-3">
          <h1>products</h1>
          <div>
            <span>Maground</span>
            <br />
            <span>United Visual Researchers</span>
            <br />
            <a href="/products">-{">"} see more</a>
          </div>
        </section>
        <section className="common-contents content-4">
          <h1>company</h1>
          <div>
            <a href="/company">-{">"} see more</a>
          </div>
        </section>
        <section className="common-contents content-5">
          <h1>careers</h1>
          <div>
            <a href="/careers">-{">"} see more</a>
          </div>
        </section>
        <section className="common-contents content-6">
          <h1>contact</h1>
          <div>
            <a href="/contact">-{">"} see more</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Scene;
