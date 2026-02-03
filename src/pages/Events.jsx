import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import event1 from "../assets/images/event01.jpg";
import event2 from "../assets/images/geu_thumbnail.jpg";
import event3 from "../assets/images/kmv_thumbnail.jpg";
import event4 from "../assets/images/ct_thumbnail.jpg";
import event5 from "../assets/images/kcet_thumbnail.jpg";
import { Link } from "react-router-dom";

function Events() {
  const events = [
    {
      title:
        'An Expert Lecture on "Beyond Devices : The Evolution Of Everyday Wearables"',
      details:
        "Organized by Department Of Computer Engineering & Advance Computing, Poornima College Of Engineering on 27 February 2024",
      img: event1,
    },
    {
      title: "Wearable Tech Innovative Research Internship Program",
      details:
        "Organized by Meerut ACM Chapter & Graphic Era University between July 2024 - August 2024",
      img: event2,
      link: "/event-details1",
    },
    {
      title:
        'Expert Talk on "Role of Emerging Technologies in Smart Education"',
      details:
        "Organized by PG Department of Computer Science & Applications on 9 August 2024",
      img: event3,
      link: "/event-details2",
    },
    {
      title: 'Expert Lecture on "Mastering Data Visualization and IoT Hands-on"',
      details:
        "Organized by PG Department of Computer Science & Applications on 9 August 2024",
      img: event4,
      link: "/event-details3",
    },
    {
      title: 'Expert Talk on "Cyber Security"',
      details:
        "Organized by Khalsa College of Engineering & Technology with ACM Meerut Chapter on 8 August 2024",
      img: event5,
      link: "/event-details4",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section 
        className="position-relative d-flex align-items-center justify-content-center bg-primary text-white"
        style={{ minHeight: "35vh", paddingTop: "80px", background: "linear-gradient(135deg, #0056b3 0%, #004494 100%)" }}
      >
        <div className="container text-center position-relative z-1">
          <h1 className="display-4 fw-bold mb-3 animate-fade-in">Our Events</h1>
          <p className="lead opacity-75 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fostering knowledge and innovation through expert talks and workshops
          </p>
        </div>
        {/* Decor */}
        <div className="position-absolute start-0 bottom-0 w-100 overflow-hidden" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
             <path fill="#f8fafc" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-6 bg-body">
        <div className="container">
          <div className="row g-4">
            {events.map((event, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div 
                  className="card h-100 border-0 shadow-sm hover-lift overflow-hidden rounded-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="overflow-hidden position-relative" style={{ height: "220px" }}>
                    <img
                      src={event.img}
                      alt={event.title}
                      className="card-img-top w-100 h-100 object-fit-cover transition-transform duration-500"
                      onMouseEnter={(e) => e.target.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <div className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-white rounded-pill shadow-sm small fw-bold text-primary">
                      Event
                    </div>
                  </div>

                  <div className="card-body d-flex flex-column p-4">
                    <h5 className="card-title fw-bold mb-3 text-dark">{event.title}</h5>
                    <p className="card-text text-secondary mb-4 small flex-grow-1">
                      {event.details}
                    </p>

                    {event.link ? (
                      <Link
                        to={event.link}
                        className="btn btn-outline-primary rounded-pill w-100 mt-auto fw-semibold"
                      >
                        View More
                      </Link>
                    ) : (
                      <button disabled className="btn btn-light text-muted rounded-pill w-100 mt-auto">
                        Completed
                      </button>
                    )}
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

export default Events;
