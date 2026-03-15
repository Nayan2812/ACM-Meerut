import client1 from "../assets/images/client1.jpg";
import { useEffect, useRef } from "react";

function Collaborator() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <section className="py-6 position-relative overflow-hidden" ref={sectionRef} style={{ paddingTop: '2rem', paddingBottom: '4rem', background: '#fff' }}>
      {/* Subtle connected-nodes background pattern */}
      <svg
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0, opacity: 0.06 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="collab-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Nodes */}
            <circle cx="20" cy="20" r="5" fill="#0056b3" />
            <circle cx="100" cy="40" r="4" fill="#00b4d8" />
            <circle cx="180" cy="20" r="5" fill="#0056b3" />
            <circle cx="60" cy="100" r="4" fill="#00b4d8" />
            <circle cx="140" cy="100" r="5" fill="#0056b3" />
            <circle cx="20" cy="180" r="4" fill="#00b4d8" />
            <circle cx="100" cy="160" r="5" fill="#0056b3" />
            <circle cx="180" cy="180" r="4" fill="#00b4d8" />
            {/* Connecting lines */}
            <line x1="20" y1="20" x2="100" y2="40" stroke="#0056b3" strokeWidth="1" />
            <line x1="100" y1="40" x2="180" y2="20" stroke="#00b4d8" strokeWidth="1" />
            <line x1="20" y1="20" x2="60" y2="100" stroke="#00b4d8" strokeWidth="1" />
            <line x1="100" y1="40" x2="140" y2="100" stroke="#0056b3" strokeWidth="1" />
            <line x1="180" y1="20" x2="140" y2="100" stroke="#00b4d8" strokeWidth="1" />
            <line x1="60" y1="100" x2="100" y2="160" stroke="#0056b3" strokeWidth="1" />
            <line x1="140" y1="100" x2="100" y2="160" stroke="#00b4d8" strokeWidth="1" />
            <line x1="60" y1="100" x2="20" y2="180" stroke="#0056b3" strokeWidth="1" />
            <line x1="100" y1="160" x2="180" y2="180" stroke="#0056b3" strokeWidth="1" />
            <line x1="140" y1="100" x2="180" y2="180" stroke="#00b4d8" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#collab-pattern)" />
      </svg>

      <div className="container position-relative z-1">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-4 animate-slide-up">
            <span style={{ fontSize: '1em', marginRight: '0.3em' }}>Our</span>
            <span className="text-gradient" style={{ fontSize: '1.15em' }}>Collaborations</span>
          </h2>
          <p className="text-secondary fst-italic fw-light animate-slide-up" style={{
            fontSize: '1.15rem',
            maxWidth: '600px',
            margin: '0 auto',
            fontFamily: 'Georgia, "Times New Roman", serif',
            lineHeight: '1.8',
            letterSpacing: '0.3px',
            animationDelay: '0.4s'
          }}>
            Building bridges for a stronger technical future
          </p>
        </div>

        <div className="card glass border-0 shadow-lg mx-auto overflow-hidden text-center hover-lift" style={{ maxWidth: "900px" }}>
          <div className="row g-0 align-items-center">
            <div className="col-md-5">
              <div className="h-100 position-relative overflow-hidden">
                <img
                  src={client1}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt="Galgotias University"
                  style={{ minHeight: "300px" }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-dark bg-opacity-75 text-white">
                  <small className="fw-bold text-uppercase ls-1">Joint Initiative</small>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="card-body p-4 p-lg-5 text-start">
                <h3 className="card-title fw-bold text-dark mb-2">Galgotias University</h3>
                <h5 className="text-primary fw-semibold mb-4 text-uppercase small letter-spacing-2">ACM Student Chapter</h5>
                <p className="card-text text-secondary mb-4">
                  Galgotias University ACM Student Chapter and Meerut ACM Professional Chapter have joined hands to build a strong computing community focused on innovation, collaboration, and learning.
                </p>
                <div className="d-flex align-items-center gap-2 text-dark fw-bold small">
                  <i className="fa fa-handshake-o text-success fa-lg"></i>
                  <span>Strategic Partnership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collaborator;
