// src/components/AboutMe.js
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-inner">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-text-block">
            <p>
              Hi! I’m <strong>Irina</strong>, a Web &amp; Mobile Developer with a strong
              focus on UI/UX. I enjoy turning ideas into responsive, user-friendly
              websites and apps that solve real problems for people.
            </p>
            <p>
              I’m currently studying <strong>Mobile Web Developer using AI</strong> at
              triOS College in Toronto and working on real projects through my
              internship – from vehicle maintenance apps to booking systems and
              dashboards for parents of rhythmic gymnasts.
            </p>
            <p>
              My main tools are <strong>HTML, CSS, JavaScript, TypeScript, React,
              Angular, Swift/SwiftUI, Kotlin, PHP and MySQL</strong>. I care about clean
              design, clear structure and code that is easy to read and maintain.
            </p>
          </div>

          <div className="about-highlight">
            <h3>What I can help with</h3>
            <ul>
              <li>Building responsive web interfaces and dashboards</li>
              <li>Creating iOS UI with SwiftUI and mobile-first design</li>
              <li>Developing full-stack features with PHP/MySQL &amp; REST APIs</li>
              <li>Improving UX, flows and overall clarity of the product</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
