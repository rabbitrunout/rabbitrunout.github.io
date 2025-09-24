import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

// ✅ примеры картинок и видео
import mainGlowi from "../assets/projects/glowi/main-glowi.png";
import glowiVideo from "../assets/projects/glowi/GlowiVideo.mp4";

const projectsByCategory = {
  "UI/UX & Design": [
    {
      title: "Glowi",
      shortDesc: "Neon-style parent–child portal.",
      fullDesc:
        "Glowi is a neon-styled web app for parents and children. It includes event management, calendar (FullCalendar), achievements tracking, and payments integration. Built with PHP + MySQL backend and React frontend, styled with Bootstrap.",
      tech: "PHP • MySQL • React • Bootstrap • FullCalendar",
      img: mainGlowi,
      github: "https://github.com/rabbitrunout/Glowi_app",
      media: [
        { type: "image", src: mainGlowi },
        { type: "video", src: glowiVideo },
      ],
    },
  ],
  "Mobile Apps": [
    {
      title: "FoodWasteTracker",
      shortDesc: "iOS app to reduce food waste.",
      fullDesc:
        "FoodWasteTracker helps users reduce food waste with notifications, gamification features, and recipe suggestions. Built with SwiftUI and Core Data.",
      tech: "SwiftUI • Core Data • Charts • iOS",
      img: "/images/foodwaste.png",
      github: "#",
      media: [{ type: "image", src: "/images/foodwaste.png" }],
    },
    {
      title: "Car Maintenance Tracker",
      shortDesc: "App to track maintenance & OBD-II.",
      fullDesc:
        "Car Maintenance Tracker allows users to manage their car’s health with OBD-II integration, export reports in PDF/CSV format, and view analytics dashboards.",
      tech: "React Native • Node.js • Express • MongoDB",
      img: "/images/car.png",
      github: "#",
      media: [{ type: "image", src: "/images/car.png" }],
    },
  ],
  "Web Apps": [
    {
      title: "Reservation System",
      shortDesc: "React + PHP booking system.",
      fullDesc:
        "Reservation System helps users book resources with time slot management. It includes React frontend, PHP + MySQL backend, and REST API integration.",
      tech: "React • PHP • MySQL • REST API",
      img: "/images/reservation.png",
      github: "#",
      media: [{ type: "image", src: "/images/reservation.png" }],
    },
  ],
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

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

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // ✅ показываем по 3 проекта
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="project" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Here are some of the applications I’ve built and contributed to.</p>

        {Object.entries(projectsByCategory).map(([category, projects]) => (
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
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-body">
              {/* Левая часть — медиа */}
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
                    controlsList="nodownload" // 🚫 запрещаем скачивание
                    className="modal-video"
                  />
                )}
                {selectedProject.media.length > 1 && (
                  <>
                    <button className="slider-btn prev" onClick={prevMedia}>
                      ‹
                    </button>
                    <button className="slider-btn next" onClick={nextMedia}>
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Правая часть — описание */}
              <div className="modal-right">
                <h3>{selectedProject.title}</h3>
                <p className="modal-desc">{selectedProject.fullDesc}</p>
                <p className="modal-tech">
                  <strong>Tech:</strong> {selectedProject.tech}
                </p>
                <div className="modal-buttons">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                    >
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
