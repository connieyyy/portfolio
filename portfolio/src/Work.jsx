import React from "react";
import { Link } from "react-router-dom";
import FroggyFriend from "./images/appdemo.png";
import QueueManagementPage from "./images/ih-queue-management.png";
import ArityLogo from "./images/arity-logo.jpeg";
import SchedulerPage from "./images/ih-scheduler.png";
import ReviewerPage from "./images/ih-reviewer-revamp.png";
import AddOrgsPage from "./images/ih-add-perms.png";

import Cloud1 from "./images/cloud-1.png";
import Cloud2 from "./images/cloud-2.png";
import Cloud4 from "./images/cloud-4.png";
import Cloud5 from "./images/cloud-5.png";

export default function Work() {
  const projects = [
    {
      id: "shift-scheduler",
      title: "IrvineHacks – Shift Scheduler",
      image: SchedulerPage,
      description: "Automate shift scheduling for directors.",
    },
    {
      id: "arity",
      title: "Arity",
      image: ArityLogo,
      description:
        "Classifying turns with GPS coordinates. Article in progress.",
    },
    {
      id: "queue-management",
      title: "IrvineHacks – Queue + QR Code",
      image: QueueManagementPage,
      description: "Managing waitlist queue for IrvineHacks.",
    },
    {
      id: "perms-page",
      title: "IrvineHacks – Perms Page",
      image: AddOrgsPage,
      description:
        "Revamp perms management page for directors. Article in progress.",
    },
    {
      id: "reviewer-page",
      title: "IrvineHacks – Reviewer Page",
      image: ReviewerPage,
      description:
        "Anonymizing applicants to remove reviewer bias. Article in progress.",
    },
    {
      id: "froggy-friend",
      title: "Froggy Friend",
      image: FroggyFriend,
      description:
        "Frog companion mobile app for healthy eating. Article in progress.",
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
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#1a1a1a",
                fontWeight: "400",
                transition: "text-decoration 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
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
                transition: "text-decoration 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
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
                transition: "text-decoration 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
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
          padding: "0px 40px 100px",
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Projects Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "40px",
              marginTop: "40px",
            }}
          >
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
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
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
