import { useState, useEffect } from "react";
import acmLogo from "../assets/images/ACM merrut.png";
import slider2 from "../assets/images/slider2.jpeg";
import { Link } from "react-router-dom";

function Hero() {
  const slides = [
    {
      title: "Meerut ACM Professional Chapter",
      subtitle: "Empowering Minds, Innovating Futures",
      text: "Join a vibrant community where brilliance meets boundless opportunities using the power of computing.",
      image: acmLogo,
      link: "https://www.linkedin.com/company/acm-meerut-professional-chapter/posts/?feedView=all",
      button: "Join Community",
      external: true,
    },
    {
      title: "Pushing Boundaries",
      subtitle: "Where Minds Meet Technology",
      text: "Collaborate, learn, and grow with professionals and students passionate about groundbreaking ideas.",
      image: slider2,
      link: "/about",
      button: "Learn More",
      external: false,
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      className="position-relative d-flex align-items-center justify-content-center overflow-hidden"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)",
        paddingTop: "80px",
      }}
    >
      {/* Decorative Background Elements */}
      <div
        className="position-absolute bg-primary rounded-circle"
        style={{
          width: "500px",
          height: "500px",
          top: "-150px",
          right: "-100px",
          opacity: "0.08",
          filter: "blur(80px)",
        }}
      ></div>
      <div
        className="position-absolute bg-info rounded-circle"
        style={{
          width: "400px",
          height: "400px",
          bottom: "50px",
          left: "-100px",
          opacity: "0.1",
          filter: "blur(60px)",
        }}
      ></div>

      <div className="container position-relative z-1">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`row align-items-center ${
              index === current ? "d-flex animate-fade-in" : "d-none"
            }`}
          >
            {/* Text Content */}
            <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
              <span
                className="d-inline-block py-1 px-3 rounded-pill bg-white text-primary fw-bold text-uppercase mb-3 shadow-sm"
                style={{ fontSize: "0.8rem", letterSpacing: "1px" }}
              >
                {slide.subtitle}
              </span>
              <h1 className="display-3 fw-bold text-gradient mb-4 lh-sm">
                {slide.title}
              </h1>
              <p
                className="lead text-secondary mb-5"
                style={{ maxWidth: "550px", margin: "0 auto 0 0" }}
              >
                {slide.text}
              </p>

              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                {slide.external ? (
                  <a
                    href={slide.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg hover-lift"
                  >
                    {slide.button}
                  </a>
                ) : (
                  <Link
                    to={slide.link}
                    className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow-lg hover-lift"
                  >
                    {slide.button}
                  </Link>
                )}
                <Link
                  to="/events"
                  className="btn btn-outline-primary btn-lg rounded-pill px-5 py-3 hover-lift"
                >
                  Explore Events
                </Link>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="position-relative">
                <div
                  className="position-absolute bg-white rounded-circle shadow-lg"
                  style={{
                    width: "80%",
                    height: "80%",
                    top: "10%",
                    left: "10%",
                    opacity: "0.5",
                    filter: "blur(30px)",
                    zIndex: -1,
                  }}
                ></div>
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="img-fluid animate-float rounded-4 shadow-lg border border-white"
                  style={{
                    maxHeight: "450px",
                    objectFit: "cover",
                    borderWidth: "8px",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 d-flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`border-0 rounded-circle transition-all ${
              index === current ? "bg-primary" : "bg-secondary opacity-25"
            }`}
            style={{
              width: index === current ? "24px" : "12px",
              height: "12px",
              padding: 0,
              transition: "width 0.3s ease",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
