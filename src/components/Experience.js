import React from "react";

const Experience = () => {
  return (
    <section className="editorial-section editorial-experience" id="experience">
      <div className="section-heading">
        <p className="section-label">Experience</p>
        <h2>Building real product features through hands-on development.</h2>
        <p className="experience-note">
          Production-focused frontend development within real-world Agile workflows
        </p>
      </div>

      <div className="editorial-experience__grid">
        <div className="editorial-experience__left">
          <p className="experience-role">Software Developer Intern</p>

          <h3>R-A-Ones Corporation</h3>

          <p className="experience-product">
            PHD Parking Platform · Admin System
          </p>

          <p className="experience-period">
            Brampton, ON · Jan 2026 – May 2026
          </p>
        </div>

        <div className="editorial-experience__right">
          <ul className="experience-list">
            <li>
              Developed and shipped 5+ production-ready frontend features using
              React, Next.js, TypeScript, and REST APIs.
            </li>
            <li>
              Built 10+ reusable UI components, improving development consistency
              and scalability.
            </li>
            <li>
              Integrated REST APIs with authentication, validation, loading, and
              error-handling workflows.
            </li>
            <li>
              Improved booking workflows by optimizing user flows and reducing
              manual steps by ~20%.
            </li>
            <li>
              Reduced UI bugs by ~30% through debugging, testing, and edge-case
              handling.
            </li>
            <li>
              Collaborated in an Agile team using Git workflows, pull requests,
              and structured releases.
            </li>
            <li>
              Applied AI-assisted workflows for rapid prototyping, debugging,
              feature planning, and development productivity.
            </li>
          </ul>

          <p className="experience-architecture">
            Built with React, Next.js, TypeScript · API-driven architecture ·
            scalable UI systems · production workflows
          </p>

          <div className="experience-impact">
            <div className="impact-badge">
              <span>↓</span>
              <p>Reduced UI bugs by ~30%</p>
            </div>

            <div className="impact-badge">
              <span>⚡</span>
              <p>Improved workflow efficiency by ~20%</p>
            </div>

            <div className="impact-badge">
              <span>🚀</span>
              <p>Shipped 5+ production features</p>
            </div>
          </div>

          <div className="editorial-tags">
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>REST APIs</span>
            <span>Authentication</span>
            <span>Git Workflow</span>
            <span>Agile</span>
            <span>UI States</span>
            <span>AI Workflows</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;