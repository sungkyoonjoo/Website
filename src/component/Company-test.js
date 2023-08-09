import "../styles/company.css";

export default function Company() {
  return (
    <div className="wrapper company">
      <div className="">
        <h1 className="title-container">
          <div className="title service">Company</div>
        </h1>

        <section className="detail-wrap sections section-1">
          <h2>Value / Vision</h2>
          <div className="section-1-list">
            <div>Accuracy</div>
            <div>Creativity</div>
            <div>Expertise</div>
            <div>Integrity</div>
            <div>Passion</div>
          </div>
        </section>

        <section className="sections">
          <h2>Team</h2>
          <div className="section-2-info">
            <div>
              As pioneers of 3D car CGI visualization in Korea, we take pride in
              leading the automotive digital production industry through
              tireless research and innovation. Our seamless collaborations with
              top companies in both the domestic and international 3D
              visualization space position us at the forefront of shaping the
              future of the Korean automotive industry in both the virtual and
              tangible world.
            </div>
            <div>
              At the forefront of innovation in the automotive industry, we were
              the pioneers to introduce 3D car CGI visualization in Korea. Our
              unwavering commitment to research and development has established
              us as leaders in the digital production space. Collaborating with
              top companies both domestically and internationally, we are
              driving the future of the Korean automotive industry both online
              and offline through seamless partnerships in the 3D visualization
              sector.
            </div>
          </div>
        </section>
        <section className="sections history-section">
          <h2>History</h2>
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
        </section>
        <div>
          <ul className="history-list-2">
            <li>
              <div>
                <span>Hyundai, Kia</span>
                <span>2013-2018</span>
                <span>3D Visual/Vehicle Content Management</span>
              </div>
            </li>
            <li>
              <div>
                <span>Hyundai, Kia</span>
                <span>2013-2018</span>
                <span>3D Consulting</span>
              </div>
            </li>
            <li>
              <span>Hyundai, Kia, Genesis</span>
              <span>2013-2021</span>
              <span>Catia Data Collection</span>
            </li>
            <li>
              <span>Hyundai, Kia, Genesis</span>
              <span>2013-2021</span>
              <span>Catia Data Collection</span>
            </li>
            <li>
              <span>Maground</span>
              <span>2015-</span>
              <span>Official Maground Supplier in Korea</span>
            </li>
            <li>
              <span>Genesis, Kia</span>
              <span>2019-</span>
              <span>Image Production System</span>
            </li>
            <li>
              <span>Hyundai</span>
              <span>2021-2022</span>
              <span>Virtual Garage</span>
            </li>
            <li>
              <span>HTWO</span>
              <span>2021-</span>
              <span>Hydrogen Fuel Cell System Brand HTWO Website</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
