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
                Hi! I’m <strong>Irina</strong>, a Web &amp; Mobile Developer with a strong
                focus on UI/UX. I enjoy turning ideas into responsive, user-friendly
                websites and mobile applications that solve real-world problems.
              </p>

              <p>
                I’m currently studying <strong>Mobile Web Developer using AI</strong> at
                triOS College in Toronto and working on real industry projects during
                my internship — from vehicle maintenance apps to booking systems and
                dashboards for parents of rhythmic gymnasts.
              </p>

              <p>
                My main tools are <strong>HTML, CSS, JavaScript, TypeScript, React,
                Angular, Swift/SwiftUI, Kotlin, PHP and MySQL</strong>. I care about
                clean design, thoughtful UX, and writing code that’s easy to read
                and maintain.
              </p>
            </div>

            {/* Правая колонка — блок с пунктами */}
            <div className="about-highlight">
              <h3>What I can help with</h3>
              <ul>
                <li>Building responsive web interfaces and dashboards</li>
                <li>Creating iOS UI with SwiftUI and mobile-first design</li>
                <li>Developing full-stack features with PHP/MySQL &amp; REST APIs</li>
                <li>Improving UX, flows, and overall product clarity</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
