import acmImg from "../assets/images/ACM merrut.png";
import acmIndia from "../assets/images/ACM_india_Council.png";

function AboutBlocks() {
  return (
    <section className="about_section layout_padding">
      <div className="container">

        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={acmImg} alt="" className="uniform-img" />
          </div>
          <div className="col-md-6">
            <h3>What is ACM Professional Chapter</h3>
            <p>
              ACM brings together computing educators, researchers, and
              professionals to inspire dialogue, share resources, and advance
              the computing profession globally.
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={acmIndia} alt="" className="uniform-img" />
          </div>
          <div className="col-md-6">
            <h3>ACM India Council</h3>
            <p>
              The ACM India Council supports Indian ACM members by promoting
              research, conferences, education, and professional growth.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default AboutBlocks;
