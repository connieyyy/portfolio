import React from "react";
import HackLogo from "./images/hack-logo.png";
import IcsLogo from "./images/ucidbh.jpeg";
import AmazonLogo from "./images/aws-logo.jpeg";
import ArityLogo from "./images/arity-logo.jpeg";
import EssLogo from "./images/uciess.jpeg";
import GriffithMe from "./images/me-griffith.jpg";
import HellenikaMe from "./images/me-hellenika.jpg";
import DisneyMe from "./images/me-disney.jpg";
import IrvineHacksMe from "./images/fullme.jpg";
import ChihulyMe from "./images/me-chihuly.jpg";

import Cloud1 from "./images/cloud-1.png";
import Cloud2 from "./images/cloud-2.png";
import Cloud4 from "./images/cloud-4.png";
import Cloud5 from "./images/cloud-5.png";

export default function Portfolio() {
  const experiences = [
    {
      title: "logistics director + tech lead",
      company: "hack at uci",
      link: "https://hack.ics.uci.edu/",
      date: "2023 – present",
      image: HackLogo,
    },
    {
      title: "software development engineer intern",
      company: "amazon web services",
      link: "https://aws.amazon.com/outposts/",
      date: "2026",
      image: AmazonLogo,
    },
    {
      title: "research assistant",
      company: "primeau lab",
      link: "#",
      date: "2024 – 2025",
      image: EssLogo,
    },
    {
      title: "ai/ml fellow",
      company: "arity",
      link: "https://arity.com/",
      date: "2025",
      image: ArityLogo,
    },
    {
      title: "software development engineer intern",
      company: "amazon web services",
      link: "https://aws.amazon.com/outposts/",
      date: "2025",
      image: AmazonLogo,
    },
    {
      title: "python programming learning assistant",
      company: "uc irvine",
      link: "#",
      date: "2024",
      image: IcsLogo,
    },
  ];

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .cloud-1 { animation: float 4s ease-in-out infinite; }
        .cloud-2 { animation: float 5s ease-in-out infinite 0.5s; }
        .cloud-3 { animation: float 6s ease-in-out infinite 1s; }
        .cloud-4 { animation: float 4.5s ease-in-out infinite 1.5s; }
        .cloud-5 { animation: float 5.5s ease-in-out infinite 2s; }
      `}</style>

      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          src={Cloud1}
          className="cloud-1"
          alt="Cloud"
          style={{
            position: "absolute",
            width: "200px",
            top: "5%",
            left: "2%",
            opacity: 0.6,
          }}
        />
        <img
          src={Cloud2}
          className="cloud-2"
          alt="Cloud"
          style={{
            position: "absolute",
            width: "180px",
            top: "15%",
            right: "5%",
            opacity: 0.5,
          }}
        />
        <img
          src={Cloud5}
          className="cloud-3"
          alt="Cloud"
          style={{
            position: "absolute",
            width: "220px",
            top: "80%",
            left: "10%",
            opacity: 0.4,
          }}
        />
        <img
          src={Cloud4}
          className="cloud-4"
          alt="Cloud"
          style={{
            position: "absolute",
            width: "160px",
            top: "50%",
            right: "10%",
            opacity: 0.5,
          }}
        />
      </div>

      <nav
        style={{
          background: "transparent",
          padding: "20px 40px",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontSize: "16px",
            }}
          >
            <a
              href="#about"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontWeight: "400",
              }}
            >
              about
            </a>
            <a
              href="/work"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontWeight: "400",
              }}
            >
              work
            </a>
            <a
              href="#resume"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontWeight: "400",
              }}
            >
              resume
            </a>
          </div>
        </div>
      </nav>

      <div
        style={{
          padding: "0px 40px 100px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto 50px",
            overflowX: "auto",
            overflowY: "hidden",
            paddingBottom: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <img
              src={GriffithMe}
              alt="Gallery"
              style={{
                width: "140px",
                height: "180px",
                borderRadius: "30px",
                objectFit: "cover",
                flexShrink: 0,
                transform: "rotate(-10deg)",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
            <img
              src={ChihulyMe}
              alt="Gallery"
              style={{
                width: "140px",
                height: "180px",
                borderRadius: "30px",
                objectFit: "cover",
                flexShrink: 0,
                transform: "rotate(5deg)",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
            <img
              src={HellenikaMe}
              alt="Gallery"
              style={{
                width: "140px",
                height: "180px",
                borderRadius: "30px",
                objectFit: "cover",
                flexShrink: 0,
                transform: "rotate(-6deg)",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
            <img
              src={IrvineHacksMe}
              alt="Gallery"
              style={{
                width: "140px",
                height: "180px",
                borderRadius: "30px",
                objectFit: "cover",
                flexShrink: 0,
                transform: "rotate(8deg)",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
            <img
              src={DisneyMe}
              alt="Gallery"
              style={{
                width: "140px",
                height: "180px",
                borderRadius: "30px",
                objectFit: "cover",
                flexShrink: 0,
                transform: "rotate(-2deg)",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            />
          </div>

          <div
            id="about"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "600",
                margin: "0 0 20px 0",
                color: "#1a1a1a",
              }}
            >
              welcome, i'm connie yang!
            </h1>

            <ul
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#333",
                margin: "0 0 25px 0",
                paddingLeft: "20px",
              }}
            >
              <li>senior @ uc irvine, studying computer science</li>
              <li>lived in the bay area, seattle, irvine</li>
              <li>love to explore and try new experiences + FOOD!</li>
              <li>
                passionate about building community, social good, finance, and
                technology
              </li>
            </ul>

            <div
              style={{
                fontSize: "18px",
                color: "#1a1a1a",
                borderTop: "1px solid #e0e0e0",
                paddingTop: "20px",
              }}
            >
              <a
                href="https://github.com/connieyyy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "#1a1a1a" }}
              >
                github
              </a>
              {" | "}
              <a
                href="https://www.linkedin.com/in/coyang"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "underline", color: "#1a1a1a" }}
              >
                linkedin
              </a>
              {" | "}
              <a
                href="mailto:con.yang4098@gmail.com"
                style={{ textDecoration: "underline", color: "#1a1a1a" }}
              >
                email
              </a>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "0 0 30px 0",
                color: "#1a1a1a",
              }}
            >
              experiences
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "0px" }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "18px",
                    gap: "20px",
                    paddingBottom:
                      index !== experiences.length - 1 ? "24px" : "0",
                  }}
                >
                  {/* Image */}
                  <img
                    src={exp.image}
                    alt={exp.company}
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "8px",
                      objectFit: "cover",
                      flexShrink: 0,
                    }}
                  />

                  {/* Experience details - WITH BORDER */}
                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                      borderBottom:
                        index !== experiences.length - 1
                          ? "1px solid #f0f0f0"
                          : "none",
                      paddingBottom:
                        index !== experiences.length - 1 ? "24px" : "0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        gap: "20px",
                        marginBottom: "4px",
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontWeight: "300",
                            color: "#1a1a1a",
                          }}
                        >
                          {exp.title}
                        </span>
                        {" @ "}
                        <a
                          href={exp.link}
                          style={{
                            textDecoration:
                              exp.link && exp.link !== "#"
                                ? "underline"
                                : "none",
                            color: "#1a1a1a",
                          }}
                        >
                          {exp.company}
                        </a>
                      </div>
                      <span
                        style={{
                          color: "#666",
                          fontSize: "18px",
                          whiteSpace: "nowrap",
                          flexShrink: 0,
                        }}
                      >
                        {exp.date}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
