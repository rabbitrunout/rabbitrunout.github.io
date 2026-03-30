import React from "react";

const Experience = () => {
  return (
    <section className="editorial-section editorial-experience" id="experience">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Building real product features through hands-on development.</h2>
      </div>

      <div className="editorial-experience__grid">
        <div className="editorial-experience__left">
          <p className="experience-role">Software Development Intern</p>
          <h3> R-A-Ones Corporation · PHD Parking</h3>
          <p className="experience-period">Toronto · Internship</p>
        </div>

        <div className="editorial-experience__right">
          <ul>
            <li>
              Developed and refined admin dashboard interfaces using React and modern frontend patterns.
            </li>
            <li>
              Worked with real product requirements, contributing to booking flows and data-driven UI.
            </li>
            <li>
              Collaborated in a structured Git workflow with feature branches and pull requests.
            </li>
            <li>
              Integrated frontend with backend APIs and improved component architecture.
            </li>
            <li>
              Focused on usability, clean UI structure, and scalable frontend logic.
            </li>
          </ul>

          <div className="editorial-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>JavaScript</span>
            <span>API Integration</span>
            <span>Git Workflow</span>
            <span>UI/UX</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;