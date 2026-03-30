import React from "react";

const AboutMe = () => {
  return (
    <section className="editorial-section editorial-about" id="about">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Design clarity. Build with purpose.</h2>
      </div>

      <div className="editorial-about__grid">
        <div className="editorial-about__text">
          <p>
            I’m a Mobile &amp; Web Developer with hands-on experience building
            real applications across mobile and web platforms.
          </p>

          <p>
            I work with SwiftUI, React, Angular, PHP, and MySQL to create
            structured, scalable, and user-focused products. My approach combines
            development with UI/UX thinking — ensuring that what I build is not
            only functional, but intuitive and visually refined.
          </p>

          <p>
            Through academic projects and internship experience, I’ve worked on
            full product flows — from interface design to frontend architecture
            and backend integration.
          </p>
        </div>

        <div className="editorial-about__facts">
          <div className="fact-card">
            <span className="fact-card__label">Location</span>
            <strong>Ontario, Canada</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Specialization</span>
            <strong>Mobile + Frontend Development Using AI </strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Tech Stack</span>
            <strong>SwiftUI · React · Angular · PHP · MySQL</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Focus</span>
            <strong>Product Thinking · UI/UX · Clean Architecture</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;