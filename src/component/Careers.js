import { useEffect } from "react";
import "../styles/careers.css";

export default function Careers() {
  useEffect(() => {
    const accordionBox = document.querySelector(".accordion-box");
    let current = accordionBox.querySelector(".accordion-active");

    accordionBox.addEventListener("click", function (e) {
      const isHeader =
        e.target.nodeName == "H2" ||
        e.target.classList.contains("accordion-header");

      if (!isHeader) return;

      const clickedHeader = e.target;
      const isActive = clickedHeader.classList.contains("accordion-active");

      if (current != null) current.classList.remove("accordion-active");

      if (!isActive) {
        clickedHeader.classList.add("accordion-active");
        current = clickedHeader;
      } else {
        current = null;
      }
    });

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wrapper careers">
      <section>
        <h1 className="title-container">
          <div className="title service">Careers</div>
        </h1>
        <div className="detail-wrap">
          <section className="sections career-section">
            <h2>Introduction</h2>
            <h3>Join Our Team!</h3>
            <div>
              We believe in cultivating a talented community. We are constantly
              ready to learn and progress. Our culture is built on positivity,
              hard work, integrity, and open communication. Visit our careers
              page to learn more about joining our team.
            </div>
          </section>
          <section className="sections career-section position">
            <h2>Positions</h2>
            <div className="accordion-box">
              <h2 className="accordion-header">Design Team</h2>
              <div className="accordion-content">
                <p>Design Team</p>
              </div>
              <h2 className="accordion-header">Development Team</h2>
              <div className="accordion-content">
                <p>Development Team</p>
              </div>
              <h2 className="accordion-header">Product Management Team</h2>
              <div className="accordion-content">
                <p>Product Management Team</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
