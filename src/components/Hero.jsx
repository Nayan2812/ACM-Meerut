import { useState, useEffect } from "react";
import heroBg from "../assets/images/hero-bg.png";
import acmLogo from "../assets/images/ACM merrut.png";
import slider2 from "../assets/images/slider2.jpeg";

function Hero() {

  const slides = [
    {
      title: "MEERUT ACM'S PROFESSIONAL CHAPTER",
      text: "Empowering Minds, Innovating Futures.",
      image: acmLogo,
      link: "https://www.linkedin.com/company/acm-meerut-professional-chapter/posts/?feedView=all",
      button: "LinkedIn"
    },
    {
      title: "MEERUT ACM'S PROFESSIONAL CHAPTER",
      text: "A community where minds meet technology for groundbreaking ideas.",
      image: slider2,
      link: "#about",
      button: "Read More"
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero_area">

      {/* Background */}
      <div className="hero_bg_box">
        <div className="bg_img_box">
          <img src={heroBg} alt="" />
        </div>
      </div>

      {/* Slider */}
      <section className="slider_section">
  <div className="slider_wrapper">
    <div
      className="slider_track"
      style={{ transform: `translateX(-${current * 100}%)` }}
    >
      {slides.map((slide, index) => (
        <div className="slide" key={index}>
          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <div className="detail-box">
                  <h1>
                    MEERUT ACM'S <br />
                    PROFESSIONAL <br />
                    CHAPTER
                  </h1>
                  <p>{slide.text}</p>
                  <a href={slide.link} className="btn1">
                    {slide.button}
                  </a>
                </div>
              </div>

              <div className="col-md-6">
                <div className="img-box-1">
                  <img src={slide.image} alt="" />
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Dots */}
  <div className="slider_dots">
    {slides.map((_, index) => (
      <span
        key={index}
        className={current === index ? "dot active" : "dot"}
        onClick={() => setCurrent(index)}
      ></span>
    ))}
  </div>
</section>


    </div>
  );
}

export default Hero;
