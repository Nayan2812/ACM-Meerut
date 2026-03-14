function About() {
  return (
    <section className="py-7 position-relative" id="about">
      {/* Background Decor */}
      <div
        className="position-absolute bg-secondary opacity-10 rounded-circle start-0 bottom-0 mb-5 ms-n5"
        style={{ width: '300px', height: '300px', filter: 'blur(50px)', zIndex: -1 }}
      ></div>

      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="text-center mb-5">
          <span className="d-inline-block py-1 px-3 rounded-pill bg-light text-primary fw-bold text-uppercase mb-3 shadow-sm" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
            Who We Are
          </span>
          <h2 className="display-4 fw-bold">
            <span style={{ marginRight: '0.3em' }}>About</span><span className="text-gradient">ACM Meerut</span>
          </h2>
        </div>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h3 className="h3 fw-bold text-dark mb-4">
              Empowering the Computing Community
            </h3>
            <p className="lead text-secondary mb-4">
              The Meerut ACM Professional Chapter serves as a vibrant hub for computing professionals, academics, and students in the local area.
            </p>
            <p className="text-secondary" style={{ textAlign: "justify" }}>
              We are an extension of the esteemed Association for Computing Machinery (ACM), dedicated to fostering knowledge sharing, professional growth, and networking opportunities. Our mission is to cultivate a robust community committed to collaboration, learning, and innovation across global computing domains.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="p-4 bg-white rounded-4 shadow-lg border border-light position-relative">
              <div className="d-flex flex-column gap-4">
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                    <i className="fa fa-users fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Vibrant Community</h5>
                    <p className="small text-secondary m-0">Connecting professionals and students for mutual growth.</p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-info bg-opacity-10 p-3 rounded-circle text-info">
                    <i className="fa fa-lightbulb-o fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Innovation Hub</h5>
                    <p className="small text-secondary m-0">Fostering research and technical advancements in the region.</p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle text-success">
                    <i className="fa fa-graduation-cap fa-2x"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold">Continuous Learning</h5>
                    <p className="small text-secondary m-0">Elevating skills through diverse activities and events.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
