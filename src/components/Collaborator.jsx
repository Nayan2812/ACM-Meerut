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
    <section className="py-6 bg-light position-relative overflow-hidden" ref={sectionRef}>
       {/* Background */}
       <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-5" style={{zIndex:0}}></div>

      <div className="container position-relative z-1">
        <div className="text-center mb-5">
           <h2 className="display-5 fw-bold">
            Our <span className="text-primary">Collaborations</span>
          </h2>
          <p className="text-secondary">Building bridges for a stronger technical future</p>
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
