import React from "react";

const AISection = () => {
  return (
    <section className="editorial-section editorial-ai" id="ai">
      <div className="section-heading">
        <p className="section-label">AI-Assisted Development</p>

        <h2>
          Modern development workflows powered by AI-assisted engineering.
        </h2>

        <p>
          I use AI-assisted workflows to accelerate prototyping, debug frontend
          and API issues, improve feature planning, and iterate faster on
          production-style applications.
        </p>
      </div>

      <div className="editorial-ai__grid">
        <div className="editorial-ai__card">
          <span>AI-Assisted Workflows</span>

          <p>
            Applied GPT/Claude-based workflows for rapid prototyping,
            debugging, architecture exploration, and productivity optimization.
          </p>
        </div>

        <div className="editorial-ai__card">
          <span>Product-Focused Development</span>

          <p>
            Used AI-assisted iteration to explore user flows, improve feature
            planning, and identify edge cases before implementation.
          </p>
        </div>

        <div className="editorial-ai__card">
          <span>Automation & Intelligent Systems</span>

          <p>
            Explored AI-enhanced product systems, workflow automation,
            predictive logic, and smarter user interactions.
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