import React from "react";

const Skills = () => {
  return (
    <section className="editorial-section editorial-skills" id="skills">
      <div className="section-heading">
        <p className="section-label">Capabilities</p>
        <h2>Technical range with a strong product and interface mindset.</h2>
      </div>

      <div className="editorial-skills__grid">
        <article className="skill-block">
          <p className="skill-block__index">01</p>
          <h3>Mobile</h3>
          <p>SwiftUI · iOS · Kotlin basics</p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">02</p>
          <h3>Frontend</h3>
          <p>HTML · CSS · JavaScript · Angular · React</p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">03</p>
          <h3>Backend & Data</h3>
          <p>PHP · MySQL · REST API · CRUD logic</p>
        </article>

        <article className="skill-block">
          <p className="skill-block__index">04</p>
          <h3>Design</h3>
          <p>UI/UX · Graphic Design · Product Thinking</p>
        </article>
      </div>
    </section>
  );
};

export default Skills;