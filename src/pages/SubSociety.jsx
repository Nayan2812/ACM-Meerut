import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import rashmiImg from "../assets/images/Rashmi.jpg";
import hodImg from "../assets/images/HOD.jpeg";
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
        className="position-relative d-flex align-items-center justify-content-center bg-primary text-white"
        style={{
          minHeight: "40vh",
          paddingTop: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        }}
      >
        <div className="container text-center position-relative z-1">
          <span className="d-inline-block py-1 px-3 rounded-pill bg-white/10 text-success fw-bold text-uppercase mb-3 border border-white/20">
            Communities
          </span>
          <h1 className="display-3 fw-bold mb-3 animate-fade-in">
            Special Interest Groups
          </h1>
          <p
            className="lead opacity-75 animate-fade-in"
            style={{ animationDelay: "0.2s", maxWidth: "700px", margin: "0 auto" }}
          >
            Fostering niche communities to drive innovation in specialized fields.
          </p>
        </div>
        {/* Decor */}
        <div
          className="position-absolute bg-primary rounded-circle opacity-20"
          style={{ width: "400px", height: "400px", top: "-20%", left: "-10%", filter: "blur(80px)" }}
        ></div>
         <div
          className="position-absolute bg-secondary rounded-circle opacity-10"
          style={{ width: "300px", height: "300px", bottom: "10%", right: "-5%", filter: "blur(60px)" }}
        ></div>
      </section>

      {/* SIG Selector */}
      <section className="py-6 bg-body">
        <div className="container" style={{ marginTop: "-80px" }}>
          <div className="row g-4 justify-content-center position-relative z-2">
            <div className="col-md-6 col-lg-5">
              <Link to="/sub-society" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-lg hover-lift bg-white overflow-hidden text-center p-5 group">
                   <div className="mb-4 bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 text-primary group-hover-bg-primary group-hover-text-white transition-all">
                      <i className="fa fa-connectdevelop fa-3x"></i>
                   </div>
                  <h3 className="fw-bold text-dark">Next-Gen Wearable Hub</h3>
                  <p className="text-secondary">Exploring the future of wearable technology and human-computer interaction.</p>
                  <span className="btn btn-outline-primary rounded-pill px-4 mt-3">Active Community</span>
                </div>
              </Link>
            </div>
            <div className="col-md-6 col-lg-5">
              <Link to="/sub-society" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-lg hover-lift bg-white overflow-hidden text-center p-5 group opacity-75">
                  <div className="mb-4 bg-secondary bg-opacity-10 rounded-circle d-inline-flex p-4 text-secondary">
                      <i className="fa fa-shield fa-3x"></i>
                   </div>
                   <h3 className="fw-bold text-dark">Cyber Guardians</h3>
                  <p className="text-secondary">Dedicated to securing the digital frontier and ethical hacking awareness.</p>
                   <span className="btn btn-outline-secondary rounded-pill px-4 mt-3">Coming Soon</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wearable Hub Content */}
      <section className="py-6 position-relative overflow-hidden">
        <div className="container">
          <div className="row align-items-center mb-6">
            <div className="col-lg-8 mx-auto text-center">
              <span className="text-primary fw-bold text-uppercase letter-spacing-2">Focus Area</span>
              <h2 className="display-4 fw-bold mb-4 mt-2">Next-Gen Wearable Hub</h2>
              <p className="lead text-secondary" style={{ textAlign: "justify" }}>
                Next-Gen Wearables Hub is a community within the Meerut ACM Professional Chapter dedicated to the exploration, discussion, and advancement of wearable technology. It serves as a platform for individuals interested in the myriad applications and innovations that wearable technology can offer, allowing them to engage with like-minded peers, industry experts, and academics.
              </p>
              <p className="text-secondary mt-3" style={{ textAlign: "justify" }}>
                The NextGen Wearables Hub resonates with the core values of ACM, encapsulating technical excellence, education, and technological advancement for positive societal impact. By spearheading a venture that blends ethical computing with real-world applications, we are not only pushing the envelope in the computing profession but also enhancing the visibility and accessibility of community-driven research.
              </p>
            </div>
          </div>

          {/* Importance */}
          <div className="row mb-5">
            <div className="col-lg-10 mx-auto">
               <div className="glass p-5 rounded-4 shadow-sm border border-secondary border-opacity-10">
                 <h3 className="fw-bold mb-3">Importance & Applications</h3>
                 <p className="text-secondary mb-0">
                   Wearable technology is at the forefront of the Fourth Industrial Revolution, enabling healthcare monitoring, smart education, AR glasses and real-time data experiences. It bridges the physical and digital worlds, promoting healthier lifestyles and enriched educational experiences.
                 </p>
               </div>
            </div>
          </div>

          {/* Commitments */}
          <div className="mb-6">
            <h3 className="text-center fw-bold mb-5">Our Commitments</h3>
            <div className="row g-4">
              {committments.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <div className="d-flex align-items-start gap-3 p-4 bg-white rounded-3 shadow-sm h-100 hover-lift border border-light">
                    <div className="bg-primary text-white rounded-circle p-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{width: "60px", height: "60px"}}>
                      <i className={`fa ${item.icon} fa-xl`}></i>
                    </div>
                    <div>
                      <h5 className="fw-bold">{item.title}</h5>
                      <p className="text-secondary small mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <hr className="my-6 border-secondary opacity-10" />

          {/* Team Section */}
          <div className="text-center mb-5">
            <h2 className="fw-bold">Leadership & Team</h2>
            <p className="text-secondary">The minds behind the initiative</p>
          </div>

          <div className="row g-5 mb-6 align-items-center">
            {/* Leadership Profile 1 */}
            <div className="col-lg-6">
              <div className="text-center text-lg-start">
                 <span className="text-primary fw-bold text-uppercase small">Under Leadership of</span>
                 <h3 className="fw-bold mb-1">Aryan Chaudhary</h3>
                 <p className="text-secondary fw-medium mb-3">Chief Scientific Advisor Bio Tech Sphere Research, India</p>
                 <span className="badge bg-primary rounded-pill mb-4">Chair, Meerut ACM Chapter</span>
                 <p className="text-secondary small">FIOASD, SE-(T&F), USTPC</p>
              </div>
            </div>
             {/* Leadership Profile 2 & 3 (Detailed) */}
          </div>

          {/* Detailed Profiles */}
          <div className="row g-5 mb-5">
              <div className="col-lg-6">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center bg-white p-4 rounded-4 shadow-sm h-100">
                    <img src={rashmiImg} alt="Dr. Rashmi Singh" className="rounded-circle object-fit-cover shadow-sm" style={{width: "120px", height: "120px"}} />
                    <div className="text-center text-md-start">
                       <h5 className="fw-bold mb-1">Dr. Rashmi Singh</h5>
                       <p className="text-primary small fw-bold mb-2">Associate Professor, Amity University</p>
                       <p className="text-secondary small line-clamp-3">
                         Expertise in AI-ML, fuzzy theory and topology. Leads the Next-Gen Wearables Hub. 19+ years of teaching experience and active research since 2001.
                       </p>
                    </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="d-flex flex-column flex-md-row gap-4 align-items-center bg-white p-4 rounded-4 shadow-sm h-100">
                    <img src={hodImg} alt="Dr. Nikita Jain" className="rounded-circle object-fit-cover shadow-sm" style={{width: "120px", height: "120px"}} />
                    <div className="text-center text-md-start">
                       <h5 className="fw-bold mb-1">Dr. Nikita Jain</h5>
                       <p className="text-primary small fw-bold mb-2">Professor, Poornima College of Engineering</p>
                       <p className="text-secondary small line-clamp-3">
                         15+ years experience in Machine Learning, Deep Learning and Healthcare Computing. Serves as Treasurer of Meerut ACM Chapter.
                       </p>
                    </div>
                </div>
              </div>
          </div>

          {/* Members Grid */}
          <div className="mb-5">
            <h4 className="fw-bold mb-4">Core Team & Members</h4>
            <div className="row g-3">
               {/* Leaders */}
               {teamLead.map((lead, idx) => (
                 <div className="col-md-6" key={`lead-${idx}`}>
                   <div className="p-3 bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-3">
                     <h6 className="fw-bold text-dark mb-1">{lead.name}</h6>
                     <small className="text-primary fw-bold d-block">{lead.role}</small>
                     <small className="text-secondary">{lead.affil}</small>
                   </div>
                 </div>
               ))}

               {/* Other Members */}
               {members.map((member, idx) => (
                 <div className="col-md-4 col-sm-6" key={idx}>
                    <div className="p-3 bg-white border border-light rounded-3 shadow-sm h-100 feature-hover">
                       <h6 className="fw-bold text-dark mb-1">{member.name}</h6>
                       <small className="text-secondary" style={{fontSize: "0.85rem"}}>{member.affil}</small>
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
