import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "../styles/company.css";

export default function Company() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const animation1 = gsap.from(".value-item", {
      scrollTrigger: {
        trigger: ".value-item",
        // markers: true,
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
      duration: 2,
      y: 150,
      opacity: 0,
    });
    const animation2 = gsap.from(".service-section-creative", {
      scrollTrigger: {
        trigger: ".service-section-creative",
        // markers: true,
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
      duration: 2,
      y: 160,
      opacity: 0,
    });
    const animation3 = gsap.from(".history", {
      scrollTrigger: {
        trigger: ".history",
        // markers: true,
        start: "center bottom",
        end: "bottom bottom",
        toggleActions: "play none none none",
      },
      duration: 2,
      y: 150,
      opacity: 0,
    });

    window.scrollTo(0, 0);

    return () => {
      ScrollTrigger.killAll();
      animation1.kill();
    };
  }, []);

  return (
    <div className="wrapper service">
      <div className="service-wrap">
        <div className="service-title">
          <div className="title-banner">
            <div className="banner-text">
              <h1>Company</h1>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
        <main>
          <div className="service-section-solution">
            <div className="service-section solution">
              <div className="service-section-title">
                <h1>Value / Vision</h1>
              </div>
              <div className="solution-contents">
                <div className="value-item">
                  <div>Accuracy</div>
                  <div>Creativity</div>
                  <div>Expertise</div>
                  <div>Integrity</div>
                  <div>Passion</div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-section-creative">
            <div className="service-section creative">
              <div className="service-section-title">
                <h1>Team</h1>
              </div>
              <div>
                <div>
                  As pioneers of 3D car CGI visualization in Korea, we take
                  pride in leading the automotive digital production industry
                  through tireless research and innovation. Our seamless
                  collaborations with top companies in both the domestic and
                  international 3D visualization space position us at the
                  forefront of shaping the future of the Korean automotive
                  industry in both the virtual and tangible world.
                </div>
                <div>
                  At the forefront of innovation in the automotive industry, we
                  were the pioneers to introduce 3D car CGI visualization in
                  Korea. Our unwavering commitment to research and development
                  has established us as leaders in the digital production space.
                  Collaborating with top companies both domestically and
                  internationally, we are driving the future of the Korean
                  automotive industry both online and offline through seamless
                  partnerships in the 3D visualization sector.
                </div>
              </div>
            </div>
          </div>
          <div className="service-section-history">
            <div className="service-section history">
              <div className="service-section-title">
                <h1>History</h1>
              </div>
              <div className="history-contents">
                <div className="history-list">
                  <div className="history-wrap">
                    <div className="history-year">2013-2018</div>
                    <div>Hyundai, Kia 3D Visual/Vehicle Content Management</div>
                  </div>
                  <div className="history-wrap">
                    <div className="history-year">2013-2018</div>
                    <div>Hyundai-Kia Motors Corporation 3D Consulting</div>
                  </div>
                  <div className="history-wrap">
                    <div className="history-year">2013-2021</div>
                    <div>Hyundai, Kia, Genesis Catia Data Collection</div>
                  </div>
                  <div className="history-wrap">
                    <div className="history-year">2015-</div>
                    <div>Official Maground Supplier in Korea</div>
                  </div>
                  <div className="history-wrap">
                    <div className="history-year">2019-</div>
                    <div>Genesis, Kia Image Production System</div>
                  </div>
                  <div className="history-wrap">
                    <div className="history-year">2021-2022</div>
                    <div>Hyundai Virtual Garage</div>
                  </div>
                  <div className="history-wrap">
                    <div className="history-year">2021-</div>
                    <div>Hydrogen Fuel Cell System Brand HTWO Website</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
