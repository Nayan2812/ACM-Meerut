import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroBg from "../assets/images/hero-bg.png";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";

function Initiative() {
  return (
    <>
      <Navbar />

      

      {/* Initiative Section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Initiative Undertaken By{" "}
              <span>Meerut ACM Professional Chapter</span>
            </h2>
          </div>

          <div className="why_container">

            {/* Box 1 */}
            <div className="box">
              <div className="img-box">
                <img src={w1} alt="" />
              </div>
              <div className="detail-box">
                <h5>Establishment of Sub-Society</h5>
                <p>
                  NextGen Wearables Hub is a flagship initiative to explore wearable
                  technology across healthcare, fitness, and lifestyle domains,
                  fostering innovation and collaboration.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="box">
              <div className="img-box">
                <img src={w2} alt="" />
              </div>
              <div className="detail-box">
                <h5>Ambassadors for ACM Program</h5>
                <p>
                  Members are encouraged to spread ACM awareness by inviting
                  peers to join ACM through referral programs with discounted
                  membership benefits.
                </p>
              </div>
            </div>

            {/* Box 3 */}
            <div className="box">
              <div className="img-box">
                <img src={w3} alt="" />
              </div>
              <div className="detail-box">
                <h5>Rewards for Ambassadors</h5>
                <p>
                  Earn exciting gifts on successful referrals, monthly
                  recognition, and a grand prize opportunity for top
                  ambassadors. Grow the community, earn rewards.
                </p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="btn-box">
            <a
              href="https://services.acm.org/public/mgm/subpages/referral-form.cfm"
              target="_blank"
              rel="noreferrer"
            >
              Referral Form Link
            </a>
          </div>

          <div className="btn-box">
            <a
              href="https://www.acm.org/membership/ambassadors-for-acm"
              target="_blank"
              rel="noreferrer"
            >
              Full Program Details
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Initiative;
