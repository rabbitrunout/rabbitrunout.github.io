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
  <span className="editorial-hero__title-line">iOS</span>
  <span className="editorial-hero__title-line">&amp; Frontend</span>
  <span className="editorial-hero__title-line">Developer</span>
</h1>

  <p className="editorial-hero__subtitle">
  Building mobile and web products with SwiftUI, React, and AI-assisted development workflows.
  <br />
  Focused on scalable architecture, maintainable UI systems, and real-world product delivery.
</p>

<div className="editorial-hero__meta">
  <span>SwiftUI</span>
  <span>React / Next.js</span>
  <span>TypeScript</span>
  <span>REST APIs</span>
  <span>AI-assisted workflows</span>
</div>

<div className="editorial-hero__marquee">
  <div className="editorial-hero__marquee-track">
    <span>SwiftUI</span>
    <span>React</span>
    <span>Next.js</span>
    <span>TypeScript</span>
    <span>REST APIs</span>
    <span>MVVM</span>
    <span>PHP</span>
    <span>MySQL</span>
    <span>AI-Assisted Development</span>

    <span>SwiftUI</span>
    <span>React</span>
    <span>Next.js</span>
    <span>TypeScript</span>
    <span>REST APIs</span>
    <span>MVVM</span>
    <span>PHP</span>
    <span>MySQL</span>
    <span>AI-Assisted Development</span>
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
  Software Developer Intern @ R-A-Ones · Frontend + iOS · AI-assisted engineering workflows
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
    <strong>3</strong>
    <span>Mobile Apps</span>
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
                      <strong>Building Glowi Platform</strong>
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