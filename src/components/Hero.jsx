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
      {/* === Research-Themed Neural Network / Knowledge Graph Background === */}
      <svg
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0, pointerEvents: "none", opacity: 0.5 }}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 900"
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="rgba(0,86,179,0.35)" />
            <stop offset="100%" stopColor="rgba(0,86,179,0)" />
          </radialGradient>
          <radialGradient id="bgGlowTR" cx="90%" cy="5%" r="45%">
            <stop offset="0%"   stopColor="rgba(0,86,179,0.07)" />
            <stop offset="100%" stopColor="rgba(0,86,179,0)" />
          </radialGradient>
          <radialGradient id="bgGlowBL" cx="5%" cy="95%" r="40%">
            <stop offset="0%"   stopColor="rgba(56,189,248,0.06)" />
            <stop offset="100%" stopColor="rgba(56,189,248,0)" />
          </radialGradient>
        </defs>

        {/* Soft bg glows */}
        <rect width="1440" height="900" fill="url(#bgGlowTR)" />
        <rect width="1440" height="900" fill="url(#bgGlowBL)" />

        {/* === Neural Network Edges (connections between nodes) === */}
        {/* Input layer → Hidden layer 1 */}
        {[[80,180],[80,350],[80,520],[80,690]].map(([x1,y1]) =>
          [[280,150],[280,300],[280,450],[280,600],[280,750]].map(([x2,y2],j) => (
            <line key={`e1-${x1}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(0,86,179,0.07)" strokeWidth="1" />
          ))
        )}
        {/* Hidden layer 1 → Hidden layer 2 */}
        {[[280,150],[280,300],[280,450],[280,600],[280,750]].map(([x1,y1]) =>
          [[520,200],[520,380],[520,560],[520,740]].map(([x2,y2],j) => (
            <line key={`e2-${x1}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(0,86,179,0.07)" strokeWidth="1" />
          ))
        )}
        {/* Hidden layer 2 → Hidden layer 3 */}
        {[[520,200],[520,380],[520,560],[520,740]].map(([x1,y1]) =>
          [[760,170],[760,340],[760,510],[760,680]].map(([x2,y2],j) => (
            <line key={`e3-${x1}-${j}`} x1={x1} y1={y1} x2={x2} y2={y2}
              stroke="rgba(0,86,179,0.06)" strokeWidth="1" />
          ))
        )}
        {/* Right side: knowledge graph edges */}
        <line x1="1050" y1="200" x2="1200" y2="130" stroke="rgba(0,86,179,0.1)" strokeWidth="1.2" />
        <line x1="1050" y1="200" x2="1280" y2="300" stroke="rgba(0,86,179,0.1)" strokeWidth="1.2" />
        <line x1="1050" y1="200" x2="1150" y2="380" stroke="rgba(0,86,179,0.1)" strokeWidth="1.2" />
        <line x1="1050" y1="200" x2="950"  y2="340" stroke="rgba(0,86,179,0.09)" strokeWidth="1.2" />
        <line x1="1200" y1="130" x2="1350" y2="180" stroke="rgba(0,86,179,0.08)" strokeWidth="1"   />
        <line x1="1280" y1="300" x2="1380" y2="420" stroke="rgba(0,86,179,0.08)" strokeWidth="1"   />
        <line x1="1150" y1="380" x2="1050" y2="520" stroke="rgba(0,86,179,0.09)" strokeWidth="1.2" />
        <line x1="1050" y1="520" x2="950"  y2="620" stroke="rgba(0,86,179,0.09)" strokeWidth="1.2" />
        <line x1="1050" y1="520" x2="1200" y2="600" stroke="rgba(0,86,179,0.08)" strokeWidth="1"   />
        <line x1="950"  y1="340" x2="850"  y2="460" stroke="rgba(0,86,179,0.08)" strokeWidth="1"   />
        <line x1="1200" y1="600" x2="1320" y2="680" stroke="rgba(0,86,179,0.07)" strokeWidth="1"   />
        <line x1="950"  y1="620" x2="1050" y2="720" stroke="rgba(0,86,179,0.07)" strokeWidth="1"   />

        {/* === Neural Network Nodes === */}
        {/* Input layer */}
        {[180,350,520,690].map((cy,i) => (
          <g key={`in${i}`}>
            <circle cx="80" cy={cy} r="14" fill="rgba(0,86,179,0.08)" stroke="rgba(0,86,179,0.2)" strokeWidth="1.5" />
            <circle cx="80" cy={cy} r="6"  fill="rgba(0,86,179,0.25)" />
          </g>
        ))}
        {/* Hidden layer 1 */}
        {[150,300,450,600,750].map((cy,i) => (
          <g key={`h1${i}`}>
            <circle cx="280" cy={cy} r="12" fill="rgba(0,86,179,0.08)" stroke="rgba(0,86,179,0.18)" strokeWidth="1.5" />
            <circle cx="280" cy={cy} r="5"  fill="rgba(0,86,179,0.22)" />
          </g>
        ))}
        {/* Hidden layer 2 */}
        {[200,380,560,740].map((cy,i) => (
          <g key={`h2${i}`}>
            <circle cx="520" cy={cy} r="12" fill="rgba(0,86,179,0.08)" stroke="rgba(0,86,179,0.18)" strokeWidth="1.5" />
            <circle cx="520" cy={cy} r="5"  fill="rgba(0,86,179,0.22)" />
          </g>
        ))}
        {/* Hidden layer 3 */}
        {[170,340,510,680].map((cy,i) => (
          <g key={`h3${i}`}>
            <circle cx="760" cy={cy} r="11" fill="rgba(0,86,179,0.07)" stroke="rgba(0,86,179,0.15)" strokeWidth="1.5" />
            <circle cx="760" cy={cy} r="4"  fill="rgba(0,86,179,0.2)" />
          </g>
        ))}

        {/* Knowledge graph nodes — right side */}
        {[
          [1050,200,18],[1200,130,12],[1280,300,12],[1150,380,14],
          [950,340,11],[1350,180,9],[1380,420,9],[1050,520,16],
          [950,620,11],[1200,600,12],[1320,680,9],[1050,720,10],[850,460,10],
        ].map(([cx,cy,r],i) => (
          <g key={`kg${i}`}>
            <circle cx={cx} cy={cy} r={r+6} fill="url(#nodeGlow)" />
            <circle cx={cx} cy={cy} r={r}   fill="rgba(0,86,179,0.1)"  stroke="rgba(0,86,179,0.22)" strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r={r/2.5} fill="rgba(0,86,179,0.28)" />
          </g>
        ))}

        {/* === Faint Research / Math Symbols === */}
        {[
          [170, 80,  "σ",  "1.6rem"],
          [440, 820, "Σ",  "1.4rem"],
          [900, 60,  "∇",  "1.5rem"],
          [1380,820, "π",  "1.3rem"],
          [650, 820, "∞",  "1.5rem"],
          [30,  820, "λ",  "1.4rem"],
          [1400,60,  "θ",  "1.4rem"],
          [750, 60,  "μ",  "1.3rem"],
        ].map(([x, y, sym, size], i) => (
          <text key={`sym${i}`} x={x} y={y} fontSize={size}
            fill="rgba(0,86,179,0.1)" fontFamily="Georgia, serif" fontStyle="italic"
            textAnchor="middle">
            {sym}
          </text>
        ))}
      </svg>

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
