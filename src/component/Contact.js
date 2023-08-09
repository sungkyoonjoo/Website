import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./contact.css";
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import Careers from "./Careers";
import Map from "./Map";

function ContactContent(props) {
  const [visible, setVisible] = useState(false);

  // useLayoutEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.from(".contact-title", {
  //     duration: 2,
  //     y: 200,
  //     opacity: 0,
  //   });

  //   return () => {
  //     ScrollTrigger.killAll();
  //   };
  // }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (props.active) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [props.active]);

  return (
    <div className={`contact-content ${visible ? "visible" : ""}`}>
      {props.children}
    </div>
  );
}

export default function Contact() {
  let [contactMenu, setContactMenu] = useState("PHONE");
  let current = document.querySelector(".on");

  /*
  useEffect(() => {
    // contact-list 텍스트에 애니메이션 주기
    const contactList = document.querySelector(".contact-list");
    setTimeout(() => {
      contactList.classList.add("show");
    }, 100);

    return () => {
      console.log("end");
      contactList.classList.remove("show");
    };
  }, []);
  */

  /*
  function clickContactMenu(e) {
    setContactMenu((contactMenu = e.target.innerText));
    console.log(e.target.className);

    current = document.querySelector(".on");
    const el = e.target;

    if (el.tagName != "LI" && el.tagName != "DIV") return;

    let li = el;
    if (el.tagName == "DIV") li = el.parentElement;

    li.classList.add("on");

    if (current != null) current.classList.remove("on");

    current = li;
  }
  */

  function clickContactMenu(e) {
    setContactMenu(e.target.innerText);
  }

  return (
    //   <div className="wrapper contact">
    //     <div className="contact-wrap">
    //       <div className="contact-title">
    //         <div>
    //           <h1>Contact</h1>
    //         </div>
    //         <div>
    //           <p>Contact Us!</p>
    //         </div>
    //       </div>
    //       <div className="contact-aside">
    //         <ul className="contact-menus">
    //           <li className="contact-menu on" onClick={clickContactMenu}>
    //             <div>PHONE</div>
    //           </li>
    //           <li className="contact-menu" onClick={clickContactMenu}>
    //             <div>E-MAIL</div>
    //           </li>
    //           <li className="contact-menu" onClick={clickContactMenu}>
    //             <div>LOCATION</div>
    //           </li>
    //           <li className="contact-menu" onClick={clickContactMenu}>
    //             <div>Links</div>
    //           </li>
    //           {/* <li>
    //             <Link to="/careers">location</Link>
    //           </li> */}
    //         </ul>
    //       </div>
    //       <div className="contact-container">
    //         <div className="contact-content">
    //           {contactMenu === "PHONE" ? <>+82-02-540-6784</> : ""}
    //         </div>
    //         <div className="contact-content">
    //           {contactMenu === "E-MAIL" ? <div>help@submarine-y.com</div> : ""}
    //         </div>
    //         <div className="contact-content">
    //           {contactMenu === "LOCATION" ? (
    //             <>
    //               <div>565-6, Sinsa-dong, Gangnam-gu, Seoul, Korea</div>
    //               <Map />
    //             </>
    //           ) : (
    //             ""
    //           )}
    //         </div>
    //         <div className="contact-content">
    //           {contactMenu === "Links" ? (
    //             <div>
    //               <a
    //                 className="linkedIn"
    //                 href="https://www.linkedin.com/company/submarine-y/mycompany/"
    //                 target={"_blank"}
    //               ></a>
    //             </div>
    //           ) : (
    //             ""
    //           )}
    //         </div>
    //       </div>
    //       {/* <ul className="contact-list">
    //         <li>
    //           <h2>Phone</h2>
    //           <div>
    //             <a href="tel:02-540-6784">+82-02-540-6784</a>
    //           </div>
    //         </li>
    //         <li>
    //           <h2>Email</h2>
    //           <div>
    //             <a href="mailto:help@submarine-y.com">help@submarine-y.com</a>
    //           </div>
    //         </li>
    //         <li>
    //           <h2>Location</h2>
    //           <div>565-6, Sinsa-dong, Gangnam-gu, Seoul, Korea</div>
    //         </li>
    //         <li>
    //           <h2>Links</h2>
    //           <div>
    //             <a
    //               className="btn"
    //               href="https://www.linkedin.com/company/submarine-y/mycompany/"
    //               target={"_blank"}
    //             >
    //               LinkedIn
    //             </a>
    //           </div>
    //         </li>
    //       </ul> */}
    //     </div>
    //   </div>
    // );
    <div className="wrapper contact">
      <div className="contact-wrap">
        <div className="contact-title">
          <div>
            <h1>Contact</h1>
          </div>
          {/* <div>
            <p>Contact Us!</p>
          </div> */}
        </div>
        <div className="contact-aside">
          <ul className="contact-menus">
            <li
              className={`contact-menu ${contactMenu === "PHONE" ? "on" : ""}`}
              onClick={clickContactMenu}
            >
              <div>PHONE</div>
            </li>
            <li
              className={`contact-menu ${contactMenu === "E-MAIL" ? "on" : ""}`}
              onClick={clickContactMenu}
            >
              <div>E-MAIL</div>
            </li>
            <li
              className={`contact-menu ${
                contactMenu === "LOCATION" ? "on" : ""
              }`}
              onClick={clickContactMenu}
            >
              <div>LOCATION</div>
            </li>
            <li
              className={`contact-menu ${contactMenu === "LINKS" ? "on" : ""}`}
              onClick={clickContactMenu}
            >
              <div>LINKS</div>
            </li>
          </ul>
        </div>
        <div className="contact-container">
          <ContactContent active={contactMenu === "PHONE"}>
            +82-02-540-6784
          </ContactContent>
          <ContactContent active={contactMenu === "E-MAIL"}>
            help@submarine-y.com
          </ContactContent>
          <ContactContent active={contactMenu === "LOCATION"}>
            <div className="location">
              <div>565-6, Sinsa-dong, Gangnam-gu, Seoul, Korea</div>
              <Map />
            </div>
          </ContactContent>
          <ContactContent active={contactMenu === "LINKS"}>
            <div>
              <a
                className="linkedIn"
                href="https://www.linkedin.com/company/submarine-y/mycompany/"
                target={"_blank"}
              ></a>
            </div>
          </ContactContent>
        </div>
      </div>
      {/* <div className="contact-detail">
        <div className="contact-detail-title">
          <h2 className="contact-detail-title-text">contact us</h2>
        </div>
        <div className="">
          <div className="contact-container">
            <div className="contact-content2">
              <h3>Phone</h3>
              <div>
                <a href="tel:02-540-6784">+82-02-540-6784</a>
              </div>
            </div>
            <div className="contact-content2">
              <h3>Email</h3>
              <div>
                <a href="mailto:help@submarine-y.com">help@submarine-y.com</a>
              </div>
            </div>
            <div className="contact-content2">
              <h3>Location</h3>
              <div>565-6, Sinsa-dong, Gangnam-gu, Seoul, Korea</div>
            </div>
            <div className="contact-content2">
              <h3>Links</h3>
              <div>
                <a
                  className="btn"
                  href="https://www.linkedin.com/company/submarine-y/mycompany/"
                  target={"_blank"}
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
