import React from "react";
import { useParams, Link } from "react-router-dom";
import ArityDataInterpretation from "./images/arity-data-interpretation.jpg";
import ArityDataOverview from "./images/arity-data-overview.jpg";
import ArityDataPatternProcessing from "./images/arity-data-pattern-processing.jpg";
import ArityRealWorldPlotting from "./images/arity-real-world-plotting.jpg";
import ArityReplicability from "./images/arity-replicability.jpg";
import ArityResults from "./images/arity-results.jpg";
import AvailabilityManagement from "./images/ih-availability-management.png";
import FroggyFriend from "./images/appdemo.png";
import FroggyFriendShopSystem from "./images/frogShop.png";
import FroggyFriendAppConcept from "./images/froggyFriendPage.png";
import TemplateGallery from "./images/ih-template-gallery.png";
import AvailabilityManagementDirectorView from "./images/ih-availability-management-director.png";
import MyAvailability from "./images/ih-my-availability.png";
import ShiftsManagement from "./images/ih-shifts-management-1.png";
import ShiftsManagement2 from "./images/ih-shifts-management-2.png";
import ROTS from "./images/ih-rots.png";
import IrvineHacksLobby from "./images/ih-lobby.png";
import ReviewerPage from "./images/ih-reviewer-revamp.png";
import QueueImpact from "./images/ih-queue-impact.png";
import QueuePage from "./images/ih-queue-page.png";
import QueueMapping from "./images/ih-queue-mapping.png";
import QueueMapping2 from "./images/ih-queue-mapping-2.png";

