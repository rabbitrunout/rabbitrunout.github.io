import React from "react";

const Skills = () => {
  return (
    <section className="editorial-section editorial-skills" id="skills">
      <div className="section-heading">
        <p className="section-label">Capabilities</p>
        <h2>Technical range with a strong product and interface mindset  </h2>
      </div>

      <div className="editorial-skills__grid">

        <article className="skill-block">
          <p className="skill-block__index">01</p>
          <h3>Frontend</h3>
          <p>React · Angular · JavaScript · Responsive UI · Component Architectur</p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">02</p>
          <h3>Mobile</h3>
          <p>SwiftUI · iOS Development · MVVM Architecture · Core Data · Structured Mobile UI · Kotlin </p>
        </article>

        
        <article className="skill-block">
          <p className="skill-block__index">03</p>
          <h3>Backend & Data</h3>
          <p>PHP · REST APIs · MySQL · PostgreSQL </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">04</p>
          <h3>Tools</h3>
          <p>Git · GitHub · Agile (Scrum) · Jira · Trello </p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">05</p>
          <h3>Focus</h3>
          <p>UI/UX · Clean Architecture · API Integration · Debugging · Testing  </p>
        </article>
      </div>
    </section>
  );
};

export default Skills;