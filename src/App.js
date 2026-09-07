import React from "react";
import "./App.css";

import { NavBar } from "./components/NavBar";
import Banner from "./components/Banner";
import AISection from "./components/AISection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import FeaturedProjects from "./components/FeaturedProjects";
import HorizontalProjects from "./components/HorizontalProjects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app editorial-app">
      <NavBar />
      <Banner />
      <AboutMe />
      <Experience />
      <FeaturedProjects />
      <AISection />
      <HorizontalProjects />
      <Skills />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
