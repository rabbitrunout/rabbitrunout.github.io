import React from "react";

const Contact = () => {
  return (
    <section className="editorial-section editorial-contact" id="connect">
      <div className="editorial-contact__inner">
        <p className="section-label">Contact</p>

        <h2>
          Let&apos;s build useful
          <br />
          software together
        </h2>

        <p className="editorial-contact__text">
          Frontend Developer building accessible web products with React,
          TypeScript, Next.js and practical AI integrations.
        </p>

        <div className="contact-tags">
          <span>Frontend</span>
          <span>React</span>
          <span>TypeScript</span>
          <span>Next.js</span>
          <span>AI Integration</span>
        </div>

        <div className="editorial-contact__links">
          <a href="mailto:irina.safronova0801@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/irina-safronova-dev/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/rabbitrunout"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="/Irina_Safronova_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
