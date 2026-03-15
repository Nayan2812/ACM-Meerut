import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";
import officer4 from "../assets/images/officernewP4.jpg";
import mukesh from "../assets/images/Mukesh_Soni.jpg";
import prabhdep from "../assets/images/Prabhdep.jpg";

import abhinav from "../assets/images/Abhinav_1.jpeg";
import ankit from "../assets/images/pic6.jpg";
import nayan from "../assets/images/Nayan Mathur.jpg";
import nisha from "../assets/images/Nisha Leharwani.jpg";
import prakhar from "../assets/images/Prakhar Mathur.jpg";
import nihal from "../assets/images/Nihal Gupta.jpeg";

import sai from "../assets/images/Bio_SairohithThummarakoti_Image.jpg";
import rajesh from "../assets/images/Rajesh_Vayyala.jpg";
import bhanu from "../assets/images/Bhanuprakash_Madupati.jpeg";
import rahul from "../assets/images/rahul-vadisetty-photo.jpg";

function Officers() {
  const [selectedOfficer, setSelectedOfficer] = useState(null);

  useEffect(() => {
    if (selectedOfficer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedOfficer]);

  const officers = [
    {
      name: "Aryan Chaudhary",
      role: "Chair",
      info: "Chief Scientific Advisor, Bio Tech Sphere Research",
      img: pic1,
      bio: "Aryan Chaudhary, the Chief Scientific Advisor at BioTech Sphere Research, India, is an eminent figure in the healthcare and technology landscape, renowned for his groundbreaking contributions and innovative leadership. Formerly the Research Head at Nijji HealthCare Pvt Ltd, he has showcased unparalleled expertise in harnessing revolutionary technologies, including artificial intelligence, deep learning, IoT, cognitive technology, and blockchain, to reshape the healthcare industry.\n\nWith a relentless commitment to excellence, he has left an indelible mark as a thought leader. His extensive body of work includes influential academic papers on public health and digital health, published in prestigious international journals. A focal point of his research lies in the integration of IoT and sensor technology for efficient data collection through one-time and ambulatory monitoring.\n\nA distinguished keynote speaker at numerous international and national conferences, he serves as a series editor of a CRC book series and as the editor of several books on biomedical science. He has received prestigious accolades such as the \"Most Inspiring Young Leader in Healthtech Space 2022\" by Business Connect.\n\nRecently, he has been appointed as the Chair for an ACM professional chapter and nominated as a member of the ACM U.S. Technology Policy Committee (USTPC) in the AI & Algorithms division. He has also been appointed as a Technical Committee Member for the tenure 2024-2025 with the IEEE Robotics and Automation Society."
    },
    {
      name: "Keshav Kaushik",
      role: "Vice-Chair",
      info: "Department of CSE, Sharda University",
      img: pic2,
      bio: "Keshav Kaushik is an accomplished academician, cybersecurity, and digital forensics expert currently serving as an Associate Professor in the Department of Computer Science & Engineering, Sharda School of Engineering & Technology, Sharda University, Greater Noida, India. As a key member of the Cybersecurity Centre of Excellence, he has been instrumental in advancing the field of cybersecurity through his dedicated teaching and innovative research. In addition to his academic role, he holds the prestigious position of Vice-Chairperson for the Meerut ACM Professional Chapter, highlighting his leadership and commitment to the professional community. In 2024, he is listed in the World's top 2% Scientist released by Stanford University and Elsevier.\n\nHis academic journey includes a notable stint as a Faculty Intern during the Summer Faculty Research Fellow Programme 2016 at the Indian Institute of Technology (IIT) Ropar, reflecting his continuous pursuit of knowledge and professional development. His scholarly contributions are extensive and impactful, with over 150 publications to his credit. This includes 25 peer-reviewed articles in SCI/SCIE/Scopus-indexed journals and 50+ publications in Scopus-indexed conferences. He is also an inventor, holding one granted patent and six published patents, alongside five granted copyrights.\n\nHis editorial expertise is showcased by publishing 30 books and 25 book chapters, further cementing his reputation as a thought leader in the field. His professional certifications are a testament to his expertise and commitment to excellence. He is a Certified Ethical Hacker (CEH v11) by EC-Council, a CQI and IRCA Certified ISO/IEC 27001:2013 Lead Auditor, a Quick Heal Academy Certified Cyber Security Professional (QCSP), and an IBM Cybersecurity Analyst. His recognition as a Bentham Ambassador by Bentham Science Publishers and his role as a Guest Editor for the IEEE Journal of Biomedical and Health Informatics underscore his influence and authority in cybersecurity.\n\nHe is a dynamic speaker, having delivered over 50 national and international talks on cybersecurity and digital forensics topics. His mentorship was acknowledged during the Smart India Hackathon 2017, under the aegis of the Indian Space Research Organization (ISRO), with a certificate of appreciation from AICTE, MHRD, and i4c. A two-time GATE qualifier with an impressive 96.07 percentile (2012 and 2016), he has also received accolades from the Uttarakhand Police for his significant contributions to cybercrime investigation training."
    },
    {
      name: "Dr. Nikita Jain",
      role: "Treasurer",
      info: "Professor, Poornima College of Engineering",
      img: pic3,
      bio: "Dr. Nikita Jain is working as a Professor in the Department of Computer Engineering at Poornima College of Engineering, Jaipur, Rajasthan, India. She has more than 15 years of teaching experience as well as research experience. She did her BTech and MTech in Computer Science and Engineering at UPTU, Lucknow and RTU Kota. She has published in various international journals and international conferences in the field of computer science, machine learning, deep learning, and the healthcare sector. She is an editorial board member and reviewer for various international journals and conferences, such as Springer, Frontiers, MDPI, IGI Global, etc.\n\nHer area of interest is advanced computing and healthcare, machine learning, deep learning etc. Dr. Nikita Jain, a seasoned academic with a passion for cutting-edge technology and healthcare innovation, serves as the esteemed Treasurer of the Meerut ACM Professional Chapter, spearheading advancements in advanced computing, machine learning, deep learning, and their impactful applications in healthcare."
    },
    {
      name: "Dr. Aanjey Mani Tripathi",
      role: "General Secretary",
      info: "Associate Professor, Galgotias University",
      img: officer4,
      bio: "Dr. Aanjey Mani Tripathi is currently working as Associate Professor in School of Computer Science & Engineering Department, He has total experience of more than 09 years of teaching in Computer science and Engineering Department. He has been associated with Galgotias University since 2021.\n\nDr. Tripathi has Indian Patent Grant and many other Patents filed and Design Patents Granted and filed on his name. Dr. Tripathi is also a member of many International Professional bodies like IEEE, ACM and IAENG Professional Member. He is currently General secretary of Meerut ACM Professional Chapter."
    },
    {
      name: "Mukesh Soni",
      role: "Research Head",
      info: "Senior IEEE Member, ORCiD: 0000-0002-9228-6071",
      img: mukesh,
      bio: "Mr. Mukesh Soni is a Assistant Professor in the Department of Computer Science Engineering, Dr. D. Y. Patil Vidyapeeth, Pune, Dr. D. Y. Patil School of Science & Technology, Tathawade, Pune, India. He Has completed his Bachelor's in Information Technology from Gyan Ganga Institute of Technology & Management, Bhopal, India in 2011, and a Masters in Computer Science & Engineering from MANIT, Bhopal, India in 2015. He is a Senior Member in IEEE.\n\nHe is associated with NPTEL (IIT Project) as a Quality Control Person since 2019. He is also a SPOC(Single point of contact) coordinator with the NPTEL learning project since 2019. He has Qualified GATE examination in the year of 2012,2013,2014,2015,2018, and 2020 and got India Book of Record for this in 2020, also qualified UGC NET examination in 2014. His research interests include Applied Cryptography, Information Security, and Network Security.\n\nHe has published a total of 13 research papers in IEEE/Springer Conferences, Scopus/SCIE Journals, and 16 papers in National and International Journals. He has published 9 Indian Patents and 9 International Patents. He has received a total of 9 Awards like the Young Scientist awards, Young faculty award, Best faculty award, International Goal Achiever Award, NPTEL start awards, NPTEL believer award, Award Appreciation for Excellent performance in the field of Computer Science & Engineering, Award for Contribution to Student Development by different organizations."
    },
    {
      name: "Dr. Prabh Deep Singh",
      role: "Intern Head",
      info: "Associate Professor, Graphic Era University",
      img: prabhdep,
      bio: "Dr. Prabh Deep Singh is an Associate Professor in the department of Computer Science & Engineering at Graphic Era (Deemed to be University) Dehradun, Uttarakhand, India. His research spans cloud computing, IoT, and healthcare technology. He is an accomplished author of international books, actively patents new technologies, and has contributed extensively to peer-reviewed papers and book chapters. He also leads IoT projects in critical environments, serves as a reviewer for prestigious journals, chairs sessions at international conferences, and has been recognized with a Young Scientist Award."
    }
  ];

  return (
    <>
      <Navbar whiteBg={true} />

      <div className="bg-light min-vh-100 pb-5">
        {/* Header */}
        <section className="position-relative text-center overflow-hidden d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', paddingTop: '4rem', paddingBottom: '6rem', background: '#fff' }}>
          {/* Leadership/Networking SVG Background */}
          <svg
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ zIndex: 0, opacity: 0.08 }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="leadership-pattern" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
                {/* Central Node representing leadership */}
                <circle cx="200" cy="200" r="12" fill="var(--primary-color)" />
                <circle cx="200" cy="200" r="24" fill="none" stroke="var(--secondary-color)" strokeWidth="2" opacity="0.5" />

                {/* Surrounding Nodes representing team members */}
                <circle cx="100" cy="100" r="6" fill="var(--primary-light)" />
                <circle cx="300" cy="100" r="6" fill="var(--primary-light)" />
                <circle cx="100" cy="300" r="6" fill="var(--primary-light)" />
                <circle cx="300" cy="300" r="6" fill="var(--primary-light)" />
                <circle cx="200" cy="60" r="8" fill="var(--secondary-color)" />
                <circle cx="200" cy="340" r="8" fill="var(--secondary-color)" />
                <circle cx="60" cy="200" r="8" fill="var(--secondary-color)" />
                <circle cx="340" cy="200" r="8" fill="var(--secondary-color)" />

                {/* Connecting lines */}
                <line x1="200" y1="200" x2="100" y2="100" stroke="var(--primary-color)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="300" y2="100" stroke="var(--primary-color)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="100" y2="300" stroke="var(--primary-color)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="300" y2="300" stroke="var(--primary-color)" strokeWidth="1.5" />
                <line x1="200" y1="200" x2="200" y2="60" stroke="var(--primary-color)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="200" y2="340" stroke="var(--primary-color)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="60" y2="200" stroke="var(--primary-color)" strokeWidth="2" strokeDasharray="4 4" />
                <line x1="200" y1="200" x2="340" y2="200" stroke="var(--primary-color)" strokeWidth="2" strokeDasharray="4 4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leadership-pattern)" />
          </svg>

          <div className="container position-relative z-1">
            <span className="d-inline-block py-2 px-4 rounded-pill bg-primary bg-opacity-10 text-primary fw-bold text-uppercase mb-4 shadow-sm" style={{ fontSize: "1rem", letterSpacing: "2px" }}>
              The Executives
            </span>
            <h2 className="display-2 fw-bold text-dark mb-4">Our <span className="text-gradient">Leadership</span></h2>
            <div className="d-flex justify-content-center mb-5">
              <div style={{ width: '120px', height: '6px', background: 'var(--primary-color)', borderRadius: '3px' }}></div>
            </div>
            <p className="text-secondary mx-auto" style={{ maxWidth: '900px', fontSize: '1.5rem', lineHeight: '1.8' }}>
              Meet the dedicated individuals driving the vision and mission of the Meerut ACM Professional Chapter.
            </p>
          </div>
            
            {/* Scroll Down Indicator */}
            <div className="position-absolute bottom-0 start-50 translate-middle-x mb-5 animate-bounce">
              <span className="text-secondary small text-uppercase fw-bold d-block mb-2" style={{ letterSpacing: '2px' }}>Scroll Down</span>
              <div className="rounded-pill border border-2 border-secondary mx-auto d-flex justify-content-center pt-2" style={{ width: '30px', height: '50px' }}>
                <div className="bg-secondary rounded-circle animate-scroll-dot" style={{ width: '6px', height: '6px' }}></div>
              </div>
            </div>
        </section>

        {/* Core Officers */}
        <section className="py-5">
          <div className="container">
            <h3 className="fw-bold text-center mb-5 border-bottom d-inline-block px-4 pb-2 mx-auto">Officers</h3>

            <div className="row g-4 justify-content-center">
              {officers.map((officer, index) => (
                <div className="col-md-6 col-lg-4 d-flex justify-content-center" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-up text-center overflow-hidden w-100" style={{ maxWidth: '300px' }}>
                    <div className="d-flex justify-content-center pt-4 pb-3">
                      <div className="rounded-circle p-1 border border-3 border-primary shadow-sm" style={{ width: '160px', height: '160px' }}>
                        <img src={officer.img} alt={officer.name} className="img-fluid rounded-circle w-100 h-100 object-fit-cover" style={{ objectPosition: 'top' }} />
                      </div>
                    </div>

                    <div className="card-body d-flex flex-column pb-4 px-3">
                      <div className="flex-grow-1">
                        <h4 className="card-title fw-bold mb-2" style={{ fontSize: '1.25rem' }}>{officer.name}</h4>
                        <h6 className="text-primary fw-semibold mb-3">{officer.role}</h6>
                        <p className="card-text text-secondary mb-4 small">{officer.info}</p>
                      </div>
                      <div className="mt-auto">
                        <button onClick={() => setSelectedOfficer(officer)} className="btn btn-outline-primary rounded-pill px-4 py-2">
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Web Masters */}
        <section className="py-5 bg-white">
          <div className="container">
            <h3 className="fw-bold text-center mb-5 border-bottom d-inline-block px-4 pb-2 mx-auto">Web Masters</h3>

            <div className="row g-4 justify-content-center">
              {[
                { name: "Nisha Laherwani", role: "Web Master", info: "2nd year, CSE, Poornima College of Engineering", img: nisha },
                { name: "Nayan Mathur", role: "Web Master", info: "2nd year, CSE, Poornima College of Engineering", img: nayan },
                { name: "Nihal Gupta", role: "Web Master", info: "2nd year, CSE, Poornima College of Engineering", img: nihal },
                { name: "Prakhar Mathur", role: "Web Master", info: "2nd year, CSE, Poornima College of Engineering", img: prakhar },
              ].map((member, index) => (
                <div className="col-md-6 col-lg-4 d-flex justify-content-center" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-up text-center overflow-hidden py-3 px-3 w-100" style={{ maxWidth: '300px' }}>
                    {member.img ? (
                      <div className="d-flex justify-content-center mb-4 pt-2">
                        <div className="rounded-circle p-1 border border-3 border-info shadow-sm" style={{ width: '160px', height: '160px' }}>
                          <img src={member.img} alt={member.name} className="img-fluid rounded-circle w-100 h-100 object-fit-cover" style={{ objectPosition: 'top' }} />
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4 pt-2 text-info d-flex justify-content-center align-items-center" style={{ height: '160px' }}>
                        <i className="fa fa-user-circle opacity-25" style={{ fontSize: '6rem' }}></i>
                      </div>
                    )}
                    <div className="card-body p-0 d-flex flex-column justify-content-center pb-2">
                      <h4 className="card-title fw-bold mb-2" style={{ fontSize: '1.25rem' }}>{member.name}</h4>
                      <h6 className="text-info fw-semibold mb-3">{member.role}</h6>
                      <p className="card-text text-secondary mb-0 small">{member.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* International Advisory Board */}
        <section className="py-5">
          <div className="container">
            <h3 className="fw-bold text-center mb-5 border-bottom d-inline-block px-4 pb-2 mx-auto">International Advisory Board</h3>

            <div className="row g-4 justify-content-center">
              {[
                {
                  name: "Sairohith Thummarakoti",
                  info: "Expert in healthcare technology & cloud computing",
                  img: sai
                },
                {
                  name: "Rajesh Vayyala",
                  info: "Cloud Data Architect & AI Strategy Leader",
                  img: rajesh
                },
                {
                  name: "Bhanuprakash Madupati",
                  info: "Technology Leader in cloud & cybersecurity",
                  img: bhanu
                },
                {
                  name: "Rahul Vadisetty",
                  info: "AI researcher & global innovation leader",
                  img: rahul
                }
              ].map((member, index) => (
                <div className="col-md-6 col-lg-4 d-flex justify-content-center" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-up text-center py-3 px-3 w-100" style={{ maxWidth: '300px' }}>
                    <div className="d-flex justify-content-center mb-4 pt-2">
                      <div className="rounded-circle p-1 border border-3 border-secondary shadow-sm" style={{ width: '160px', height: '160px' }}>
                        <img src={member.img} alt={member.name} className="img-fluid rounded-circle w-100 h-100 object-fit-cover" style={{ objectPosition: 'top' }} />
                      </div>
                    </div>
                    <div className="card-body p-0 d-flex flex-column justify-content-center pb-2">
                      <h5 className="card-title fw-bold mb-2" style={{ fontSize: '1.25rem' }}>{member.name}</h5>
                      <p className="card-text text-secondary mb-0 small">{member.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Profile Modal */}
      {selectedOfficer && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ zIndex: 9999, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(6px)', animation: 'modalOverlayIn 0.3s ease' }}
          onClick={() => setSelectedOfficer(null)}
        >
          <div
            className="bg-white rounded-4 shadow-lg position-relative mx-3"
            style={{ maxWidth: '700px', width: '100%', maxHeight: '85vh', overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', animation: 'modalSlideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedOfficer(null)}
              className="btn-close position-absolute top-0 end-0 m-4"
              style={{ zIndex: 10 }}
              aria-label="Close"
            ></button>

            {/* Modal Content */}
            <div className="p-5 text-center">
              <div className="d-flex justify-content-center mb-4">
                <div className="rounded-circle p-1 border border-3 border-primary shadow" style={{ width: '180px', height: '180px' }}>
                  <img
                    src={selectedOfficer.img}
                    alt={selectedOfficer.name}
                    className="img-fluid rounded-circle w-100 h-100 object-fit-cover"
                    style={{ objectPosition: 'top' }}
                  />
                </div>
              </div>

              <h3 className="fw-bold mb-1">{selectedOfficer.name}</h3>
              <span className="badge bg-primary bg-opacity-10 text-primary fw-bold mb-3 px-3 py-2 rounded-pill"
                style={{ fontSize: '0.95rem' }}>
                {selectedOfficer.role}
              </span>
              <p className="text-secondary mt-2 mb-4 small">{selectedOfficer.info}</p>

              <hr className="mx-auto" style={{ maxWidth: '200px', opacity: 0.2 }} />

              <div className="mt-4 px-md-4" style={{ textAlign: 'justify' }}>
                {selectedOfficer.bio && selectedOfficer.bio.split('\n\n').map((para, i) => (
                  <p key={i} className="text-secondary" style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Officers;
