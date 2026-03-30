import React, { useLayoutEffect } from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import HorizontalProjects from "./components/HorizontalProjects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function App() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        window.location.pathname + window.location.search
      );
    }

    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div className="app editorial-app">
      <NavBar />
      <Banner />
      <AboutMe />
      <Experience />
      <FeaturedProjects />
      <HorizontalProjects />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;