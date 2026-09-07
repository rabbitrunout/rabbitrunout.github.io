import React from "react";

const AboutMe = () => {
  return (
    <section className="editorial-section editorial-about" id="about">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Product-minded frontend development.</h2>
      </div>

      <div className="editorial-about__grid">

        <div className="editorial-about__text">
          <p>
            I&apos;m a frontend developer based in Mississauga, Ontario, building
            responsive and accessible applications with React, TypeScript and Next.js.
          </p>

          <p>
            During my practicum at R-A-Ones Corporation, I shipped frontend
            features for the PHD Parking platform and worked with reusable
            components, REST APIs, validation, loading states and error handling.
          </p>

          <p>
            At FlyRank AI, I&apos;m expanding that foundation through practical
            AI-integrated frontend work, accessibility testing and product-focused development.
          </p>

          <p className="editorial-about__highlight">
            React · TypeScript · Next.js · REST APIs · Accessible UI · AI integration
          </p>
        </div>

        <div className="editorial-about__facts">

          <div className="fact-card">
            <span className="fact-card__label">Location</span>
            <strong>Mississauga, ON, Canada</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Currently</span>
            <strong>Front-end AI Engineering Intern @ FlyRank AI</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Work authorization</span>
            <strong>Canadian Permanent Resident</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Core Stack</span>
            <strong>React · TypeScript · Next.js · REST APIs</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Education</span>
            <strong>triOS College · Honours Graduate · 98% GPA</strong>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
