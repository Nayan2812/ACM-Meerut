import acmLogo1 from "../assets/images/LogoACMmeerut.png";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar({ whiteBg = false }) {
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

  // Handle scrolling when route/hash changes
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          const headerOffset = 65;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/officers", label: "Officers" },
    { path: "/sub-society", label: "SIGs" },
    { path: "/news", label: "News" },
    { path: "/initiative", label: "Initiatives" },
    { path: "/events", label: "Events" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${
        (scrolled || whiteBg) ? "glass shadow-sm py-2" : "bg-transparent py-4"
      }`}
      style={{ transition: "all 0.3s ease-in-out" }}
    >
      <div className="container-fluid px-4 px-lg-5">
        <Link className="navbar-brand d-flex align-items-center gap-2 group" to="/">
          <img
            src={acmLogo1}
            alt="ACM Logo"
            className="d-inline-block align-top hover-lift"
            style={{
              height: scrolled ? 45 : 80,
              transition: "height 0.3s ease-in-out",
            }}
          />
          <div className="d-flex flex-column d-none d-sm-flex">
            <span
              className="fw-bold lh-1"
              style={{
                color: "var(--primary-color)",
                fontSize: scrolled ? "1rem" : "1.5rem",
                transition: "font-size 0.3s ease-in-out",
              }}
            >
              ACM Meerut
            </span>
            <span
              className="small fw-normal text-secondary text-uppercase"
              style={{
                fontSize: scrolled ? "0.65rem" : "0.9rem",
                letterSpacing: "1px",
                transition: "font-size 0.3s ease-in-out",
              }}
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
              const isActive = link.path.includes("#") 
                ? location.pathname === "/" && location.hash === link.path.replace("/", "")
                : location.pathname === link.path && !location.hash;
                
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
