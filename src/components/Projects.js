import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// 🔥 твои импорты
import mainGlowi from "../assets/projects/WebApp/glowi/main-glowi.png";
import glowiVideo from "../assets/projects/WebApp/glowi/GlowiVideo.mp4";

import surf from "../assets/projects/UI/UX_Design/1-1.png";
import surfVideo from "../assets/projects/UI/UX_Design/SurfVideo.mp4";

import bakery from "../assets/projects/UI/UX_Design/bakeryMain.png";
import bakeryVideo from "../assets/projects/UI/UX_Design/bakeryVideo.mp4";

import skate from "../assets/projects/UI/UX_Design/skateMain.png";
import skate_1 from "../assets/projects/UI/UX_Design/skate_1.png";
import skateVideo from "../assets/projects/UI/UX_Design/skateVideo.mp4";



// 🔥 Категории проектов
const projectsByCategory = {
  "UI/UX & Design": [
    {
      title: "Surfing Club",
      shortDesc: "Surfing Club website concept.",
      fullDesc:
        "Designed a complete website concept using Adobe XD. ✨ Focus on surfing spirit + user-friendly UI.",
      tech: "Adobe XD",
      img: skate,
      media: [
        { type: "image", src: skate },
        { type: "image", src: skate_1 },
        { type: "video", src: skateVideo },
      ],
    },
    {
      title: "Surfing Club (v2)",
      shortDesc: "Another surfing design concept.",
      fullDesc:
        "A different version of the Surfing Club project in Adobe XD.",
      tech: "Adobe XD",
      img: surf,
      media: [
        { type: "image", src: surf },
        { type: "video", src: surfVideo },
      ],
    },
    {
      title: "Golden Crumb Bakery",
      shortDesc: "Bakery UI/UX concept.",
      fullDesc:
        "Website concept for Golden Crumb Bakery. Storytelling, clean menu, smooth user flow. Built in Adobe XD.",
      tech: "Adobe XD",
      img: bakery,
      media: [
        { type: "image", src: bakery },
        { type: "video", src: bakeryVideo },
      ],
    },
  ],

  "Web Apps": [
    {
      title: "Glowi",
      shortDesc: "Neon-style parent–child portal.",
      fullDesc:
        "Neon-styled web app with event management, calendar, achievements, payments. Built with PHP + MySQL + React.",
      tech: "PHP • MySQL • React • Bootstrap • FullCalendar",
      img: mainGlowi,
      github: "https://github.com/rabbitrunout/Glowi_app",
      media: [
        { type: "image", src: mainGlowi },
        { type: "video", src: glowiVideo },
      ],
    },
    {
      title: "Reservation System",
      shortDesc: "React + PHP booking system.",
      fullDesc:
        "Helps users book resources with timeslot management. React frontend + PHP backend.",
      tech: "React • PHP • MySQL",
      img: "/images/reservation.png",
      media: [{ type: "image", src: "/images/reservation.png" }],
    },
  ],

    "Mobile Apps": [
    {
      title: "FoodWasteTracker",
      shortDesc: "iOS app to reduce food waste.",
      fullDesc:
        "Helps users reduce food waste with notifications, gamification, and recipes. Built with SwiftUI.",
      tech: "SwiftUI • Core Data",
      img: "/images/foodwaste.png",
      media: [{ type: "image", src: "" }],
    },
    {
      title: "Car Maintenance Tracker",
      shortDesc: "App to track car maintenance & OBD-II.",
      fullDesc:
        "Tracks car health with OBD-II, exports reports (PDF/CSV), analytics dashboard.",
      tech: "React Native • Node.js • MongoDB",
      img: "/images/car.png",
      media: [{ type: "image", src: "/images/car.png" }],
    },
  ],
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };

  const closeModal = () => setSelectedProject(null);

  const nextMedia = () => {
    setSelectedMediaIndex(
      (prev) => (prev + 1) % selectedProject.media.length
    );
  };

  const prevMedia = () => {
    setSelectedMediaIndex(
      (prev) =>
        (prev - 1 + selectedProject.media.length) %
        selectedProject.media.length
    );
  };

  // 🔧 настройки карусели
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const categories = ["All", ...Object.keys(projectsByCategory)];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Here are some of the applications I’ve built and contributed to.</p>

        {/* 🔥 Фильтры */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 Карусель по категориям */}
        {Object.entries(projectsByCategory).map(([category, projects]) => {
          if (activeCategory !== "All" && activeCategory !== category) return null;

          return (
            <div key={category} className="project-category">
              <h3 className="category-title">{category}</h3>
              <Slider {...sliderSettings}>
                {projects.map((proj, i) => (
                  <motion.div
                    key={i}
                    className="project-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    onClick={() => openModal(proj)}
                  >
                    <img src={proj.img} alt={proj.title} className="project-img" />
                    <div className="project-info">
                      <h3>{proj.title}</h3>
                      <p className="short-desc">{proj.shortDesc}</p>
                      <span>{proj.tech}</span>
                    </div>
                  </motion.div>
                ))}
              </Slider>
            </div>
          );
        })}
      </div>

      {/* 🔥 Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-body">
              <div className="modal-left">
                {selectedProject.media[selectedMediaIndex].type === "image" ? (
                  <img
                    src={selectedProject.media[selectedMediaIndex].src}
                    alt="preview"
                    className="modal-img"
                  />
                ) : (
                  <video
                    src={selectedProject.media[selectedMediaIndex].src}
                    controls
                    className="modal-video"
                  />
                )}
                {selectedProject.media.length > 1 && (
                  <>
                    <button className="slider-btn prev" onClick={prevMedia}>‹</button>
                    <button className="slider-btn next" onClick={nextMedia}>›</button>
                  </>
                )}
              </div>
              <div className="modal-right">
                <h3>{selectedProject.title}</h3>
                <p className="modal-desc">{selectedProject.fullDesc}</p>
                <p className="modal-tech"><strong>Tech:</strong> {selectedProject.tech}</p>
                <div className="modal-buttons">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
