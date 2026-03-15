import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import rashmiImg from "../assets/images/Rashmi.jpg";
import hodImg from "../assets/images/HOD.jpeg";
import pic1 from "../assets/images/pngpic1.png";
import { Link } from "react-router-dom";

function SubSociety() {
  const committments = [
    {
      title: "Awareness Campaigns",
      desc: "Conduct awareness campaigns in Tier 2 and Tier 3 colleges to inform students about the potential of wearable technology and the opportunities the Wearable EIG offers.",
      icon: "fa-bullhorn",
    },
    {
      title: "Workshops & Hackathons",
      desc: "Organizing workshops, hackathons, and interactive sessions to provide hands-on experience and to ignite curiosity and innovation among students.",
      icon: "fa-laptop",
    },
    {
      title: "Mentorship Programs",
      desc: "Establish mentorship programs connecting students with industry professionals and academics to guide them in their wearable technology projects and career aspirations.",
      icon: "fa-users",
    },
    {
      title: "Collaborative Projects",
      desc: "Encouraging collaborative projects between colleges and the Wearable EIG to provide practical exposure and foster a culture of interdisciplinary learning and innovation.",
      icon: "fa-cogs",
    },
  ];

  const teamLead = [
    {
      name: "Dr. Nikita Jain",
      role: "Professor & Head of Department",
      affil: "Department of Computer Engineering, Poornima College of Engineering",
    },
    {
      name: "Dr. Rashmi Singh",
      role: "Associate Professor",
      affil: "Amity Institute of Applied Sciences, Amity University Noida",
    },
  ];

  const members = [
    { name: "Dr. Neha Bhardwaj", affil: "Assistant Professor, Sharda University" },
    { name: "Dr. Tarun Maini", affil: "Professor, Galgotias University" },
    { name: "Dr. Vrinda Sachdeva", affil: "Associate Professor, ITS Engineering College" },
    { name: "Dr. Gaurav Agarwal", affil: "Associate Professor, Galgotias University" },
    { name: "Dr. Sachi Gupta", affil: "Professor, GCET Greater Noida" },
    { name: "Dr. Ruchira Singla", affil: "Amity University Uttar Pradesh" },
    { name: "Vidyapati Kumar", affil: "IIT Kharagpur" },
    { name: "Dr. Saifullah Khalid", affil: "Airports Authority of India" },
    { name: "Dr. Akhilesh Kumar Singh", affil: "KNIT Sultanpur" },
    { name: "Dr. Bhawna Singh", affil: "Govt College Bhadohi" },
    { name: "Suvarna Pawar", affil: "MIT ADT University" },
  ];

  return (
    <>
      <Navbar whiteBg={true} />

      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center justify-content-center overflow-hidden"
        style={{
          minHeight: "75vh",
          paddingTop: "100px",
          paddingBottom: "120px",
          background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
        }}
      >
        {/* Animated Background SVG */}
        <svg
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ zIndex: 0, opacity: 0.15, pointerEvents: "none" }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="sig-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1.5" fill="#64ffda" />
                <path d="M50 0 L50 100 M0 50 L100 50" stroke="#ccd6f6" strokeWidth="0.5" strokeOpacity="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#sig-pattern)" />
        </svg>

        <div className="container text-center position-relative z-1">
          <span className="d-inline-block py-2 px-4 rounded-pill mb-4 border shadow-sm" style={{ backgroundColor: 'rgba(100, 255, 218, 0.1)', color: '#64ffda', borderColor: 'rgba(100, 255, 218, 0.3)', letterSpacing: '2px', fontSize: '0.9rem', fontWeight: 'bold' }}>
            COMMUNITIES
          </span>
          <h1 className="display-2 fw-bold mb-4 text-white animate-slide-up" style={{ letterSpacing: '-1px' }}>
            Special Interest <span style={{ color: '#64ffda' }}>Groups</span>
          </h1>
          <p
            className="lead text-white opacity-75 animate-slide-up"
            style={{ animationDelay: "0.2s", maxWidth: "800px", margin: "0 auto", fontSize: "1.25rem", lineHeight: "1.8" }}
          >
            Fostering niche communities to drive innovation, advanced research, and hands-on technical skills in specialized fields.
          </p>
        </div>
      </section>

      {/* SIG Selector Cards */}
      <section className="position-relative z-2 pb-5" style={{ marginTop: "-100px" }}>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Active Hub */}
            <div className="col-md-6 col-lg-5">
              <Link to="/sub-society" className="text-decoration-none h-100 d-block">
                <div className="card h-100 border-0 shadow-lg bg-white overflow-hidden p-5 rounded-4 transition-all hover-lift" style={{ transform: 'translateY(0)' }}>
                   <div className="mb-4 d-flex justify-content-center">
                     <div className="rounded-circle d-flex align-items-center justify-content-center bg-primary bg-opacity-10 text-primary" style={{ width: '90px', height: '90px', transition: 'all 0.3s' }}>
                        <i className="fa fa-connectdevelop fa-3x"></i>
                     </div>
                   </div>
                  <h3 className="fw-bold text-dark text-center mb-3">Next-Gen Wearable Hub</h3>
                  <p className="text-secondary text-center mb-4" style={{ lineHeight: '1.6' }}>
                    Exploring the future of wearable technology and human-computer interaction through practical projects and focused research.
                  </p>
                  <div className="text-center mt-auto">
                    <span className="btn btn-primary rounded-pill px-5 py-2 fw-medium shadow-sm w-100">Explore Community</span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Coming Soon Hub */}
            <div className="col-md-6 col-lg-5">
              <div className="card h-100 border-0 shadow-sm bg-white overflow-hidden p-5 rounded-4 position-relative" style={{ opacity: 0.9 }}>
                <div className="position-absolute top-0 end-0 m-3">
                  <span className="badge bg-secondary text-uppercase px-3 py-2 rounded-pill shadow-sm" style={{ letterSpacing: '1px' }}>Coming Soon</span>
                </div>
                <div className="mb-4 d-flex justify-content-center">
                  <div className="rounded-circle d-flex align-items-center justify-content-center bg-secondary bg-opacity-10 text-secondary" style={{ width: '90px', height: '90px' }}>
                      <i className="fa fa-shield fa-3x"></i>
                  </div>
                </div>
                <h3 className="fw-bold text-dark text-center mb-3">Cyber Guardians</h3>
                <p className="text-secondary text-center mb-4" style={{ lineHeight: '1.6' }}>
                  A specialized team dedicated to securing the digital frontier, engaging in ethical hacking, and spreading cybersecurity awareness.
                </p>
                <div className="text-center mt-auto">
                  <button className="btn btn-outline-secondary rounded-pill px-5 py-2 fw-medium w-100 disabled" style={{ cursor: 'not-allowed' }}>Launching Soon</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wearable Hub Content */}
      <section className="py-6 position-relative overflow-hidden bg-light">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <span className="d-inline-block py-1 px-3 rounded-pill bg-primary bg-opacity-10 text-primary fw-bold text-uppercase mb-3" style={{ letterSpacing: '2px', fontSize: '0.85rem' }}>Focus Area</span>
              <h2 className="display-4 fw-bold mb-4">Next-Gen Wearable Hub</h2>
              <div className="d-flex justify-content-center mb-4">
                <div style={{ width: '80px', height: '4px', background: 'var(--primary-color)', borderRadius: '2px' }}></div>
              </div>
              <p className="lead text-secondary mb-4" style={{ textAlign: "justify", lineHeight: "1.8" }}>
                Next-Gen Wearables Hub is a community within the Meerut ACM Professional Chapter dedicated to the exploration, discussion, and advancement of wearable technology. It serves as a platform for individuals interested in the myriad applications and innovations that wearable technology can offer, allowing them to engage with like-minded peers, industry experts, and academics.
              </p>
              <p className="text-secondary" style={{ textAlign: "justify", lineHeight: "1.7" }}>
                The NextGen Wearables Hub resonates with the core values of ACM, encapsulating technical excellence, education, and technological advancement for positive societal impact. By spearheading a venture that blends ethical computing with real-world applications, we are not only pushing the envelope in the computing profession but also enhancing the visibility and accessibility of community-driven research.
              </p>
            </div>
          </div>

          {/* Importance */}
          <div className="row mb-6">
            <div className="col-lg-10 mx-auto">
               <div className="bg-white p-5 rounded-4 shadow-sm border-start border-primary border-5 position-relative overflow-hidden">
                 <div className="position-absolute top-0 end-0 opacity-10 p-4">
                    <i className="fa fa-quote-right fa-4x text-primary"></i>
                 </div>
                 <h3 className="fw-bold mb-3 h4 text-dark">Importance & Applications</h3>
                 <p className="text-secondary mb-0 fs-5" style={{ lineHeight: "1.7" }}>
                   Wearable technology is at the forefront of the Fourth Industrial Revolution, enabling healthcare monitoring, smart education, AR glasses and real-time data experiences. It bridges the physical and digital worlds, promoting healthier lifestyles and enriched educational experiences.
                 </p>
               </div>
            </div>
          </div>

          {/* Commitments */}
          <div className="mb-6 pt-4">
            <div className="text-center mb-5">
              <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '2px' }}>Our Mission</span>
              <h3 className="fw-bold mt-2 display-6">Our Commitments</h3>
            </div>
            <div className="row g-4">
              {committments.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex align-items-start gap-4 p-4 bg-white rounded-4 shadow-sm h-100 transition-all hover-lift border border-light group">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm" style={{width: "65px", height: "65px", transition: 'transform 0.3s ease'}}>
                      <i className={`fa ${item.icon} fa-xl`}></i>
                    </div>
                    <div>
                      <h5 className="fw-bold text-dark mb-2">{item.title}</h5>
                      <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6 border-secondary opacity-10" />

          {/* Team Section */}
          <div className="text-center mb-5">
            <span className="text-primary fw-bold text-uppercase small" style={{ letterSpacing: '2px' }}>The Minds Behind</span>
            <h2 className="fw-bold mt-2 display-5 mb-3">Leadership & Team</h2>
            <div className="d-flex justify-content-center">
              <div style={{ width: '60px', height: '4px', background: 'var(--primary-color)', borderRadius: '2px' }}></div>
            </div>
          </div>

          <div className="row g-4 mt-2 mb-5 justify-content-center">
            {/* Leadership Profile 1 */}
            <div className="col-lg-10">
              <div className="bg-white p-4 p-md-5 rounded-4 shadow-sm border border-light text-center">
                 <span className="text-primary fw-bold text-uppercase small mb-3 d-block" style={{ letterSpacing: '2px' }}>Under the Leadership of</span>
                 <img src={pic1} alt="Aryan Chaudhary" className="rounded-circle object-fit-cover shadow-sm border border-4 border-white mb-3" style={{width: "140px", height: "140px", objectPosition: "top"}} />
                 <h3 className="fw-bold display-6 mb-2">Aryan Chaudhary</h3>
                 <p className="text-dark fs-5 fw-medium mb-3">Chief Scientific Advisor Bio Tech Sphere Research, India</p>
                 <div className="mb-4">
                    <span className="badge bg-primary px-4 py-2 rounded-pill fs-6 shadow-sm">Chair, Meerut ACM Chapter</span>
                 </div>
                 <p className="text-secondary fw-medium mx-auto" style={{ maxWidth: "600px", letterSpacing: '1px' }}>FIOASD, SE-(T&F), USTPC</p>
              </div>
            </div>
          </div>

          {/* Detailed Profiles */}
          <div className="row g-4 mb-6 mt-3">
              <div className="col-md-6">
                <div className="d-flex flex-column flex-xl-row gap-4 align-items-center align-items-xl-start bg-white p-4 p-xl-5 rounded-4 shadow-sm h-100 border border-light hover-lift transition-all">
                    <img src={rashmiImg} alt="Dr. Rashmi Singh" className="rounded-circle object-fit-cover shadow-sm border border-4 border-white" style={{width: "140px", height: "140px"}} />
                    <div className="text-center text-xl-start">
                       <h4 className="fw-bold mb-1 text-dark">Dr. Rashmi Singh</h4>
                       <p className="text-primary fw-semibold mb-3">Associate Professor, Amity University</p>
                       <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                         Expertise in AI-ML, fuzzy theory and topology. Leads the Next-Gen Wearables Hub. 19+ years of teaching experience and active research since 2001.
                       </p>
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex flex-column flex-xl-row gap-4 align-items-center align-items-xl-start bg-white p-4 p-xl-5 rounded-4 shadow-sm h-100 border border-light hover-lift transition-all">
                    <img src={hodImg} alt="Dr. Nikita Jain" className="rounded-circle object-fit-cover shadow-sm border border-4 border-white" style={{width: "140px", height: "140px"}} />
                    <div className="text-center text-xl-start">
                       <h4 className="fw-bold mb-1 text-dark">Dr. Nikita Jain</h4>
                       <p className="text-primary fw-semibold mb-3">Professor, Poornima College of Engineering</p>
                       <p className="text-secondary mb-0" style={{ lineHeight: '1.6' }}>
                         15+ years experience in Machine Learning, Deep Learning and Healthcare Computing. Serves as Treasurer of Meerut ACM Chapter.
                       </p>
                    </div>
                </div>
              </div>
          </div>

          {/* Members Grid */}
          <div className="mb-5 pt-4">
            <h3 className="fw-bold text-center mb-5">Core Team & Members</h3>
            <div className="row g-4 justify-content-center">
               {/* Leaders */}
               {teamLead.map((lead, idx) => (
                 <div className="col-md-6" key={`lead-${idx}`}>
                   <div className="p-4 bg-primary bg-opacity-10 border-start border-primary border-4 rounded-end-3 h-100 transition-all hover-lift">
                     <h5 className="fw-bold text-dark mb-1">{lead.name}</h5>
                     <p className="text-primary fw-semibold mb-1 small text-uppercase" style={{ letterSpacing: '1px' }}>{lead.role}</p>
                     <p className="text-secondary mb-0 small">{lead.affil}</p>
                   </div>
                 </div>
               ))}

               {/* Other Members */}
               {members.map((member, idx) => (
                 <div className="col-md-4 col-sm-6" key={idx}>
                    <div className="p-4 bg-white border border-light rounded-4 shadow-sm h-100 transition-all hover-lift text-center d-flex flex-column justify-content-center">
                       <h6 className="fw-bold text-dark mb-2 fs-5">{member.name}</h6>
                       <span className="text-secondary small d-block mt-auto" style={{ lineHeight: "1.4" }}>{member.affil}</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default SubSociety;
