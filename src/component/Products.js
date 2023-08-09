import { useEffect } from "react";
import "../styles/products.css";

export default function Products() {
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
    <>
      <section className="wrapper products">
        <h1 className="title-container">
          <div className="title product">Products</div>
        </h1>

        <div className="detail-wrap">
          <div className="detail">
            We use cutting-edge tools such as Maground and United Visual
            Researchers to bring your ideas to life. These tools allow us to
            create high-quality, realistic 3D models, animations, and
            visualizations that will help you achieve your marketing goals.
          </div>
          <section className="sections">
            <h2>Maground</h2>
            <div>
              MAGROUND is the go-to resource for exclusive imagery to create
              outstanding marketing visuals for the automotive industry.
              <br />
              <a href="https://maground.com/">https://maground.com/</a>
            </div>
          </section>
          <section className="sections">
            <h2>United Visual Researchers</h2>
            <div>
              We offer Optical Technology-Powered Simulation Solutions for
              Accurate Measurements and Predictions
              <br />
              <a href="https://www.united-vr.com/">
                https://www.united-vr.com/
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
