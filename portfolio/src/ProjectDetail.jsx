import React from "react";
import { useParams, Link } from "react-router-dom";
import AvailabilityManagement from "./images/ih-availability-management.png";
import TemplateGallery from "./images/ih-template-gallery.png";
import AvailabilityManagementDirectorView from "./images/ih-availability-management-director.png";
import MyAvailability from "./images/ih-my-availability.png";
import ShiftsManagement from "./images/ih-shifts-management-1.png";
import ShiftsManagement2 from "./images/ih-shifts-management-2.png";
import ROTS from "./images/ih-rots.png";
import IrvineHacksLobby from "./images/ih-lobby.png";
import QueueImpact from "./images/ih-queue-impact.png";
import QueuePage from "./images/ih-queue-page.png";
import QueueMapping from "./images/ih-queue-mapping.png";
import QueueMapping2 from "./images/ih-queue-mapping-2.png";

export default function ProjectDetail() {
  const { id } = useParams();

  const projects = {
    "shift-scheduler": {
      title: "IrvineHacks – Shift Scheduler",
      description: "Automate shift scheduling for directors.",
      content: (
        <>
          <h2>Context</h2>
          <p>
            At IrvineHacks, we have 10-30 of shifts running each hour. The
            responsibility for scheduling organizers to cover all these shifts
            typically falls on a single director. The director has to balance an
            intricate web of constraints, such as preventing the same person
            from working both the early morning shift (7am) and the late night
            shift (11pm), distributing total hours fairly across everyone,
            accommodating role specific needs (photography shifts completed by
            marketing team), and making sure each shift has enough coverage.
            Even with the best intentions, something always gets overlooked.
          </p>

          <h2>Problems</h2>
          <p>
            The old workflow made this problem significantly worse. The process
            started with organizers filling out availability forms through
            Timeful. From there, the director would manually assign people to
            shifts using a Google Sheet and a lot of guesswork. With no
            systematic approach, assignment relied heavily on random picking and
            informal decisions. The entire process took at least 8 hours.{" "}
          </p>
          <br></br>

          <p>
            This manual approach led to a frustrating pattern: organizers who
            submitted the most availability ended up with the most shifts
            assigned to them, leading to burnout. People were essentially
            penalized for being flexible. On top of that, we consistently
            struggled to fill morning shifts. We'd end up with fewer than 50% of
            the organizers we actually needed to cover those time slots. That's
            when I decided to build an auto scheduler.
          </p>

          <h2>My Solution</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              width: "100%",
              margin: "30px 0",
            }}
          >
            <img
              src={AvailabilityManagement}
              alt="Scheduler screen 1"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
              }}
            />

            <img
              src={TemplateGallery}
              alt="Scheduler screen 2"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "12px",
              }}
            />
          </div>

          <h4>Technologies Used</h4>
          <p>Typescript, FastAPI, MongoDB, Claude Code</p>
          <br></br>
          <p>
            The core idea was to automate the assignment process while building
            something flexible enough to work for future hackathons. I
            structured the solution around a few key components. First,
            directors can create templates that define the shift structure for
            their event, essentially laying out what shifts exist, how many
            people each one needs, and which hours they cover across each day.
            This template concept makes the tool reusable because once you set
            it up for one hackathon, you can adapt it for the next one without
            starting from scratch.
          </p>
          <img
            src={AvailabilityManagementDirectorView}
            alt="Scheduler screen 1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          />

          <img
            src={MyAvailability}
            alt="Scheduler screen 2"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
              marginTop: "20px",
            }}
          />
          <p>
            Organizers then submit their availability through the system. While
            availability is being collected, the director gets a dashboard
            showing who's submitted and who hasn't, so they can follow up with
            stragglers before the deadline. Once submissions have been received,
            the director can lock organizer availabilities to prevent changes. I
            added this feature because we ran into a problem before where some
            organizers kept editing their availability to reduce their assigned
            hours, which made planning extremely difficult.
          </p>
          <br></br>
          <img
            src={ShiftsManagement}
            alt="Scheduler screen 2"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "10px",
            }}
          />
          <img
            src={ShiftsManagement2}
            alt="Scheduler screen 2"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          />
          <p>
            After all availabilities are locked in, the director sets a minimum
            shift points requirement, essentially, the minimum number of hours
            each organizer needs to work. The algorithm then automatically
            assigns people to shifts, taking into account all the constraints we
            struggled with manually: spreading out hours fairly, respecting role
            specific requests, and avoiding back to back incompatible shifts.
          </p>
          <br></br>
          <img
            src={ROTS}
            alt="Run of the show"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          />
          <p>
            The director can then review the auto generated schedule, make
            tweaks if needed, and once they're satisfied, publish it so
            organizers can see their assignments.
          </p>
          <br></br>
          <p>
            With this project, I was able to accomplish the following:{" "}
            <ul>
              <li>
                Automated shift assignment system, cutting scheduling time by
                87%
              </li>
              <li>
                Easily track organizers who have not submitted their
                availability
              </li>
              <li>Export assigned shifts directly to Google Calendar</li>
            </ul>
          </p>
        </>
      ),
    },

    arity: {
      title: "Arity",
      description: "Classifying turns with GPS coordinates.",
      content: (
        <>
          <h2>Overview</h2>
          <p>Article in progress.</p>
        </>
      ),
    },

    "queue-management": {
      title: "IrvineHacks – Queue Management + QR Code Systems",
      description: "Managing waitlist queue for IrvineHacks.",
      content: (
        <>
          <h2>Context</h2>
          <p>
            IrvineHacks is UC Irvine’s annual flagship hackathon with capacity
            for 400 participants. After COVID-19 passed, in person attendance
            numbers have declined and there was difficulty maxing out our venue.
            During IrvineHacks 2024, we had 371 attendees show up while
            IrvineHacks 2025 had 337 attendees. This was bad for our
            organization because we had a lot of open spots, and our resources
            were not being used. We were also overspending because we allocated
            money for the 400 hackers, but not all of those people would show
            up.
          </p>
          <br></br>
          <h2>Proposed Solution</h2>
          <p>
            I worked with two other members, Ethan and Yousef, to address this
            issue by first drafting a proposal. I realized that we could give
            applicants multiple opportunities to be guaranteed a spot on the day
            of the hackathon because a lot of people cancelled last minute.
            Hence, after the RSVP period, we gave waitlisted hackers a chance to
            RSVP yes to guarantee themselves a spot on a first come first serve
            basis. Those who were unable to RSVP would have another chance by
            coming in person and joining a waitlist queue to get a spot.
          </p>
          <br></br>

          <img
            src={QueueMapping}
            alt="Scheduler screen 1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <img
            src={QueueMapping2}
            alt="Scheduler screen 1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h2>Extended Problem</h2>
          <p>
            I later realized another problem was the process of our waitlist
            line. In the past, we had waitlisted hackers line up in person the
            whole period. Some hackers tried to stay in line and let accepted
            hackers go in front of them to try to be first in line even though
            we weren’t ready to take waitlisted participants yet. Another
            discouraging factor of joining this physical line was that many
            people would see a lot of people in the lobby and not want to join
            even though they would’ve been able to get a spot.
          </p>
          <br></br>
          <img
            src={IrvineHacksLobby}
            alt="Scheduler screen 1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <h2>Solution (in depth) </h2>
          <p>
            For the actual implementation, I migrated from manual search check
            in to a QR code based check in system. Users would be able to pull
            out their QR codes and our organizers would scan. The system would
            automatically pick up their applicant status (i.e., waitlisted,
            accepted, rejected) and add the user to the waitlist or check in the
            hacker immediately.{" "}
          </p>
          <br></br>

          <p>
            From the check in lead POV, the dashboard would show the status of
            all participants (shown below). The check in lead could pull 400 - X
            participants from the queue and send them an email when we were
            ready. We had a log on the side to keep track of how much time
            hackers had before pulling the next batch as well as a queue
            timer.{" "}
          </p>
          <br></br>

          <img
            src={QueuePage}
            alt="Scheduler screen 1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <img
            src={QueueImpact}
            alt="Scheduler screen 1"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <h2>Impact</h2>
          <p>
            The director can then review the auto generated schedule, make
            tweaks if needed, and once they're satisfied, publish it so
            organizers can see their assignments.
          </p>
          <br></br>
          <p>
            With this project, I was able to accomplish the following:{" "}
            <ul>
              <li>
                Developed a QR-based check in system using React, Rest APIs, and
                TypeScript
              </li>
              <li>
                Replaced manual attendee lookups for 400+ hackers and reduced
                check-in time by 50%
              </li>
              <li>
                Engineered a waitlist queue system with Python, FastAPI, and
                MongoDB that allows guests to leave and return, reducing lobby
                congestion by 25% and increasing waitlist join rates by 50%{" "}
              </li>
            </ul>
          </p>
          <br></br>
          <p>
            For the first time, our team had finally reached 400 with this new
            admissions/check in system while saving time for the check in
            process!
          </p>
        </>
      ),
    },

    "perms-page": {
      title: "IrvineHacks – Perms Page",
      description: "Revamp perms management page for directors.",
      content: (
        <>
          <h2>Overview</h2>
          <p>Article in progress.</p>
        </>
      ),
    },

    "reviewer-page": {
      title: "IrvineHacks – Reviewer Page",
      description: "Anonymizing applicants to remove reviewer bias.",
      content: (
        <>
          <h2>Overview</h2>
          <p>Article in progress.</p>
        </>
      ),
    },

    "froggy-friend": {
      title: "Froggy Friend",
      description: "Frog companion mobile app for healthy eating.",
      content: (
        <>
          <h2>Overview</h2>
          <p>Article in progress.</p>
        </>
      ),
    },
  };

  console.log(projects);
  const project = projects[id];
  console.log(project);

  if (!project) {
    return (
      <div style={{ padding: "40px" }}>
        <h1>Project not found</h1>

        <Link to="/work">← Back to work</Link>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", margin: 0, padding: 0 }}>
      <div
        style={{
          padding: "0px 40px 100px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {/* Back to work */}
          <Link
            to="/work"
            style={{
              display: "inline-block",
              marginBottom: "30px",
              color: "#1a1a1a",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            ← back to work
          </Link>

          {/* Entire Project Box */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.7)",
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
            }}
          >
            {/* Project Title */}
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "600",
                margin: "0 0 10px 0",
                color: "#1a1a1a",
              }}
            >
              {project.title}
            </h1>

            {/* Project Description */}
            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.6",
                color: "#666",
                margin: "0 0 40px 0",
              }}
            >
              {project.description}
            </p>

            {/* Project Content */}
            <div
              style={{
                fontSize: "18px",
                lineHeight: "1.8",
                color: "#333",
              }}
            >
              {project.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
