import React from "react";
import { Link } from "react-router-dom";
import FroggyFriend from "./images/appdemo.png";

export default function Work() {
  const projects = [
    {
      title: "IrvineHacks – Scheduler",
      image: "https://via.placeholder.com/300x200?text=Scheduler",
      description: "Hackathon portal.",
      link: "#",
    },
    {
      title: "Arity",
      image: "https://via.placeholder.com/300x200?text=Arity",
      description: "Classifying turns with coordinates.",
      link: "#",
    },
    {
      title: "IrvineHacks – Queue",
      image: "https://via.placeholder.com/300x200?text=Queue",
      description: "Movie e-commerce website.",
      link: "#",
    },
    {
      title: "IrvineHacks – Dashboard",
      image: "https://via.placeholder.com/300x200?text=Dashboard",
      description: "Frog companion mobile app.",
      link: "#",
    },
    {
      title: "IrvineHacks – Dashboard",
      image: "https://via.placeholder.com/300x200?text=Dashboard2",
      description: "Movie e-commerce website.",
      link: "#",
    },
    {
      title: "Froggy Friend",
      image: FroggyFriend,
      description: "Frog companion mobile app.",
      link: "#",
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
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              gap: "40px",
              fontSize: "16px",
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontWeight: "400",
              }}
            >
              about
            </Link>
            <Link
              to="/work"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontWeight: "400",
              }}
            >
              work
            </Link>
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
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Projects Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "12px",
                    padding: "20px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 0, 0, 0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 8px rgba(0, 0, 0, 0.08)";
                  }}
                >
                  {/* Title */}
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 16px 0",
                      color: "#1a1a1a",
                      textDecoration: "underline",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginBottom: "16px",
                    }}
                  />

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "16px",
                      color: "#333",
                      margin: "0",
                      lineHeight: "1.6",
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
