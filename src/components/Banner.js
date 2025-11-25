import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/mainPhoto.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const period = 2000;

  const tick = useCallback(() => {
    const toRotate = [
      "Web & Mobile Developer",
      "Web Developer",
      "Mobile Developer",
      "UI/UX-minded Developer",
    ];

    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      {/* 🎬 Видео фон */}
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="/video/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Затемняющий оверлей */}
      <div className="overlay"></div>

      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={8}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    Hi! I&apos;m Irina{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Mobile &amp; Web Developer crafting responsive, user-friendly
                    websites and apps. Ready to contribute to real projects and
                    grow as a developer.
                  </p>
                  <HashLink to="#connect">
                    <button className="vvd">
                      Let’s Connect <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={5} xl={4}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Irina illustration" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
