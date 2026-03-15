import acmImg from "../assets/images/ACM merrut.png";
import acmIndia from "../assets/images/ACM_india_Council.png";
import { useEffect, useRef } from "react";

function AboutBlocks() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const content = [
    {
      title: "What is ACM Professional Chapter",
      text: "ACM brings together computing educators, researchers, and professionals to inspire dialogue, share resources, and address the field's challenges. As the world’s largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. Founded at the dawn of the computer age, ACM’s reach extends to every part of the globe, fostering networking opportunities that strengthen ties within and across countries.",
      image: acmImg,
      reverse: false,
    },
    {
      title: "ACM India Council",
      text: "The ACM India Council was created by ACM to recognize and support Indian ACM members and activities. It is an effort aimed at increasing the level and visibility of ACM activities across India. The activities involve both academia and industry in computing, including research, organization of high-quality computing conferences, advancing Computer Science education, and awards to recognize achievement.",
      image: acmIndia,
      reverse: true,
    },
  ];

  return (
    <section className="py-6 bg-white overflow-hidden" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="text-center mb-5">
          <span className="d-inline-block py-1 px-3 rounded-pill bg-light text-primary fw-bold text-uppercase mb-3 shadow-sm" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
            Global Vision
          </span>
          <h2 className="display-4 fw-bold">About Our Chapter</h2>
        </div>

        {content.map((item, index) => (
          <div
            key={index}
            ref={(el) => (sectionsRef.current[index] = el)}
            className={`row align-items-center mb-6`} // Removed opacity-0 for immediate visibility
            style={{ marginBottom: "5rem" }}
          >
            <div
              className={`col-lg-6 ${
                item.reverse ? "order-lg-2" : "order-lg-1"
              }`}
            >
              <div className="position-relative p-4">
                <div
                  className="position-absolute bg-primary rounded-4 opacity-10"
                  style={{
                    top: "0",
                    left: "50%",
                    width: "380px",
                    height: "100%",
                    transform: "translateX(-50%) rotate(-3deg)",
                    zIndex: 0,
                  }}
                ></div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded-4 shadow-lg position-relative z-1 hover-lift"
                  style={{ maxWidth: "360px", width: "100%", display: "block", margin: "0 auto", transition: "all 0.3s ease" }}
                />
              </div>
            </div>

            <div
              className={`col-lg-6 ${
                item.reverse ? "order-lg-1" : "order-lg-2"
              } mt-4 mt-lg-0`}
            >
              <div className="p-4">
                <h3 className="fw-bold mb-4 position-relative d-inline-block display-6">
                  {item.title}
                  <span
                    className="position-absolute bottom-0 start-0 w-25 bg-primary"
                    style={{ height: "4px", borderRadius: "2px" }}
                  ></span>
                </h3>
                <p
                  className="lead text-secondary"
                  style={{ textAlign: "justify", fontSize: "1.1rem" }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutBlocks;
