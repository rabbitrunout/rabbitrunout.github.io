import React from "react";

const Contact = () => {
  return (
    <section className="editorial-section editorial-contact" id="connect">
      <div className="editorial-contact__inner">
        <p className="section-label">Contact</p>

        <h2>
          Let&apos;s build
          <br />
          something together
        </h2>

        <p className="editorial-contact__text">
          Mobile & Web Developer open to internship and junior opportunities.
          <br />
          I’m focused on frontend, product development, and building real-world applications.
        </p>

        {/* 🔥 важный блок */}
        <p className="editorial-contact__availability">
          Currently available for internships and junior roles
        </p>

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