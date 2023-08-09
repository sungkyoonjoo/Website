import { Route, Routes } from "react-router-dom";
import "./footer.css";
import Scene from "../Scene";
import Services from "./Services";
import Products from "./Products";
import Company from "./Company";
import Careers from "./Careers";
import Contact from "./Contact";

export default function Body() {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Scene />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company" element={<Company />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
