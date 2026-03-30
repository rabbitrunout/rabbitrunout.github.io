import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";
import mainPhoto from "../assets/img/mainPhoto.png";

const Banner = () => {
  return (
    <section className="banner editorial-hero" id="home">
      <Container>
        <Row className="editorial-hero__row align-items-center">
          <Col xs={12} lg={7} className="editorial-hero__left">
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={`editorial-hero__content ${
                    isVisible ? "is-visible" : ""
                  }`}
                >
                  {/* <span className="editorial-kicker">Irina S</span> */}

                  <h1 className="editorial-hero__title">
                    <span className="editorial-hero__title-line">Mobile</span>
                    <span className="editorial-hero__title-line">Web</span>
                    <span className="editorial-hero__title-line">Developer</span>
                  </h1>

                  <p className="editorial-hero__subtitle">
                    Mobile &amp; Web Developer with hands-on experience building
                    real applications using SwiftUI, React, Angular, and backend
                    systems.
                    <br />
                    <br />
                    Focused on clean UI, structured frontend architecture, and
                    product-driven development.
                  </p>

                  <div className="editorial-hero__meta">
                    <span>SwiftUI</span>
                    <span>React / Angular</span>
                    <span>PHP / MySQL</span>
                    <span>UI / UX</span>
                  </div>

                  <div className="editorial-hero__actions">
                    <HashLink
                      smooth
                      to="#featured"
                      className="editorial-btn editorial-btn--primary"
                    >
                      <span>Selected Work</span>
                      <ArrowRightCircle size={20} />
                    </HashLink>

                    <HashLink
                      smooth
                      to="#connect"
                      className="editorial-btn editorial-btn--ghost"
                    >
                      <span>Let&apos;s Connect</span>
                    </HashLink>
                  </div>

                  <p className="editorial-hero__proof">
                    Real projects • Internship experience • Full-stack development
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} lg={5}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div
                  className={`editorial-hero__visual ${
                    isVisible ? "is-visible" : ""
                  }`}
                >
                  <div className="editorial-hero__avatar-top">
                    <img
                      src={mainPhoto}
                      alt="Irina S"
                      className="editorial-hero__avatar"
                    />
                    <div className="editorial-hero__avatar-meta">
                      <span>Irina S</span>
                      <strong>Mobile &amp; Web Developer</strong>
                    </div>
                  </div>

                  <div className="editorial-hero__project-card">
                    <img
                      src="/projects/mobile/FluiDex_DriveApp/7.png"
                      alt="FluiDex Drive preview"
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