export default function ProjectDetail() {
  const { projectId } = useParams();

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
          <p>Python, Typescript, FastAPI, MongoDB, Claude Code</p>
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
            <ul
              style={{
                paddingLeft: "1.5rem",
                marginLeft: 0,
                listStylePosition: "outside",
              }}
            >
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
          <h2>Context</h2>
          <p>
            As part of Break Through Tech's AI Studio program, my team partnered
            with Arity, a mobility data and analytics company, to analyze
            telematics data and classify different types of vehicle turning
            behavior. The goal was to better understand whether sensor data
            collected during a driving event could be used to distinguish
            between behaviors such as lane changes, normal turns, sharp turns,
            and U-turns.
          </p>

          <br />
          <img
            src={ArityDataOverview}
            alt="Data processing pipeline"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <p>
            The dataset contained telematics information from both iOS and
            Android devices across multiple event states. Depending on the
            state, the data included GPS-based measurements, gyroscope
            measurements, speed changes, angular changes, lateral acceleration,
            and radius information. Because vehicle turns can vary significantly
            in shape and intensity, one of our main challenges was determining
            which features contained meaningful signals for separating different
            types of driving behavior.
          </p>

          <br />

          <img
            src={ArityDataPatternProcessing}
            alt="Data processing pipeline"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h2>Proposed Solution</h2>
          <p>
            Our team approached the problem using a combination of unsupervised
            and supervised machine learning. We first explored clustering
            algorithms to determine whether the underlying telematics data
            naturally formed groups corresponding to different types of vehicle
            turns. We evaluated K-Means, DBSCAN, and HDBSCAN using metrics
            including silhouette score, Gini score, noise percentage, and the
            number of clusters produced.
          </p>

          <br />

          <p>
            After identifying useful cluster structures, we trained supervised
            Random Forest models to predict the resulting classifications from
            the telematics features. This allowed us to compare how well
            different states and sensor signals could be used to classify
            vehicle behavior.
          </p>

          <br />

          <h4>Technologies Used</h4>
          <p>
            Python, Pandas, NumPy, Scikit-learn, K-Means, DBSCAN, HDBSCAN,
            Random Forest, Matplotlib
          </p>

          <h2>Feature Engineering</h2>
          <p>
            Before modeling, we engineered several features to better capture
            the characteristics of a vehicle's movement. Rather than relying
            only on raw sensor values, we created metrics that represented the
            speed, angle, and intensity of each turning event.
          </p>

          <br />

          <p>
            One feature, <strong>dv</strong>, represented the absolute change in
            speed, helping distinguish between aggressive and moderate changes
            in vehicle movement. We also created <strong>turn_intensity</strong>
            , a composite metric combining curvature, speed, and lateral
            acceleration to measure how sharp or abrupt a turn was.
          </p>

          <br />

          <p>
            To better represent the geometry of each event, we created
            <strong> angle_norm</strong>, which normalized angular changes
            between 0 and 1, and <strong>radius_log</strong>, a logarithmic
            transformation of GPS and MEMS radius measurements. These features
            helped distinguish tighter turns and U-turns from wider turns and
            highway curves.
          </p>

          <br />

          <h2>Modeling Challenge</h2>
          <p>
            One of our biggest findings was that the data did not always
            naturally separate into clear groups. For example, when modeling
            State 1 data, HDBSCAN was able to identify some U-turns but
            struggled to differentiate between other types of turns. The
            resulting clusters were also highly imbalanced, with one cluster
            containing the majority of the events.
          </p>

          <br />

          <p>
            To better understand this issue, we manually examined the
            distribution of turn angles. The majority of events fell into the
            gentle turn category, while sharp turns and U-turns represented only
            a small percentage of the dataset. This imbalance made it difficult
            for density-based clustering algorithms to reliably separate every
            type of vehicle maneuver.
          </p>

          <br />

          <h2>Solution</h2>
          <p>
            After evaluating multiple clustering techniques, we found that
            K-Means produced the strongest overall results for our data. We used
            silhouette score, Gini score, noise percentage, and Adjusted Rand
            Index (ARI) to evaluate how well the generated clusters aligned with
            manually defined turn categories.
          </p>

          <br />

          <p>
            For State 1, the best K-Means model achieved a silhouette score of
            0.309, a Gini score of 0.342, 0% noise, and an ARI score of 0.274.
            While the clustering was not perfect, the resulting groups showed
            interpretable real-world behavior patterns.
          </p>

          <br />

          <p>
            The clusters represented different driving behaviors, including lane
            changes with smaller angle changes and larger radii, sharp left
            turns with smaller radii, normal left turns, and U-turn-like
            maneuvers. This helped us move beyond simply evaluating numerical
            metrics and interpret what the clusters represented in a real
            driving context.
          </p>

          <br />

          <img
            src={ArityResults}
            alt="K-Means clustering results"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <img
            src={ArityDataInterpretation}
            alt="Real world vehicle turn clustering visualization"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <img
            src={ArityRealWorldPlotting}
            alt="Real world vehicle turn clustering visualization"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h2>Supervised Learning</h2>
          <p>
            After exploring the structure of the data through clustering, we
            trained Random Forest models to predict the classifications using
            the engineered telematics features. The supervised models performed
            strongly across all three states.
          </p>

          <br />

          <img
            src={ArityReplicability}
            alt="Random Forest model performance"
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
            Through this project, our team found that supervised learning could
            reliably classify the vehicle turning behaviors identified during
            our analysis. The Random Forest model achieved 98% accuracy for
            State 0 and 96% accuracy for both State 1 and State 2.
          </p>

          <br />

          <p>With this project, I was able to accomplish the following:</p>

          <ul
            style={{
              paddingLeft: "1.5rem",
              marginLeft: 0,
              listStylePosition: "outside",
            }}
          >
            <li>
              Analyzed telematics data from iOS and Android devices to classify
              vehicle turning behavior
            </li>
            <li>
              Engineered features including normalized angle change, turn
              intensity, speed change, and logarithmic turn radius to better
              represent vehicle movement
            </li>
            <li>
              Evaluated K-Means, DBSCAN, and HDBSCAN clustering models using
              silhouette score, Gini score, noise percentage, and ARI
            </li>
            <li>
              Trained Random Forest models that achieved up to 98%
              classification accuracy across vehicle event states
            </li>
          </ul>

          <br />

          <p>
            One of our key findings was that clustering was useful for exploring
            and validating patterns in the data, but the supervised Random
            Forest models were ultimately more effective for classification.
            This suggested that future versions of the project could focus on
            optimizing supervised models and validating their performance using
            new telematics data.
          </p>
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

          <h4>Technologies Used</h4>
          <p>
            Python, Typescript, FastAPI, MongoDB, SendGrid Email API, Claude
            Code
          </p>

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
            <ul
              style={{
                paddingLeft: "1.5rem",
                marginLeft: 0,
                listStylePosition: "outside",
              }}
            >
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
          <h2>Context</h2>
          <p>
            Managing a large-scale hackathon requires a robust application
            review process that prioritizes fairness and efficiency. IrvineHacks
            sought to develop a system that would standardize evaluations across
            a diverse reviewer pool and streamline administrative workflows. The
            traditional approach to application review can be subject to
            inconsistencies in methodology and reviewer assignment, which can
            impact the overall quality and perception of the selection process.
          </p>
          <h4>Technologies Used</h4>
          <p>Python, React, Typescript, FastAPI, MongoDB, Claude Code</p>
          <img
            src={ReviewerPage}
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
          <h2>Solution</h2>
          <p>
            We built an anonymized reviewer system that automates and
            standardizes the application evaluation workflow. The core technical
            implementation includes an anonymization engine that assigns
            randomly generated identifiers to each applicant, decoupling
            reviewer assignments from applicant identity. This ensures
            evaluations are conducted on application merit alone. The system
            automatically distributes applicants to reviewers based on workload
            balancing algorithms, preventing manual reviewer selection and
            ensuring uniform coverage across the applicant pool. On the backend,
            we implemented a database layer that tracks review assignments,
            scores, and decisions while maintaining the anonymity barrier until
            final determinations are made. The platform also includes
            administrative tools for quality control. A void function allows
            organizers to flag applications that don't meet venue eligibility
            requirements (such as age restrictions), while an auto-accept
            feature recognizes contributors who have committed to mentoring
            roles at the event. This dual-path system reduces manual processing
            time while ensuring special cases are handled appropriately. The
            interface provides organizers with a streamlined dashboard to manage
            exceptions and finalize admissions decisions.
          </p>
          <br></br>
          <h2>Impact</h2>
          <p>
            By implementing this system, IrvineHacks achieved greater
            consistency in its review process and reduced administrative
            workload for organizers. The anonymization framework creates a more
            structured evaluation environment that supports fair assessment
            across all applicants. The automated assignment and quality control
            features minimize processing errors and accelerate the admission
            timeline, allowing organizers to focus on other aspects of event
            planning.
          </p>
          <br></br>
        </>
      ),
    },

    "froggy-friend": {
      title: "Froggy Friend",
      description: "Frog companion mobile app for healthy eating.",
      content: (
        <>
          <img
            src={FroggyFriend}
            alt="Froggy Friend app concept"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />
          <h2>Context</h2>
          <p>
            As a college student, I frequently struggled with maintaining
            healthy eating habits. I noticed that this was a trend with many
            other peers. Between packed schedules, limited budgets, and
            overwhelming food choices, many students know they should eat
            healthier but struggle to follow through.
          </p>
          <br></br>
          <p>
            To understand this problem better, my team of 4 surveyed 20 students
            about their barriers to healthy eating. Time constraints, cost, and
            limited healthy options all appeared frequently in responses. But
            the most common barrier mentioned by the overwhelming majority was
            the difficulty in finding healthy food options that fit their
            lifestyle. Students weren't lacking willpower, instead they were
            lacking accessible solutions and motivation.
          </p>
          <p>
            Existing nutrition apps felt clinical and impersonal. They focused
            on tracking calories and macros, creating guilt and burden rather
            than joy. We realized the real opportunity wasn't to build another
            calorie counter it was to make healthy eating emotionally rewarding
            by connecting it to something students care about.
          </p>
          <br></br>

          <h2>Proposed Solution</h2>
          <p>
            Working with a team of 4, we brainstormed multiple approaches but
            kept coming back to one core insight: what if the problem wasn't
            making students track their food, but rather giving them a reason to
            care about eating well?
          </p>
          <p>
            That's how <strong>Froggy Friend</strong> was created. Our main goal
            was to get users to care for a digital frog companion that directly
            reflects their eating choices. The frog's health bar decreases every
            10 minutes, creating an ongoing need for care. When users log
            healthy meals, the frog's health increases. The healthier they eat,
            the happier their frog becomes.
          </p>
          <p>
            Food logging is simple, just take a photo and describe what you ate.
            No calorie counting, no macros, no judgment. Users earn coins from
            logging meals, which they can spend on outfits and food for their
            frog. By reframing health from "I need to eat better for myself" to
            "I need to eat better for my frog," we tap into emotional investment
            and responsibility.
          </p>
          <br></br>

          <img
            src={FroggyFriendAppConcept}
            alt="Froggy Friend app concept"
            style={{
              width: "auto",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <h4>Technologies Used</h4>
          <p>React, TypeScript, Python, FastAPI, MongoDB, Claude Code</p>

          <h2>Extended Problem</h2>
          <p>
            Once we started building the prototype, we discovered several design
            challenges that threatened the core appeal of the app. The health
            decay system seemed simple on paper, but in practice it revealed
            complex tradeoffs.
          </p>
          <p>
            If the frog's health decayed too quickly, users would feel anxious
            or guilty when they missed meals exactly the negative emotional
            experience we were trying to avoid. But if it decayed too slowly,
            there'd be no sense of urgency or motivation. We needed to find the
            sweet spot where the frog felt like it needed care without making
            users feel bad about normal eating patterns.
          </p>
          <p>
            Another challenge was food logging friction. We wanted users to log
            meals easily, but without requiring detailed nutritional analysis
            that would make it feel like a chore. How could we keep the barrier
            low while still providing meaningful feedback? And how would we
            categorize foods as healthy or unhealthy without being judgmental or
            requiring excessive complexity?
          </p>
          <p>
            The reward loop also needed careful consideration. The coin economy
            had to feel achievable earning enough to buy shop items should feel
            rewarding, not grindy. And the shop items themselves had to matter
            to users, driving engagement beyond just keeping the frog alive.
          </p>
          <br></br>

          <h2>Solution</h2>
          <p>
            After testing with early users, we settled on a 10 minute decay
            interval for the frog's health bar. This creates enough urgency to
            feel real without creating anxiety. If a user misses one meal,
            they're not punished. However, if they go half a day without
            logging, they'll notice their frog getting sad.
          </p>
          <p>
            The frog's visual state changes dramatically based on health
            thresholds. Above 90 health, the frog is animated hopping and
            jumping—pure joy. Between 30-89, it sits peacefully. Below 30, it
            cries. Seeing a sad frog is motivation enough to log a meal.
          </p>
          <br></br>

          <p>
            The core friction point was making food logging effortless. Users
            take a photo of their meal and describe what they ate in a sentence
            or two. No complex nutritional forms, no calorie counting, no
            judgment. The system recognizes the input and categorizes it on a
            simple healthy/unhealthy scale, giving appropriate health increases
            to the frog.
          </p>
          <p>
            Every meal logged earns coins proportional to how healthy that meal
            is. Coins can be spent in the shop to purchase outfits, accessories,
            and special food items for the frog. This creates a secondary reward
            loop beyond just keeping the frog alive. Even when the frog is at
            full health, users want to earn enough coins to buy that new hat or
            special treat.
          </p>
          <br></br>

          <img
            src={FroggyFriendShopSystem}
            alt="Shop and customization system"
            style={{
              width: "auto",
              height: "auto",
              display: "block",
              borderRadius: "12px",
              marginBottom: "20px",
            }}
          />

          <p>
            The frontend is built with React and TypeScript, switching between
            frog states based on the frog's health data. When the app loads, it
            fetches the user's current health and coins from the MongoDB
            database via FastAPI endpoints. A timer triggers health decay every
            10 minutes. When the user logs food, a POST request updates the
            backend, which then sends back new health and coin values, and React
            rerenders the frog animation accordingly.
          </p>
          <br></br>
          <p>
            This architecture ensures the frog's state is accurate, even if the
            user closes and reopens the app. The health continues to decay in
            the background, and when they return, they see exactly where their
            frog's health is, creating real urgency that keeps users coming
            back.
          </p>
          <br></br>

          <h2>Impact</h2>
          <p>
            Froggy Friend exceeded our expectations in execution, design, and
            user reception. We tested the app with peers and received
            overwhelmingly positive feedback about both the concept and the
            implementation. The emotional connection to the frog companion was
            immediate and powerful.
          </p>
          <br></br>
          <p>
            Out of 52 participants competing in the hackathon, we won the
            judges' prize for best execution of design thinking. The judges
            specifically noted that they would personally use the app, which
            validated our entire approach to solving the healthy eating problem
            through emotional connection rather than clinical tracking.
          </p>

          <br></br>
          <p>
            Froggy Friend proves that technology can drive meaningful behavior
            change when it taps into emotion and intrinsic motivation. By
            framing healthy eating as an act of care rather than self
            discipline, we transformed a common student struggle into a fun,
            engaging game.
          </p>
        </>
      ),
    },
  };

  const project = projects[projectId];

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
