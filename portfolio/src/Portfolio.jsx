import React from "react";

export default function Portfolio() {
  const experiences = [
    {
      title: "logistics director + tech lead",
      company: "hack at uci",
      link: "https://hack.ics.uci.edu/",
      date: "2023 – present",
    },
    {
      title: "software development engineer intern",
      company: "amazon web services",
      link: "https://aws.amazon.com/outposts/",
      date: "2026",
    },
    {
      title: "research assistant",
      company: "primeau lab",
      link: "#",
      date: "2024 – 2025",
    },
    {
      title: "ai/ml fellow",
      company: "arity",
      link: "https://arity.com/",
      date: "2025",
    },
    {
      title: "software development engineer intern",
      company: "amazon web services",
      link: "https://aws.amazon.com/outposts/",
      date: "2025",
    },
    {
      title: "python programming learning assistant",
      company: "uc irvine",
      link: "#",
      date: "2024",
    },
  ];

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      {/* Main content */}
      <div
        style={{
          padding: "60px 40px 100px",
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Blob placeholder */}
          <div
            style={{
              width: "650px",
              height: "160px",
              background: "#2d3e50",
              borderRadius: "60px",
              margin: "0 auto 50px",
              opacity: 0.85,
            }}
          />

          <div
            style={{
              background: "rgba(255, 255, 255, 0.9)",
              borderRadius: "20px",
              padding: "40px",
              marginBottom: "30px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
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
              <li>love to explore and try new experiences + food!</li>
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
              background: "rgba(255, 255, 255, 0.9)",
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
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    fontSize: "18px",
                    gap: "20px",
                    paddingBottom:
                      index !== experiences.length - 1 ? "24px" : "0",
                    borderBottom:
                      index !== experiences.length - 1
                        ? "1px solid #f0f0f0"
                        : "none",
                  }}
                >
                  {/* Icon square */}
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      background: "#3a4a56",
                      borderRadius: "4px",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  />

                  {/* Experience details */}
                  <div style={{ flex: 1, minWidth: 0 }}>
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
                        <span style={{ fontWeight: "300", color: "#1a1a1a" }}>
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
                          fontSize: "15px",
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
