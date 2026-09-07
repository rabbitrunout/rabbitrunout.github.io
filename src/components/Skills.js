import React from "react";

const Skills = () => {
  return (
    <section className="editorial-section editorial-skills" id="skills">
      <div className="section-heading">
        <p className="section-label">Capabilities</p>

        <h2>
          Technical Expertise
        </h2>
      </div>

      <div className="editorial-skills__grid">
        <article className="skill-block">
          <p className="skill-block__index">01</p>

          <h3>Frontend Engineering</h3>

          <p>
            React • TypeScript • Next.js • JavaScript • HTML • CSS •
            Responsive UI • Component Systems
          </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">02</p>

          <h3>API Integration</h3>

          <p>
            REST APIs • HTTP/JSON • Authentication • Validation •
            Loading and Error States
          </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">03</p>

          <h3>Quality & Accessibility</h3>

          <p>
            Responsive Testing • Keyboard Navigation • Semantic HTML •
            Lighthouse • WAVE • Debugging
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

          <h3>AI Integration</h3>

          <p>
            AI SDK • Groq • Zod • Tool Calling • Structured Outputs •
            AI-assisted Development
          </p>
        </article>
      </div>
    </section>
  );
};

export default Skills;
