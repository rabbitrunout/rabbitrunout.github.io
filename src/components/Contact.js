import React from "react";
import { Mail, Linkedin, Github, FileDown, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <div className="contact-bx">
        <h2>Contact Me</h2>
        <p>Let’s connect! You can reach out to me via email, LinkedIn, or GitHub.</p>

        {/* 🔗 Соцсети */}
        <div className="contact-links">
          <a href="mailto:irina.safronova0801@gmail.com" target="_blank" rel="noreferrer">
            <Mail size={28} /> Email
          </a>
          <a href="https://www.linkedin.com/in/irina-safronova-688130243/" target="_blank" rel="noreferrer">
            <Linkedin size={28} /> LinkedIn
          </a>
          <a href="https://github.com/rabbitrunout" target="_blank" rel="noreferrer">
            <Github size={28} /> GitHub
          </a>
        </div>

        {/* 📄 Резюме */}
        <div className="resume-buttons">
          <a href="/assets/Irina_Safronova_Resume.pdf" download className="resume-btn">
            <FileDown size={22} /> Download Resume
          </a>
          <a href="/assets/Irina_Safronova_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn secondary">
            <ExternalLink size={22} /> View Resume
          </a>
        </div>
      </div>
    </section>
  );
};
