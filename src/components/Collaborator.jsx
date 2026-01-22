import client1 from "../assets/images/client1.jpg";

function Collaborator() {
  return (
    <section className="collab_section">
      <div className="collab_container">

        <h2 className="collab_heading">
          Our <span>Joint Collaborator</span>
        </h2>

        <div className="collab_card">

          <div className="collab_img">
            <img src={client1} alt="Galgotias University" />
          </div>

          <div className="collab_text">
            <h3>Galgotias University</h3>
            <h5>ACM Student Chapter</h5>

            <p>
              Galgotias University ACM Student Chapter and Meerut ACM Professional
              Chapter have joined hands to build a strong computing community
              focused on innovation, collaboration, and learning.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Collaborator;
