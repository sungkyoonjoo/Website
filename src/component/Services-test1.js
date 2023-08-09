import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import "./services.css";
gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  // *** 이미지 슬라이드 시작 ***
  const [imageRevealFraq, setImageRevealFraq] = useState(0.5);
  const imageContainer = useRef(undefined);

  const slide = (xPosition) => {
    const containerBoundingRect =
      imageContainer.current.getBoundingClientRect();

    setImageRevealFraq(() => {
      // 슬라이드가 이미지를 벗어나지 않게
      if (xPosition < containerBoundingRect.left) {
        return 0;
      } else if (xPosition > containerBoundingRect.right) {
        return 1;
      } else {
        return (
          (xPosition - containerBoundingRect.left) / containerBoundingRect.width
        );
      }
    });
  };

  // 터치이벤트 관리
  const handleTouchMove = (e) => {
    slide(e.touches.item(0).clientX);
  };
  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
  };

  const handleMouseMove = (event) => {
    slide(event.clientX);
  };

  const handleMouseUp = () => {
    window.onmousemove = undefined;
    window.onmouseup = undefined;
  };
  // *** 이미지 슬라이드 끝 ***

  // gsap.from(".service-2", {
  //   duration: 1,
  //   x: 400,
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: ".service-2",
  //     markers: true,
  //     start: "top 80%",
  //     end: "bottom 20%",
  //     toggleActions: "play none reverse reset",
  //   },
  // });

  useEffect(() => {
    const title = document.querySelector(".title");
    setTimeout(() => {
      title.classList.add("show");
    }, 100);

    return () => {
      console.log("end");
      title.classList.remove("show");
    };
  }, []);

  return (
    <div className="wrapper services">
      <section>
        <h1 className="title-container">
          <div className="title service">Services</div>
        </h1>
        <div className="service-container">
          <div className="service-wrap service-wrap-1">
            <div className="service-1">
              <h2 className="detail-title">Digital Solutions</h2>
              <div>
                <div>
                  From data collection to preparation, logic, modeling and
                  management, our digital foundation pipeline covers it all.
                </div>
                <div>
                  <div>
                    <div>
                      <p>-</p>
                      <p>Data Visualization</p>
                    </div>
                    <section>
                      <h4>Data Collection & Preparation</h4>
                      <div>
                        We turn your data into digital assets through seamless
                        integration
                      </div>
                      <div>
                        We go beyond just creating digital illustrations of
                        automobiles. At the core of our work is a deep
                        understanding of the significance and intent behind car
                        content. We meticulously gather, refine, clean, and
                        prepare data to empower our digital artists to craft
                        impactful visuals for the global marketing arena.
                      </div>
                    </section>
                    <section>
                      <h4>Data Management & Governance</h4>
                      <div>
                        We ensure accuracy and security of your assets through
                        our solutions
                      </div>
                    </section>
                    <section>
                      <h4>Example</h4>
                      <div>
                        Hyundai, Kia, Genesis 3D Visual/Vehicle Contents
                        Management
                      </div>
                    </section>
                  </div>
                  <div>
                    <div>
                      <p>-</p>
                      <p>Digital Asset Creation</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>-</p>
                      <p>Digital Experience Solutions</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>-</p>
                      <p>Post-Production & Deployment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref={imageContainer} className="image-container group">
              <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-nCaVAw47.png" />
              <img
                id="my-img"
                style={{
                  filter: "grayscale(100%)",
                  clipPath: `polygon(0 0, ${imageRevealFraq * 100}% 0, ${
                    imageRevealFraq * 100
                  }% 100%, 0 100%)`,
                }}
                src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/28862ef5-d0f9-488c-9d37-702cd834ea2f/%EC%97%90%EC%96%B4-%ED%8F%AC%EC%8A%A4-1-07-%EC%97%AC%EC%84%B1-%EC%8B%A0%EB%B0%9C-nCaVAw47.png"
              />
              <div
                style={{ left: `${imageRevealFraq * 100}%` }}
                className="slider-container"
              >
                <div className="slider-wrap">
                  <div className="slider"></div>
                  <div
                    style={{ touchAction: "none" }}
                    onMouseDown={handleMouseDown}
                    onTouchMove={handleTouchMove}
                    className="slider-btn"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="slider-btn-arrow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {/* <input
              id="slider"
              type="range"
              min={0}
              max={100}
              defaultValue={50}
              onInput={slide()}
            /> */}
            </div>
          </div>
        </div>

        <div className="service-container">
          <div className="service-wrap">
            <section className="service-1">
              <h2>Creative Offerings</h2>
              <div>
                <div>
                  We offer a wide range of design services, including editorial
                  design, image stock, brochure design, and brand/identity
                  design. Our team of designers can help you create visually
                  stunning and effective marketing materials that communicate
                  your message clearly and effectively.
                </div>
                <div>
                  <div>Film/Animation</div>
                  <div>Editorial/Brochure</div>
                  <div>Brand/Identity</div>
                </div>
              </div>
            </section>
            <div>
              <img src="https://www.hyundai.com/contents/mainbanner/sonata-23fl-w.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
