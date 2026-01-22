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

      {/* Core Officers */}
      <section className="team_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Meerut ACM Professional Chapter <span>Officers</span>
            </h2>
          </div>

          <div className="row">
            {officers.map((officer, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="officer-card">
                  <div className="officer-img">
                    <img src={officer.img} alt={officer.name} />
                  </div>
                  <div className="officer-info">
                    <h5>{officer.name}</h5>
                    <h6>{officer.role}</h6>
                    <p>{officer.info}</p>
                    <a href={officer.link} className="read-more">
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Masters */}
      <section className="team_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Web <span>Masters</span></h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="officer-card">
                <div className="officer-img">
                  <img src={abhinav} alt="Abhinav Arora" />
                </div>
                <div className="officer-info">
                  <h5>Abhinav Arora</h5>
                  <h6>Web Master</h6>
                  <p>4th Year CSE, Poornima College of Engineering</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="officer-card">
                <div className="officer-img">
                  <img src={ankit} alt="Ankit Kumar" />
                </div>
                <div className="officer-info">
                  <h5>Ankit Kumar</h5>
                  <h6>Web Master</h6>
                  <p>3rd Year AI, Poornima College of Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* International Advisory Board */}
      <section className="team_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>International Advisory Board <span>Officers</span></h2>
          </div>

          <div className="row">
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
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="officer-card">
                  <div className="officer-img">
                    <img src={member.img} alt={member.name} />
                  </div>
                  <div className="officer-info">
                    <h5>{member.name}</h5>
                    <p>{member.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Officers;
