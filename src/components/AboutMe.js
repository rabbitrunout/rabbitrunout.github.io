import React from "react";

const AboutMe = () => {
  return (
    <section className="editorial-section editorial-about" id="about">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Design clarity. 
          Build with purpose.</h2>
      </div>

      <div className="editorial-about__grid">

        <div className="editorial-about__text">
          <p>
            I'm an AI & Full-Stack Developer passionate about building intelligent products,
workflow automation, and modern web & mobile applications.
          </p>

          <p>
            My work combines clean UI, scalable architecture, REST API
            integrations, and practical product thinking.
          </p>

          <p>
            I'm currently expanding my focus into AI workflow automation,
            n8n, AI Agents, RAG, MCP, and LLM-powered business solutions.
          </p>

          <p className="editorial-about__highlight">
            Building real products · API-driven development · AI workflow automation
          </p>
        </div>

        <div className="editorial-about__facts">

          <div className="fact-card">
            <span className="fact-card__label">Location</span>
            <strong>Mississauga, ON, Canada</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Currently</span>
            <strong>Software Developer Intern @ R-A-Ones</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Education</span>
            <strong>triOS College · Honours Graduate · 98% GPA</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Core Stack</span>
            <strong>React · SwiftUI · TypeScript · PHP · MySQL · REST APIs</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Current Focus</span>
            <strong>n8n · AI Agents · Claude API · RAG · MCP</strong>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;