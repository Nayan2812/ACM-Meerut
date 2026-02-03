import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-light pt-5 pb-3 position-relative overflow-hidden"
      style={{
        backgroundColor: "#0f172a", // Darker slate blue
        borderTop: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Decorative background slightly visible */}
      <div
        className="position-absolute rounded-circle bg-primary"
        style={{
          width: "300px",
          height: "300px",
          top: "-150px",
          right: "-150px",
          opacity: "0.1",
          filter: "blur(80px)",
        }}
      ></div>

      <div className="container position-relative z-1">
        <div className="row g-5">
          {/* Brand & Approach */}
          <div className="col-lg-4">
            <h5 className="text-white fw-bold mb-4 d-flex align-items-center gap-2">
              <span className="text-primary">ACM</span> Meerut
            </h5>
            <p className="text-secondary mb-4" style={{ lineHeight: "1.7" }}>
              Empowering Minds, Innovating Futures. The Meerut ACM Professional
              Chapter is dedicated to advancing the art, science, engineering, and
              application of information technology.
            </p>
            <div className="d-flex gap-3">
              <a
                href="https://www.linkedin.com/company/acm-meerut-professional-chapter/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center hover-lift"
                style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                aria-label="LinkedIn"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="mailto:acmchaptermeerut@gmail.com"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center hover-lift"
                style={{ width: "40px", height: "40px", transition: "all 0.3s" }}
                aria-label="Email"
              >
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 col-lg-4 ps-lg-5">
            <h6 className="text-white fw-bold text-uppercase mb-4 letter-spacing-1">
              Quick Links
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About Us" },
                { path: "/events", label: "Events" },
                { path: "/officers", label: "Officers" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary text-decoration-none transition-all d-inline-block hover-translate"
                    style={{ transition: "all 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--primary-color)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                  >
                    <i className="fa fa-angle-right me-2 text-primary opacity-50"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Initiatives */}
          <div className="col-md-6 col-lg-4">
            <h6 className="text-white fw-bold text-uppercase mb-4 letter-spacing-1">
              More Info
            </h6>
            <ul className="list-unstyled d-flex flex-column gap-3">
              {[
                { path: "/sub-society", label: "Special Interest Groups" },
                { path: "/initiative", label: "Our Initiatives" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-secondary text-decoration-none transition-all d-inline-block"
                     onMouseEnter={(e) => (e.target.style.color = "var(--primary-color)")}
                     onMouseLeave={(e) => (e.target.style.color = "var(--text-secondary)")}
                  >
                     <i className="fa fa-angle-right me-2 text-primary opacity-50"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
             <div className="mt-4">
              <p className="text-secondary small mb-1">Contact Email:</p>
              <a href="mailto:acmchaptermeerut@gmail.com" className="text-white text-decoration-none fw-medium">
                acmchaptermeerut@gmail.com
              </a>
            </div>
          </div>
        </div>

        <hr className="my-5 border-secondary opacity-25" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-secondary small">
              &copy; {new Date().getFullYear()} <span className="text-white">ACM Meerut Chapter</span>. All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
             <p className="mb-0 text-secondary small">
              Designed by <span className="text-white">ACM Technical Team</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
