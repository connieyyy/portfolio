import React from "react";
import HackLogo from "./images/hack-logo.png";
import IcsLogo from "./images/ucidbh.jpeg";
import AmazonLogo from "./images/aws-logo.jpeg";
import ArityLogo from "./images/arity-logo.jpeg";
import EssLogo from "./images/uciess.jpeg";

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
      {/* Navigation Bar */}
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
              href="https://connieyyy.github.io/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://drive.google.com/drive/u/2/folders/1pugtl2c9JIufoZAPftpLLyaW-M2NsfE6"
              target="_blank"
              rel="noopener noreferrer"
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

      {/* Main content */}
      <div
        style={{
          padding: "60px 40px 100px",
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Image blob placeholder */}
          <div
            style={{
              width: "650px",
              height: "160px",
              background: "#2d3e50",
              borderRadius: "60px",
              margin: "0 auto 50px",
              opacity: 0.3,
            }}
          />

          {/* About Section */}
          <div
            id="about"
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "20px",
              borderColor: "black",
              border: "1px solid #b2acac3a",
              padding: "40px",
              marginBottom: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "600",
                margin: "0 0 10px 0",
                color: "#1a1a1a",
              }}
            >
              welcome, i'm connie yang!
            </h1>

            <ul
              style={{
                fontSize: "16px",
                lineHeight: "1.8",
                color: "#333",
                margin: "0 0 20px 0",
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
                fontSize: "16px",
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

          {/* Experiences Card */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
              border: "1px solid #b2acac3a",
            }}
          >
            <h2
              style={{
                fontSize: "20px",
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
                    fontSize: "16px",
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
                      width: "45px",
                      height: "45px",
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
                          ? "1px solid #c5c0c04d"
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
                          fontSize: "16px",
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
