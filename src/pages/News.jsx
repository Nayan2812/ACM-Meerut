import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function News() {
  const upcomingEvents = [
    {
      title: "PerCAA 2024: International Conference on Pervasive Computing Advances and Applications",
      description:
        "We are excited to announce that the International Conference on Pervasive Computing Advances and Applications (PerCAA 2024) will be held on October 18-19, 2024. This prestigious event is proudly sponsored by the Meerut ACM Professional Chapter and promises to be a significant gathering for researchers, practitioners, and enthusiasts in the field of pervasive computing.",
      links: [
        { label: "Conference Website", url: "https://percaa.poornima.org" },
        { label: "Submit Paper", url: "https://cmt3.research.microsoft.com/PERCAA2024" },
      ],
    },
    {
      title: "CODE-AI 2025: 2nd International Conference on Data Science & Exploration in Artificial Intelligence",
      description:
        "We are thrilled to announce that the 2nd International Conference on Data Science & Exploration in Artificial Intelligence (CODE-AI 2025) will be held on April 7-8, 2025, at MAHE, Dubai. Proudly sponsored by the Meerut ACM Professional Chapter, this prestigious event promises to be a significant gathering for researchers, practitioners, and enthusiasts in the fields of data science and artificial intelligence.",
      links: [
        { label: "Conference Website", url: "https://conference.manipal.edu/CODE-AI2025" },
        { label: "Submit Paper", url: "https://cmt3.research.microsoft.com/CODEAI2025" },
      ],
    },
  ];

  const newsItems = [
    {
      title: "Launch of Meerut ACM Rare Disease Research Hub",
      description:
        "The Meerut ACM Chapter proudly unveils the Meerut ACM Rare Disease Research Hub, a groundbreaking initiative committed to advancing research, innovation, and collaboration in the field of rare diseases.",
      linkLabel: "Download Press Release",
      linkUrl: "https://meerut-acm.vercel.app/Rare_Disease_Research_PressRelease.pdf",
    },
    {
      title: "Meerut ACM Chapter Has Signed DORA",
      description:
        "The Meerut ACM Chapter is proud to announce that we have officially signed the Declaration on Research Assessment (DORA). This marks a significant step in our commitment to fostering fair, transparent, and responsible research evaluation practices.",
      linkLabel: "Download Press Release",
      linkUrl: "https://meerut-acm.vercel.app/Press-Release.pdf",
    },
    {
      title:
        'Book Series "Navigating the Frontiers of Artificial Intelligence and Machine Learning: Unleashing the Future"',
      description:
        "Collaboration with Cambridge Scholar Publishing launched in October. The Meerut ACM Chapter announces an upcoming book series collaboration with Cambridge Scholar Publishing. This collaboration aims to bring forth cutting-edge insights and research in the realm of technology and academia, promising enriching content for enthusiasts and scholars alike.",
      linkLabel: "Read More",
      linkUrl: "https://www.cambridgescholars.com",
    },
    {
      title: "ACM U.S. Technology Policy Committee Nomination",
      description:
        "The Meerut ACM Chapter proudly congratulates its Chair, Aryan Chaudhary, on being nominated as a member of the ACM U.S. Technology Policy Committee (USTPC) in the AI & Algorithms division. A testament to Aryan's expertise and leadership, this nomination highlights the chapter's pivotal role in shaping technology policy discussions at a national level.",
      linkLabel: null,
      linkUrl: null,
    },
    {
      title: "IEEE JBHI Special Issue Contribution in October",
      description:
        'In October, the Meerut ACM Chapter made a substantial contribution to the IEEE Journal of Biomedical and Health Informatics (JBHI) with a special issue "Advancing Personalized Healthcare: Integrating AI and Health Informatics". This collaborative effort underscores the chapter\'s dedication to advancing technological innovations in the biomedical and health informatics domain.',
      linkLabel: null,
      linkUrl: null,
    },
    {
      title: "Commentary Article — Authoera",
      description:
        "A noteworthy accomplishment for the Meerut ACM Chapter as their commentary article, published on August 11, 2023, through Authoera — DOI: 10.22541/au.169175900.00205464/v1",
      linkLabel: null,
      linkUrl: null,
    },
    {
      title: 'Book Series: "Healthcare Horizon & The Wearable Frontier"',
      description:
        "The Meerut ACM Professional Chapter announces the launch of two exciting book series: Healthcare Horizon (Publisher: Taylor and Francis), focused on healthcare technology, and The Wearable Frontier: Redefining Human Augmentation (Publisher: Nova Science), exploring wearable devices. Both Scopus-indexed, these series are key to our Next-Gen Wearable Hub initiative.",
      linkLabel: "Nova Science Publishers",
      linkUrl:
        "https://novapublishers.com/product-category/series/the-wearable-frontier-redefining-human-augmentation-edited-series-new-in-2024/",
      extraLink: {
        label: "Health Horizons",
        url: "https://www.routledge.com/Healthcare-Horizons/book-series/CRCHH",
      },
    },
    {
      title: "Healthcare Horizons Book Series — Now Open for Proposals!",
      description:
        "Published by CRC Press: Taylor & Francis, this series explores cutting-edge medical technology, policy changes, global health challenges, and emerging trends in healthcare. We are seeking proposals for authored books, handbooks, and student textbooks. All accepted books will be submitted for Scopus indexing.",
      linkLabel: "Read More",
      linkUrl: "https://www.routledge.com/Healthcare-Horizons/book-series/CRCHH",
    },
  ];

  return (
    <>
      <Navbar whiteBg={true} />

      {/* Page Header */}
      <section
        className="position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          minHeight: "35vh",
          marginTop: "80px",
          background: "linear-gradient(135deg, #0056b3 0%, #004494 100%)",
        }}
      >
        <div className="container text-center position-relative z-1">
          <h1 className="display-4 fw-bold mb-3 animate-fade-in">News</h1>
          <p
            className="lead opacity-75 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Latest updates, announcements and press releases from ACM Meerut
          </p>
        </div>
        <div
          className="position-absolute start-0 bottom-0 w-100 overflow-hidden"
          style={{ lineHeight: 0 }}
        >
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#f8fafc"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-5 bg-body">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">
              Upcoming <span className="text-gradient">Events</span>
            </h2>
            <p className="text-secondary">
              Conferences and events sponsored by ACM Meerut
            </p>
          </div>

          <div className="row g-4">
            {upcomingEvents.map((event, index) => (
              <div className="col-md-6" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm rounded-4 p-4 animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,86,179,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                      style={{
                        width: 48,
                        height: 48,
                        background:
                          "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
                      }}
                    >
                      <svg
                        width="22"
                        height="22"
                        fill="white"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                      </svg>
                    </div>
                    <span
                      className="badge rounded-pill px-3 py-2"
                      style={{
                        background: "rgba(0, 180, 216, 0.1)",
                        color: "var(--secondary-color)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                      }}
                    >
                      Upcoming
                    </span>
                  </div>
                  <h5 className="fw-bold text-dark mb-3">{event.title}</h5>
                  <p className="text-secondary small mb-4">
                    {event.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {event.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold"
                        style={{ fontSize: "0.85rem" }}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-5" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold display-5">
              The News <span className="text-gradient">Feed</span>
            </h2>
            <p className="text-secondary">
              Milestones, publications and accomplishments
            </p>
          </div>

          <div className="row g-4">
            {newsItems.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div
                  className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 24px rgba(0,86,179,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "";
                  }}
                >
                  {/* Gradient top strip */}
                  <div
                    style={{
                      height: 4,
                      background:
                        "linear-gradient(90deg, var(--primary-color), var(--secondary-color))",
                    }}
                  />
                  <div className="card-body d-flex flex-column p-4">
                    <div className="d-flex align-items-center mb-3">
                      <div
                        className="rounded-2 d-flex align-items-center justify-content-center me-3 flex-shrink-0"
                        style={{
                          width: 40,
                          height: 40,
                          background: "rgba(0, 86, 179, 0.08)",
                        }}
                      >
                        <svg
                          width="18"
                          height="18"
                          fill="var(--primary-color)"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z" />
                          <path d="M2 4h12v1H2V4zm0 3h12v1H2V7zm0 3h8v1H2v-1z" />
                        </svg>
                      </div>
                      <span
                        className="badge rounded-pill px-2 py-1"
                        style={{
                          background: "rgba(0,86,179,0.08)",
                          color: "var(--primary-color)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                        }}
                      >
                        News
                      </span>
                    </div>
                    <h6 className="fw-bold text-dark mb-2">{item.title}</h6>
                    <p className="text-secondary small mb-3 flex-grow-1">
                      {item.description}
                    </p>
                    {item.linkUrl && (
                      <div className="d-flex flex-wrap gap-2 mt-auto">
                        <a
                          href={item.linkUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-semibold"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {item.linkLabel} ↗
                        </a>
                        {item.extraLink && (
                          <a
                            href={item.extraLink.url}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-semibold"
                            style={{ fontSize: "0.8rem" }}
                          >
                            {item.extraLink.label} ↗
                          </a>
                        )}
                      </div>
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

export default News;
