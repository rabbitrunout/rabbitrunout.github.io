import React from "react";

const Contact = () => {
  return (
    <section className="editorial-section editorial-contact" id="connect">
      <div className="editorial-contact__inner">
        <p className="section-label">Contact</p>

        <h2>
          Let’s build something meaningful  
        </h2>

        <p className="editorial-contact__text">
          I’m open to junior and entry-level opportunities in frontend, mobile, or full-stack development.  

        </p>

        <p className="editorial-contact__availability">
          Open to <strong>Junior Mobile / Frontend Developer roles</strong> and
          product-focused teams.
        </p>

        <p className="editorial-contact__extra">
          Feel free to reach out — I’d be happy to connect.
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