import React, { useEffect } from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import Services from "./Services.js";
import Products from "./Products.js";
import Company from "./Company.js";
import Careers from "./Careers.js";
import Contact from "./Contact.js";
import "./header.css";
import "../styles/utils.css";

import Scene from "../Scene.js";
import { useFrame } from "@react-three/fiber";

export default function Header() {
  const [isBlack, setIsBlack] = React.useState(true);

  // React.useEffect(() => {
  //   if (window.location.pathname === "/contact") {
  //     setIsBlack(true);
  //   }
  // }, []);

  // function testBlack(e) {
  //   if (e.target.innerText === "contact") {
  //     setIsBlack(true);
  //   } else {
  //     setIsBlack(true);
  //   }
  // }

  React.useEffect(() => {
    console.log(window.location.pathname);
    if (window.location.pathname === "/") {
      setIsBlack(false);
    }
  }, []);

  function testBlack(e) {
    console.log(e.target.className);

    if (e.target.className === "logo") {
      setIsBlack(false);
    } else {
      setIsBlack(true);
    }
  }

  const headerActive = {
    // color: "#289951",
    color: "#4d89b2",
  };

  return (
    <>
      <header className={`header ${isBlack ? "black" : ""}`}>
        <div className="header-inner">
          <div className="">
            <Link to="/" onClick={testBlack}>
              {/* LOGO */}
              <img
                className="logo"
                src="Submarine-Y-logo_300x150.png"
                style={{ width: "200px" }}
              />
            </Link>
          </div>
          <nav className="header-menu">
            <ul>
              <li>
                <NavLink
                  className={`nav-item ${isBlack ? "black" : ""}`}
                  style={({ isActive }) => (isActive ? headerActive : {})}
                  to="/services"
                  onClick={testBlack}
                >
                  services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item ${isBlack ? "black" : ""}`}
                  style={({ isActive }) => (isActive ? headerActive : {})}
                  to="/products"
                  onClick={testBlack}
                >
                  products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item ${isBlack ? "black" : ""}`}
                  style={({ isActive }) => (isActive ? headerActive : {})}
                  to="/company"
                  onClick={testBlack}
                >
                  company
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item ${isBlack ? "black" : ""}`}
                  style={({ isActive }) => (isActive ? headerActive : {})}
                  to="/careers"
                  onClick={testBlack}
                >
                  careers
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={`nav-item ${isBlack ? "black" : ""}`}
                  style={({ isActive }) => (isActive ? headerActive : {})}
                  to="/contact"
                  onClick={testBlack}
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* <main className="container">
        <Routes>
          <Route path="/*" element={<Scene />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/company" element={<Company />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> */}
    </>
  );
}
