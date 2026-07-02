import React from "react";

const Contact = () => {
  return (
    <section className="editorial-section editorial-contact" id="connect">
      <div className="editorial-contact__inner">
        <p className="section-label">Contact</p>

        <h2>
          Let&apos;s build
          <br />
          software people love to use
        </h2>

        <p className="editorial-contact__text">
          AI & Full-Stack Developer building intelligent products, workflow automation,
and modern web & mobile applications.
        </p>

        <div className="contact-tags">
          <span>AI Engineering</span>
          <span>Full-Stack</span>
          <span>Frontend</span>
          <span>Mobile iOS</span>
          <span>React</span>
        </div>

        <div className="editorial-contact__links">
          <a href="mailto:irina.safronova0801@gmail.com">Email</a>

          <a
            href="https://www.linkedin.com/in/irina-safronova-688130243/"
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