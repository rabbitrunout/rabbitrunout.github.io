import React from "react";

const AISection = () => {
  return (
    <section className="editorial-section editorial-ai" id="ai">
      <div className="section-heading">
        <p className="section-label">AI-Assisted Development</p>

        <h2>
          Modern development workflows powered by AI-assisted engineering.
        </h2>
      </div>

      <div className="editorial-ai__grid">

        <div className="editorial-ai__card">
          <span>AI-Assisted Workflows</span>

          <p>
            Using GPT/Claude-based workflows for rapid prototyping,
            debugging, architecture exploration, and development productivity.
          </p>
        </div>

        <div className="editorial-ai__card">
          <span>Product-Focused Development</span>

          <p>
            Combining frontend engineering, product thinking, and AI-assisted
            iteration to improve user experience and feature development.
          </p>
        </div>

        <div className="editorial-ai__card">
          <span>Automation & Intelligent Systems</span>

          <p>
            Exploring AI-enhanced product systems, predictive logic,
            workflow optimization, and smart user interactions.
          </p>
        </div>

      </div>

      <div className="editorial-ai__footer">
        AI-assisted workflows • Product-focused engineering • Real-world development experience
      </div>
    </section>
  );
};

export default AISection;