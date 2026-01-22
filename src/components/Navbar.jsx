import acmLogo from "../assets/images/LogoACMmeerut1.png";
import acmLogo1 from "../assets/images/LogoACMmeerut.png";
import acmLogo2 from "../assets/images/ACM merrut.png";
import { Link } from "react-router-dom";


function Navbar() {
  const currentPath = window.location.pathname;

  return (
    <header className="header_section">
      <div className="navbar_container">

        {/* Left: Logo + Name */}
        <div className="nav_left">
          {/* <img src={acmLogo} alt="ACM Logo" className="nav_logo" /> */}
          <img src={acmLogo1} alt="ACM Logo" className="nav_logo" />
          {/* <img src={acmLogo2} alt="ACM Logo" className="nav_logo" /> */}
          <span className="nav_title">ACM Meerut Chapter</span>
        </div>

        {/* Right: Links + Search */}
        <div className="nav_right">
          <ul className="nav_links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/officers">Officers</Link></li>
  <li><Link to="/sub-society">SIGs</Link></li>
  <li><Link to="/initiative">Initiatives</Link></li>
  <li><Link to="/events">Events</Link></li>
</ul>


          <input
            type="text"
            placeholder="Search..."
            className="nav_search"
          />
        </div>

      </div>
    </header>
  );
}

export default Navbar;
