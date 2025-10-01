import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { FileDown, Linkedin, Github, Mail } from "lucide-react";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // ✅ контролируем бургер

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // ✅ сворачиваем меню при клике
  };

  return (
    <Navbar
      expand="md"
      className={scrolled ? "scrolled" : ""}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="/">
          <span className="brand-text">Irina.dev</span>
        </Navbar.Brand>

        {/* ✅ Кастомный бургер */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : true)}
        >
          <div className={`burger ${expanded ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
          </Nav>

          {/* 🔗 Правая часть */}
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/irina-safronova-688130243/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/rabbitrunout"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={24} />
              </a>
              <a href="mailto:irina.safronova0801@gmail.com">
                <Mail size={24} />
              </a>
            </div>

            <div className="nav-buttons">
              <HashLink smooth to="#connect">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>

              <a
                href="/Irina_Safronova_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="vvd resume-btn"
              >
                <FileDown size={18} />
                <span>Resume</span>
              </a>

              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="vvd cover-btn"
              >
                <FileDown size={18} />
                <span>Cover Letter</span>
              </a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
