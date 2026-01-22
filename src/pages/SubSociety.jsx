import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroBg from "../assets/images/hero-bg.png";
import rashmiImg from "../assets/images/Rashmi.jpg";
import hodImg from "../assets/images/HOD.jpeg";

function SubSociety() {
  return (
    <>
      <Navbar />


      {/* Service Section */}
      <section className="service_section layout_padding">
        <div className="container">

          {/* Top Cards */}
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5>Cyber Guardians</h5>
                  <a href="/sub-society2" className="btn btn-primary">
                    Cyber Guardians
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5>
                    Next-Gen <span>Wearable Hub</span>
                  </h5>
                  <a href="/sub-society" className="btn btn-primary">
                    Next-Gen Wearable Hub
                  </a>
                </div>
              </div>
            </div>
          </div>

          <br /><br />

          <div className="heading_container heading_center">
            <h2>
              Next-Gen <span>Wearable Hub</span>
            </h2>
          </div>

          <h2>Next-Gen Wearable Hub</h2>
          <p align="justify">
            Next-Gen Wearables Hub is a community within the Meerut ACM Professional Chapter dedicated
            to the exploration, discussion, and advancement of wearable technology. It serves as a platform
            for individuals interested in the myriad applications and innovations that wearable technology
            can offer, allowing them to engage with like-minded peers, industry experts, and academics.
            The NextGen Wearables Hub resonates with the core values of ACM, encapsulating technical excellence,
            education, and technological advancement for positive societal impact. By spearheading a venture
            that blends ethical computing with real-world applications, we are not only pushing the envelope
            in the computing profession but also enhancing the visibility and accessibility of community-driven research.
          </p>

          <div className="btn-box">
            <a href="#">News</a>
            <a href="/wearable_hub_event">Event</a>
          </div>

          {/* TABLE 1 */}
          <div className="heading_container heading_center">
            <h3>Team Members List of Next-Gen Wearables Hub</h3>
          </div>

          <h4>Under Leadership</h4>
          <div className="card">
            <div className="card-body">
              <table className="table table-striped">
                <thead className="table-primary">
                  <tr>
                    <th>S/R No.</th>
                    <th>Team Members Name</th>
                    <th>Affiliation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>01</th>
                    <td>Aryan Chaudhary</td>
                    <td>
                      Chief Scientific Advisor Bio Tech Sphere Research, India <br />
                      Chair, Meerut ACM Chapter <br />
                      FIOASD, SE-(T&F), USTPC
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <br />

          {/* TABLE 2 */}
          <h4>Lead Team Members</h4>
          <div className="card">
            <div className="card-body">
              <table className="table table-striped">
                <thead className="table-primary">
                  <tr>
                    <th>S/R No.</th>
                    <th>Team Member Name</th>
                    <th>Affiliation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>01</th>
                    <td>Dr. Nikita Jain</td>
                    <td>
                      Professor & Head of Department <br />
                      Department of Computer Engineering <br />
                      Poornima College of Engineering
                    </td>
                  </tr>
                  <tr>
                    <th>02</th>
                    <td>Dr. Rashmi Singh</td>
                    <td>
                      Associate Professor <br />
                      Amity Institute of Applied Sciences <br />
                      Amity University Noida
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <br />

          {/* TABLE 3 */}
          <h4>Other Team Members</h4>
          <div className="card">
            <div className="card-body">
              <table className="table table-striped">
                <thead className="table-primary">
                  <tr>
                    <th>S/R</th>
                    <th>Name</th>
                    <th>Affiliation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>01</td><td>Dr. Neha Bhardwaj</td><td>Assistant Professor, Sharda University</td></tr>
                  <tr><td>02</td><td>Dr Tarun Maini</td><td>Professor, Galgotias University</td></tr>
                  <tr><td>03</td><td>Dr. Vrinda Sachdeva</td><td>Associate Professor, ITS Engineering College</td></tr>
                  <tr><td>04</td><td>Dr. Gaurav Agarwal</td><td>Associate Professor, Galgotias University</td></tr>
                  <tr><td>05</td><td>Dr. Sachi Gupta</td><td>Professor, GCET Greater Noida</td></tr>
                  <tr><td>06</td><td>Dr Ruchira Singla</td><td>Amity University Uttar Pradesh</td></tr>
                  <tr><td>07</td><td>Vidyapati Kumar</td><td>IIT Kharagpur</td></tr>
                  <tr><td>08</td><td>Dr. Saifullah Khalid</td><td>Airports Authority of India</td></tr>
                  <tr><td>09</td><td>Dr. Akhilesh Kumar Singh</td><td>KNIT Sultanpur</td></tr>
                  <tr><td>10</td><td>Dr Bhawna Singh</td><td>Govt College Bhadohi</td></tr>
                  <tr><td>11</td><td>Suvarna Pawar</td><td>MIT ADT University</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Importance */}
          <h2>Importance and Applications</h2>
          <p align="justify">
            Wearable technology is at the forefront of the Fourth Industrial Revolution,
            enabling healthcare monitoring, smart education, AR glasses and real-time data experiences.
          </p>

          {/* Commitment */}
          <h2>We are committed to:</h2>
          <p><strong>Awareness Campaigns:</strong> Tier-2 & Tier-3 college outreach</p>
          <p><strong>Workshops & Hackathons:</strong> Hands-on innovation events</p>
          <p><strong>Mentorship Programs:</strong> Student-industry collaboration</p>
          <p><strong>Collaborative Projects:</strong> Inter-college research culture</p>

          {/* Leadership Profiles */}
          <h3>
            Under the adept leadership of Aryan Chaudhary <br />
            Chair, Meerut ACM Chapter
          </h3>

          <div className="service-row">
            <div>
              <img src={rashmiImg} alt="Dr Rashmi" width="280" />
              <p><b>Dr. Rashmi Singh</b></p>
            </div>
            <div>
              <p>
                Dr. Rashmi Singh is an Associate Professor at Amity University with expertise
                in AI-ML, fuzzy theory and topology. She leads the Next-Gen Wearables Hub
                under Meerut ACM Professional Chapter.
              </p>
            </div>
          </div>

          <div className="service-row">
            <div>
              <img src={hodImg} alt="Dr Nikita" width="280" />
              <p><b>Dr. Nikita Jain</b></p>
            </div>
            <div>
              <p>
                Dr. Nikita Jain is Professor at Poornima College of Engineering with 15+ years
                experience in Machine Learning, Deep Learning and Healthcare Computing.
                She serves as Treasurer of Meerut ACM Chapter.
              </p>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default SubSociety;
