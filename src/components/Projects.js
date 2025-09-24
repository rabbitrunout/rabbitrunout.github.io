import React, { useState } from "react";
import { motion } from "framer-motion";
import mainGlowi from "../assets/projects/glowi/main-glowi.png";
import glowiVideo from "../assets/projects/glowi/GlowiVideo.mp4";


const projects = [
  {
    title: "Glowi",
    shortDesc: "Neon-style parent–child portal with events, calendar, achievements, and payments.",
    fullDesc:
      "Glowi is a neon-styled web app for parents and children. It includes event management, calendar (FullCalendar), achievements tracking, and payments integration. Built with PHP + MySQL backend and React frontend, styled with Bootstrap.",
    tech: "PHP • MySQL • React • Bootstrap • FullCalendar",
    img: mainGlowi,
    github: "https://github.com/rabbitrunout/Glowi_app",
    media: [
        { type: "image", src: mainGlowi },
        { type: "video", src: glowiVideo }
    ]
  },
  {
    title: "FoodWasteTracker",
    shortDesc: "Mobile app that reduces food waste with Core Data, gamification, and notifications.",
    fullDesc:
      "FoodWasteTracker helps users reduce food waste with notifications, gamification features, and recipe suggestions. Built with SwiftUI and Core Data.",
    tech: "SwiftUI • Core Data • Charts • iOS",
    img: "/images/foodwaste.png",
    github: "#",
    media: [{ type: "image", src: "/images/foodwaste.png" }]
  },
  {
    title: "Car Maintenance Tracker",
    shortDesc: "App to track maintenance, OBD-II integration, analytics, PDF/CSV export.",
    fullDesc:
      "Car Maintenance Tracker allows users to manage their car’s health with OBD-II integration, export reports in PDF/CSV format, and view analytics dashboards.",
    tech: "React Native • Node.js • Express • MongoDB",
    img: "/images/car.png",
    github: "#",
    media: [{ type: "image", src: "/images/car.png" }]
  },
  {
    title: "Reservation System",
    shortDesc: "React + PHP API booking system with resource & timeslot management.",
    fullDesc:
      "Reservation System helps users book resources with time slot management. It includes React frontend, PHP + MySQL backend, and REST API integration.",
    tech: "React • PHP • MySQL • REST API",
    img: "/images/reservation.png",
    github: "#",
    media: [{ type: "image", src: "/images/reservation.png" }]
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextMedia = () => {
    setSelectedMediaIndex((prev) =>
      (prev + 1) % selectedProject.media.length
    );
  };

  const prevMedia = () => {
    setSelectedMediaIndex((prev) =>
      (prev - 1 + selectedProject.media.length) %
      selectedProject.media.length
    );
  };

  return (
    <section className="project" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Here are some of the applications I’ve built and contributed to.</p>

        <div className="projects-grid">
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
        </div>
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
    className="modal-video"
    controls
    controlsList="nodownload noremoteplayback"
    disablePictureInPicture
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
