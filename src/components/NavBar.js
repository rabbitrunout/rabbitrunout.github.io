import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FileDown, Linkedin, Github, Mail } from "lucide-react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id, value) => {
    const el = document.getElementById(id);
    setActiveLink(value);
    setExpanded(false);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      className={`editorial-navbar ${scrolled ? "scrolled" : ""}`}
      fixed="top"
    >
      <Container className="editorial-navbar__container">
        <Navbar.Brand
          onClick={() => scrollToSection("home", "home")}
          className="editorial-navbar__brand"
          style={{ cursor: "pointer" }}
        >
          <span className="editorial-navbar__brand-text">IRINA.S</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="editorial-navbar-nav"
          className="editorial-navbar__toggle"
          onClick={() => setExpanded(!expanded)}
        >
          <span className={`editorial-burger ${expanded ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </Navbar.Toggle>

        <Navbar.Collapse id="editorial-navbar-nav">
          <div className="editorial-navbar__collapse">
            <Nav className="editorial-navbar__links">
              <Nav.Link
                onClick={() => scrollToSection("home", "home")}
                className={`editorial-navbar__link ${
                  activeLink === "home" ? "active" : ""
                }`}
              >
                Home
              </Nav.Link>

              <Nav.Link
                onClick={() => scrollToSection("about", "about")}
                className={`editorial-navbar__link ${
                  activeLink === "about" ? "active" : ""
                }`}
              >
                About
              </Nav.Link>

              <Nav.Link
                onClick={() => scrollToSection("featured", "featured")}
                className={`editorial-navbar__link ${
                  activeLink === "featured" ? "active" : ""
                }`}
              >
                Selected Work
              </Nav.Link>

              <Nav.Link
                onClick={() => scrollToSection("skills", "skills")}
                className={`editorial-navbar__link ${
                  activeLink === "skills" ? "active" : ""
                }`}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                onClick={() => scrollToSection("connect", "connect")}
                className={`editorial-navbar__link ${
                  activeLink === "connect" ? "active" : ""
                }`}
              >
                Contact
              </Nav.Link>
            </Nav>

            <div className="editorial-navbar__right">
              <div className="editorial-navbar__socials">
                <a
                  href="https://www.linkedin.com/in/irina-safronova-688130243/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="editorial-navbar__social"
                >
                  <Linkedin size={16} />
                </a>

                <a
                  href="https://github.com/rabbitrunout"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="editorial-navbar__social"
                >
                  <Github size={16} />
                </a>

                <a
                  href="mailto:irina.safronova0801@gmail.com"
                  aria-label="Email"
                  className="editorial-navbar__social"
                >
                  <Mail size={16} />
                </a>
              </div>

              <div className="editorial-navbar__actions">
                <a
                  href="/Irina_Safronova_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-navbar__btn editorial-navbar__btn--ghost"
                >
                  <FileDown size={16} />
                  <span>Resume</span>
                </a>

                <button
                  type="button"
                  onClick={() => scrollToSection("connect", "connect")}
                  className="editorial-navbar__btn editorial-navbar__btn--primary"
                >
                  <span>Let&apos;s Connect</span>
                </button>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};