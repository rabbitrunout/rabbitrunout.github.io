import React from "react";

const AISection = () => {
  return (
    <section className="editorial-section editorial-ai" id="ai">
      <div className="section-heading">
        <p className="section-label">Frontend + AI</p>

        <h2>
          Practical AI integration, not AI for its own sake.
        </h2>

        <p>
          I use AI where it improves a real workflow: structured product outputs,
          faster iteration, clearer edge-case analysis, and more useful interfaces.
        </p>
      </div>

      <div className="editorial-ai__grid">
        <div className="editorial-ai__card">
          <span>Structured AI Features</span>

          <p>
            Building Glowi&apos;s read-only club-management agent with structured
            Urgent, Soon and FYI outputs.
          </p>
        </div>

        <div className="editorial-ai__card">
          <span>Validated Data Flows</span>

          <p>
            Using AI SDK, Groq, Zod and tool calling to keep application outputs
            predictable and useful.
          </p>
        </div>

        <div className="editorial-ai__card">
          <span>AI-Assisted Engineering</span>

          <p>
            Applying Claude and ChatGPT to planning, debugging, documentation
            and systematic review while keeping implementation decisions human-led.
          </p>
        </div>
      </div>

      <div className="editorial-ai__footer">
        AI SDK • Groq • Zod • Tool calling • Product-focused frontend engineering
      </div>
    </section>
  );
};

export default AISection;
