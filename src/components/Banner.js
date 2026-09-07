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

                  <p className="section-label">Frontend Developer · Mississauga, ON</p>

                  <h1 className="editorial-hero__title">
  <span className="editorial-hero__title-line">Frontend</span>
  <span className="editorial-hero__title-line">Developer</span>
</h1>

  <p className="editorial-hero__subtitle">
  I build responsive, accessible web products with React, TypeScript and Next.js,
  using AI where it makes the product more useful.
</p>

<div className="editorial-hero__meta">
  <span>React</span>
  <span>TypeScript</span>
  <span>Next.js</span>
  <span>REST APIs</span>
  <span>Accessibility</span>
  <span>AI Integration</span>
</div>

<div className="editorial-hero__marquee">
  <div className="editorial-hero__marquee-track">

    <span>React</span>
    <span>TypeScript</span>
    <span>Next.js</span>
    <span>REST APIs</span>
    <span>Accessible UI</span>
    <span>AI Integration</span>

    <span>React</span>
    <span>TypeScript</span>
    <span>Next.js</span>
    <span>REST APIs</span>
    <span>Accessible UI</span>
    <span>AI Integration</span>

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

                    <a
                      href="/Irina_Safronova_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-btn editorial-btn--ghost"
                    >
                      <span>View Resume</span>
                    </a>
                  </div>

                <p className="editorial-hero__proof">
  Canadian permanent resident · Open to frontend and software opportunities
</p>

<div className="editorial-hero__stats">
  <div>
    <strong>10+</strong>
    <span>Reusable Components</span>
  </div>

  <div>
    <strong>5+</strong>
    <span>Production Features</span>
  </div>

  <div>
    <strong>100</strong>
    <span>Lighthouse Accessibility</span>
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
                      alt="Irina Safronova"
                      className="editorial-hero__avatar"
                    />
                    <div className="editorial-hero__avatar-meta">
  <span>Irina Safronova</span>
  <strong>React · TypeScript · Next.js</strong>
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
