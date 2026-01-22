import press1 from "../assets/images/Rare_Disease_Research_PressRelease_Image.jpeg";
import press2 from "../assets/images/ACM_DORA_IMG.jpeg";

function PressReleases() {
  return (
    <section className="press_section">
      <div className="press_container">

        <h2 className="press_heading">
          Press <span>Releases</span>
        </h2>

        <div className="press_grid">
          <div className="press_card">
            <img src={press1} alt="Press Release 1" />
          </div>

          <div className="press_card">
            <img src={press2} alt="Press Release 2" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default PressReleases;
