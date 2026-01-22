import pic1 from "../assets/images/pic1.jpg";
import pic2 from "../assets/images/pic2.jpeg";
import pic3 from "../assets/images/pic3.jpeg";
import officer4 from "../assets/images/officernewP4.jpg";
import mukesh from "../assets/images/Mukesh_Soni.jpg";
import prabhdep from "../assets/images/Prabhdep.jpg";

function OfficersSection() {
  const officers = [
    {
      name: "Aryan Chaudhary",
      role: "Chair",
      info: "Chief Scientific Advisor, Bio Tech Sphere Research",
      img: pic1,
      link: "/About_Aryan_Chaudhary"
    },
    {
      name: "Keshav Kaushik",
      role: "Vice-Chair",
      info: "Department of CSE, Sharda University",
      img: pic2,
      link: "/About_Keshav_Kaushik"
    },
    {
      name: "Dr. Nikita Jain",
      role: "Treasurer",
      info: "Professor, Poornima College of Engineering",
      img: pic3,
      link: "/About_Nikita_Jain"
    },
    {
      name: "Dr. Aanjey Mani Tripathi",
      role: "General Secretary",
      info: "Associate Professor, Galgotias University",
      img: officer4,
      link: "/About_Aanjey_Tripathi"
    },
    {
      name: "Mukesh Soni",
      role: "Research Head",
      info: "Senior IEEE Member, ORCiD: 0000-0002-9228-6071",
      img: mukesh,
      link: "/Mukesh_Soni"
    },
    {
      name: "Dr. Prabh Deep Singh",
      role: "Intern Head",
      info: "Associate Professor, Graphic Era University",
      img: prabhdep,
      link: "/Prabhdeep"
    }
  ];

  return (
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
  );
}

export default OfficersSection;
