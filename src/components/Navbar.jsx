import acmLogo1 from "../assets/images/LogoACMmeerut.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/officers", label: "Officers" },
    { path: "/sub-society", label: "SIGs" },
    { path: "/initiative", label: "Initiatives" },
    { path: "/events", label: "Events" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        scrolled ? "glass shadow-sm py-2" : "bg-transparent py-4"
      }`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 group" to="/">
          <img
            src={acmLogo1}
            alt="ACM Logo"
            height="50"
            className="d-inline-block align-top hover-lift"
          />
          <div className="d-flex flex-column d-none d-sm-flex">
            <span
              className="fw-bold lh-1"
              style={{ color: "var(--primary-color)", fontSize: "1.1rem" }}
            >
              ACM Meerut
            </span>
            <span
              className="small fw-normal text-secondary text-uppercase"
              style={{ fontSize: "0.7rem", letterSpacing: "1px" }}
            >
              Professional Chapter
            </span>
          </div>
        </Link>
        
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav align-items-center gap-1 gap-lg-3 pt-3 pt-lg-0">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <li className="nav-item w-100 w-lg-auto" key={link.path}>
                  <Link
                    className="nav-link fw-medium px-3 py-2 rounded-pill text-center d-block w-100"
                    to={link.path}
                    onClick={() => setIsOpen(false)} // Close menu on click mobile
                    style={{
                      color: isActive ? "#fff" : "var(--text-secondary)",
                      background: isActive
                        ? "var(--primary-color)"
                        : "transparent",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--primary-color)";
                        e.currentTarget.style.background = "rgba(0, 86, 179, 0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = "var(--text-secondary)";
                        e.currentTarget.style.background = "transparent";
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="nav-item ms-lg-2 mt-3 mt-lg-0">
              <a
                href="https://www.linkedin.com/company/acm-meerut-professional-chapter/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary rounded-pill px-4 py-2 hover-lift fw-semibold"
                style={{ fontSize: '0.9rem' }}
              >
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
