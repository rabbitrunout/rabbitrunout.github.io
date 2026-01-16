// src/components/AboutMe.js
import React from "react";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      {/* общий контейнер по ширине как у Projects */}
      <div className="section-wrapper">
        <div className="about-inner">
          <h2 className="section-title">About Me</h2>

          <div className="about-content">
  {/* Левая колонка — текст */}
  <div className="about-text-block">
    <p>
      Hi! I’m <strong>Irina</strong>, a <strong>Junior iOS / Mobile Developer</strong> with
      a strong focus on UI/UX. I enjoy turning ideas into clean, user-friendly
      mobile and web applications that solve real-world problems.
    </p>

    <p>
      I completed the <strong>Mobile Web Developer using AI</strong> program at
      triOS College in Toronto and I’m currently gaining real-world experience
      through an internship. My projects range from vehicle maintenance apps to
      booking systems and dashboards for parents of rhythmic gymnasts.
    </p>

    <p>
      I work with <strong>Swift and SwiftUI</strong> for iOS, as well as
      <strong> JavaScript, TypeScript, React, Angular, PHP, and MySQL</strong> on the web.
      I care about clean design, thoughtful UX, and writing maintainable,
      readable code with solid data logic.
    </p>
  </div>

  {/* Правая колонка — блок с пунктами */}
  <div className="about-highlight">
    <h3>What I can help with</h3>
    <ul>
      <li>Building iOS interfaces with SwiftUI and mobile-first design</li>
      <li>Developing responsive web dashboards and admin panels</li>
      <li>Implementing full-stack features with PHP/MySQL &amp; REST APIs</li>
      <li>Improving UX flows, usability, and product clarity</li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
