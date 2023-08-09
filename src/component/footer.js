import "./footer.css";

export default function Footer() {
  console.log(window.location.pathname === "/");

  const footer = document.querySelector("footer");
  console.log(footer);
  if (window.location.pathname === "/") {
    // footer.classList.add("on");
  }

  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div className="footer-info">
            <div className="about-area">
              <h3>ABOUT</h3>
              <ul>
                <li>add : 565-6, Sinsa-dong, Gangnam-gu, Seoul, Korea</li>
                <li>tel : +82-02-540-6784</li>
                <li>email : help@submarine-y.com</li>
              </ul>
            </div>
            <div className="category-area">
              <h3>CATEGORY</h3>
              <ul>
                <li>
                  <a href="/services">SERVICE</a>
                </li>
                <li>
                  <a href="/products">PRODUCT</a>
                </li>
                <li>
                  <a href="/company">COMPANY</a>
                </li>
                <li>
                  <a href="/careers">CAREERS</a>
                </li>
                <li>
                  <a href="/contact">CONTACT</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright-area">
            Copyright 2023. submarine-y all rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
