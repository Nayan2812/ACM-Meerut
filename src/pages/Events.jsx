import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import heroBg from "../assets/images/hero-bg.png";

import event1 from "../assets/images/event01.jpg";
import event2 from "../assets/images/geu_thumbnail.jpg";
import event3 from "../assets/images/kmv_thumbnail.jpg";
import event4 from "../assets/images/ct_thumbnail.jpg";
import event5 from "../assets/images/kcet_thumbnail.jpg";

function Events() {

  const events = [
    {
      title: 'An Expert Lecture on "Beyond Devices : The Evolution Of Everyday Wearables"',
      details: 'Organized by Department Of Computer Engineering & Advance Computing, Poornima College Of Engineering on 27 February 2024',
      img: event1
    },
    {
      title: 'Wearable Tech Innovative Research Internship Program',
      details: 'Organized by Meerut ACM Chapter & Graphic Era University between July 2024 - August 2024',
      img: event2,
      link: "/event-details1"
    },
    {
      title: 'Expert Talk on "Role of Emerging Technologies in Smart Education"',
      details: 'Organized by PG Department of Computer Science & Applications on 9 August 2024',
      img: event3,
      link: "/event-details2"
    },
    {
      title: 'Expert Lecture on "Mastering Data Visualization and IoT Hands-on"',
      details: 'Organized by PG Department of Computer Science & Applications on 9 August 2024',
      img: event4,
      link: "/event-details3"
    },
    {
      title: 'Expert Talk on "Cyber Security"',
      details: 'Organized by Khalsa College of Engineering & Technology with ACM Meerut Chapter on 8 August 2024',
      img: event5,
      link: "/event-details4"
    }
  ];

  return (
    <>
      <Navbar />

      {/* Events Section */}
      <section className="why_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Events Conducted By <span>Meerut ACM Professional Chapter</span>
            </h2>
          </div>

          <div className="why_container">
            {events.map((event, index) => (
              <div className="box" key={index}>
                <img src={event.img} alt={event.title} />

                <div className="detail-box">
                  <h3>{event.title}</h3>
                  <p className="event-details">{event.details}</p>

                  {event.link && (
                    <a href={event.link} className="btn">
                      View More
                    </a>
                  )}
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
