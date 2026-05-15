import React from "react";

const Skills = () => {
  return (
    <section className="editorial-section editorial-skills" id="skills">
      <div className="section-heading">
        <p className="section-label">Capabilities</p>

        <h2>
          Technical range with a strong product and engineering mindset.
        </h2>
      </div>

      <div className="editorial-skills__grid">
        <article className="skill-block">
          <p className="skill-block__index">01</p>

          <h3>Frontend Engineering</h3>

          <p>
            React • Next.js • Angular • TypeScript • JavaScript •
            Responsive UI • Component Systems
          </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">02</p>

          <h3>Mobile Development</h3>

          <p>
            SwiftUI • MVVM • Core Data • iOS Architecture •
            State-Driven UI
          </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">03</p>

          <h3>Backend & Data</h3>

          <p>
            PHP • MySQL • PostgreSQL • REST APIs • CRUD Operations •
            Authentication Flows
          </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">04</p>

          <h3>Tools & Workflow</h3>

          <p>
            Git • GitHub • Agile (Scrum) • Swagger • Jira •
            API Testing • VS Code
          </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">05</p>

          <h3>Product & Architecture</h3>

          <p>
            UI/UX • Dashboard Systems • API Integration •
            Reusable Components • Debugging • Testing
          </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">06</p>

          <h3>AI & Modern Development</h3>

          <p>
            AI-assisted workflows • Rapid Prototyping •
            Productivity Optimization • Workflow Automation
          </p>
        </article>
      </div>
    </section>
  );
};

export default Skills;