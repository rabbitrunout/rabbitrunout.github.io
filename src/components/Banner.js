import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import mainPhoto from "../assets/img/mainPhoto.png";

const Banner = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="banner editorial-hero" id="home">
      <Container>
        <Row className="editorial-hero__row align-items-center">

          {/* LEFT */}
          <Col xs={12} lg={7} className="editorial-hero__left">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={`editorial-hero__content ${isVisible ? "is-visible" : ""}`}>

                  <p className="section-label">Portfolio / 2026</p>

                  <h1 className="editorial-hero__title">
  <span className="editorial-hero__title-line">AI &amp;</span>
  <span className="editorial-hero__title-line"> Full-Stack</span>
  <span className="editorial-hero__title-line">Developer</span>
</h1>

  <p className="editorial-hero__subtitle">
  Building AI-powered web and mobile products with React, SwiftUI, TypeScript, REST APIs and modern automation workflows.
  <br />
  Focused on workflow automation, AI agents, scalable UI systems, and practical solutions for real-world business problems.
</p>

<div className="editorial-hero__meta">
  <span>AI-Powered Development</span>
  <span>React</span>
  <span>SwiftUI</span>
  <span>TypeScript</span>
  <span>REST APIs</span>
  <span>Workflow Automation</span>
</div>

<div className="editorial-hero__marquee">
  <div className="editorial-hero__marquee-track">

    <span>React</span>
    <span>SwiftUI</span>
    <span>TypeScript</span>
    <span>REST APIs</span>
    <span>AI-Powered Products</span>
    <span>Workflow Automation</span>
    <span>Full-Stack Development</span>
    <span>Clean Architecture</span>
    <span>UI / UX</span>

    <span>React</span>
    <span>SwiftUI</span>
    <span>TypeScript</span>
    <span>REST APIs</span>
    <span>AI-Powered Products</span>
    <span>Workflow Automation</span>
    <span>Full-Stack Development</span>
    <span>Clean Architecture</span>
    <span>UI / UX</span>

  </div>
</div>

                  <div className="editorial-hero__actions">
                    <button
                      type="button"
                      onClick={() => scrollToSection("featured")}
                      className="editorial-btn editorial-btn--primary"
                    >
                      <span>View Projects</span>
                      <ArrowRightCircle size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={() => scrollToSection("connect")}
                      className="editorial-btn editorial-btn--ghost"
                    >
                      <span>Let&apos;s Connect</span>
                    </button>
                  </div>

                <p className="editorial-hero__proof">
  AI & Full-Stack Developer • React • SwiftUI • REST APIs
</p>

<div className="editorial-hero__stats">
  <div>
    <strong>10+</strong>
    <span>Projects</span>
  </div>

  <div>
    <strong>5+</strong>
    <span>Production Features</span>
  </div>

  <div>
    <strong>AI</strong>
    <span>Workflow Focus</span>
  </div>
</div>

                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* RIGHT */}
          <Col xs={12} lg={5}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={`editorial-hero__visual ${isVisible ? "is-visible" : ""}`}>

                  <div className="editorial-hero__avatar-top">
                    <img
                      src={mainPhoto}
                      alt="Irina S"
                      className="editorial-hero__avatar"
                    />
                    <div className="editorial-hero__avatar-meta">
  <span>Irina S</span>
  <strong>Building AI-powered product systems</strong>
</div>
                  </div>

                  <div className="editorial-hero__project-card">
                    <img
                      src="/projects/mobile/glowi_mobile/1.png"
                      alt="Glowi Product System preview"
                      className="editorial-hero__project-image"
                    />
                  </div>

                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Banner;