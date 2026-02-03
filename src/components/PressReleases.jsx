import press1 from "../assets/images/Rare_Disease_Research_PressRelease_Image.jpeg";
import press2 from "../assets/images/ACM_DORA_IMG.jpeg";

function PressReleases() {
  const images = [press1, press2];

  return (
    <section className="py-6 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5">
            Press <span className="text-gradient">Releases</span>
          </h2>
          <p className="text-secondary">Recent updates and announcements from ACM Meerut</p>
        </div>

        <div className="row g-4 justify-content-center">
          {images.map((img, index) => (
            <div className="col-md-6" key={index}>
              <div className="rounded-4 overflow-hidden shadow-lg position-relative group">
                <div className="overflow-hidden">
                   <img 
                    src={img} 
                    alt={`Press Release ${index + 1}`} 
                    className="img-fluid w-100 hover-scale transition-transform duration-500" 
                    style={{ 
                      transition: "transform 0.5s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                  />
                </div>
                <div className="position-absolute bottom-0 start-0 w-100 bg-gradient-to-t from-black via-black/50 to-transparent p-4 opacity-0 group-hover-opacity-100 transition-opacity">
                   {/* Overlay content could go here if needed later */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PressReleases;
