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

import sai from "../assets/images/Bio_SairohithThummarakoti_Image.jpg";
import rajesh from "../assets/images/Rajesh_Vayyala.jpg";
import bhanu from "../assets/images/Bhanuprakash_Madupati.jpeg";
import rahul from "../assets/images/rahul-vadisetty-photo.jpg";
import { Link } from "react-router-dom";

function Officers() {
  const officers = [
    {
      name: "Aryan Chaudhary",
      role: "Chair",
      info: "Chief Scientific Advisor, Bio Tech Sphere Research",
      img: pic1,
      link: "/about-aryan"
    },
    {
      name: "Keshav Kaushik",
      role: "Vice-Chair",
      info: "Department of CSE, Sharda University",
      img: pic2,
      link: "/about-keshav"
    },
    {
      name: "Dr. Nikita Jain",
      role: "Treasurer",
      info: "Professor, Poornima College of Engineering",
      img: pic3,
      link: "/about-nikita"
    },
    {
      name: "Dr. Aanjey Mani Tripathi",
      role: "General Secretary",
      info: "Associate Professor, Galgotias University",
      img: officer4,
      link: "/about-aanjey"
    },
    {
      name: "Mukesh Soni",
      role: "Research Head",
      info: "Senior IEEE Member, ORCiD: 0000-0002-9228-6071",
      img: mukesh,
      link: "/about-mukesh"
    },
    {
      name: "Dr. Prabh Deep Singh",
      role: "Intern Head",
      info: "Associate Professor, Graphic Era University",
      img: prabhdep,
      link: "/about-prabhdeep"
    }
  ];

  return (
    <>
      <Navbar />

      <div className="bg-light min-vh-100 pb-5">
        {/* Header */}
        <section className="py-5 bg-gradient-primary text-center">
             <div className="container pt-5">
                 <h2 className="display-4 fw-bold mb-3">Our <span className="text-primary">Leadership</span></h2>
                 <p className="lead text-secondary mx-auto" style={{ maxWidth: '700px' }}>
                     Meet the dedicated individuals driving the vision and mission of the Meerut ACM Professional Chapter.
                 </p>
             </div>
        </section>

        {/* Core Officers */}
        <section className="py-5">
          <div className="container">
            <h3 className="fw-bold text-center mb-5 border-bottom d-inline-block px-4 pb-2 mx-auto">Officers</h3>

            <div className="row g-4 justify-content-center">
              {officers.map((officer, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-up text-center overflow-hidden">
                    <div className="d-flex justify-content-center pt-4">
                        <div className="rounded-circle p-1 border border-3 border-primary" style={{ width: '130px', height: '130px' }}>
                           <img src={officer.img} alt={officer.name} className="img-fluid rounded-circle w-100 h-100 object-fit-cover" />
                        </div>
                    </div>
                    
                    <div className="card-body">
                      <h5 className="card-title fw-bold mb-1">{officer.name}</h5>
                      <h6 className="text-primary fw-semibold mb-3">{officer.role}</h6>
                      <p className="card-text text-secondary small mb-3">{officer.info}</p>
                      
                      <Link to={officer.link} className="btn btn-outline-primary btn-sm rounded-pill px-4">
                        View Profile
                      </Link>
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
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm hover-up text-center overflow-hidden">
                    <div className="d-flex justify-content-center pt-4">
                        <div className="rounded-circle p-1 border border-3 border-info" style={{ width: '130px', height: '130px' }}>
                           <img src={abhinav} alt="Abhinav Arora" className="img-fluid rounded-circle w-100 h-100 object-fit-cover" />
                        </div>
                    </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Abhinav Arora</h5>
                    <h6 className="text-info fw-semibold mb-2">Web Master</h6>
                    <p className="card-text text-secondary small">4th Year CSE, Poornima College of Engineering</p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm hover-up text-center overflow-hidden">
                    <div className="d-flex justify-content-center pt-4">
                        <div className="rounded-circle p-1 border border-3 border-info" style={{ width: '130px', height: '130px' }}>
                           <img src={ankit} alt="Ankit Kumar" className="img-fluid rounded-circle w-100 h-100 object-fit-cover" />
                        </div>
                    </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">Ankit Kumar</h5>
                    <h6 className="text-info fw-semibold mb-2">Web Master</h6>
                    <p className="card-text text-secondary small">3rd Year AI, Poornima College of Engineering</p>
                  </div>
                </div>
              </div>
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
                <div className="col-md-6 col-lg-3" key={index}>
                  <div className="card h-100 border-0 shadow-sm hover-up text-center">
                    <div className="card-body">
                      <div className="mx-auto mb-3 rounded-circle overflow-hidden shadow-sm" style={{ width: '100px', height: '100px' }}>
                         <img src={member.img} alt={member.name} className="img-fluid w-100 h-100 object-fit-cover" />
                      </div>
                      <h6 className="fw-bold mb-2">{member.name}</h6>
                      <p className="small text-secondary mb-0">{member.info}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Officers;
