import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";

function Initiative() {
  const initiatives = [
    {
      title: "Establishment of Sub-Society",
      text: "NextGen Wearables Hub is a flagship initiative to explore wearable technology across healthcare, fitness, and lifestyle domains, fostering innovation and collaboration.",
      img: w1
    },
    {
      title: "Ambassadors for ACM Program",
      text: "Members are encouraged to spread ACM awareness by inviting peers to join ACM through referral programs with discounted membership benefits.",
      img: w2
    },
    {
      title: "Rewards for Ambassadors",
      text: "Earn exciting gifts on successful referrals, monthly recognition, and a grand prize opportunity for top ambassadors. Grow the community, earn rewards.",
      img: w3
    }
  ];

  return (
    <>
      <Navbar />

      <div className="bg-light min-vh-100">
        <section className="py-5 bg-white text-center">
            <div className="container pt-5">
                <h2 className="display-4 fw-bold mb-3">Our <span className="text-primary">Initiatives</span></h2>
                <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                    Initiative Undertaken By Meerut ACM Professional Chapter
                </p>
            </div>
        </section>

        <section className="py-5">
          <div className="container">
            <div className="row g-4 justify-content-center">
              {initiatives.map((item, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-up text-center p-4">
                    <div className="mx-auto mb-4 p-3 bg-light rounded-circle" style={{ width: "100px", height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={item.img} alt="" className="img-fluid" style={{ maxWidth: "60px" }} />
                    </div>
                    <div className="card-body p-0">
                      <h4 className="card-title fw-bold mb-3">{item.title}</h4>
                      <p className="card-text text-secondary">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-center gap-3 mt-5 flex-wrap">
              <a
                href="https://services.acm.org/public/mgm/subpages/referral-form.cfm"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-lg rounded-pill px-5 shadow-sm hover-scale"
              >
                Referral Form Link
              </a>
              <a
                href="https://www.acm.org/membership/ambassadors-for-acm"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-primary btn-lg rounded-pill px-5 shadow-sm hover-scale"
              >
                Full Program Details
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Initiative;
