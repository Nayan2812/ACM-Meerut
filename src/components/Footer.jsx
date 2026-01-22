function Footer() {
  return (
    <>
      <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">

            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>Address</h4>
                <div className="contact_link_box">
                  <a href="https://www.linkedin.com/company/acm-meerut-professional-chapter/posts/?feedView=all">
                    <i className="fa fa-linkedin" /> LinkedIn
                  </a>
                  <a href="mailto:acmchaptermeerut@gmail.com">
                    <i className="fa fa-envelope" /> acmchaptermeerut@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>Info</h4>
                <p>
                  Empowering Minds, Innovating Futures.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>Links</h4>
                <div className="info_links">
                  <a href="/">Home</a>
                  <a href="/about">About</a>
                  <a href="/officers">Officers</a>
                  <a href="/events">Events</a>
                  <a href="/sub-society">SIGs</a>
                  <a href="/initiative">Initiatives</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          <p>
            © {new Date().getFullYear()} All Rights Reserved By ACM Meerut Chapter
          </p>
        </div>
      </section>
    </>
  );
}

export default Footer;
