import React from "react";

const AboutMe = () => {
  return (
    <section className="editorial-section editorial-about" id="about">
      <div className="section-heading">
        <p className="section-label">About</p>
        <h2>Design clarity. Build with purpose.</h2>
      </div>

      <div className="editorial-about__grid">

        {/* LEFT */}
        <div className="editorial-about__text">
          <p>
            I’m an iOS & Frontend Developer focused on building structured,
            user-centered applications across mobile and web platforms.
          </p>

          <p>
            I specialize in SwiftUI and modern frontend frameworks like React and Next.js, 
            creating clean, scalable interfaces with strong attention to user experience.
          </p>

          <p>
            Through internship and academic projects, I’ve worked across full product flows — 
            from UI design and reusable components to API integration and real-world features.
          </p>

          <p className="editorial-about__highlight">
  Building real products · API-driven development · AI-assisted workflows
</p>
        </div>

        {/* RIGHT */}
        <div className="editorial-about__facts">

          <div className="fact-card">
            <span className="fact-card__label">Location</span>
            <strong>Mississauga, ON, Canada</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Currently</span>
            <strong>Software Developer Intern @ R-A-Ones</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Core Stack</span>
            <strong>SwiftUI · React · Next.js · PHP · MySQL</strong>
          </div>

          <div className="fact-card">
            <span className="fact-card__label">Focus</span>
            <strong>UI/UX · Clean Architecture · API Integration</strong>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;