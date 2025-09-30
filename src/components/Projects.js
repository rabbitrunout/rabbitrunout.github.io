import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { projectsByCategory } from "../data/projectsData";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [zoomed, setZoomed] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setZoomed(false);
  };

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
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    arrows: true,
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
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 🔥 Общий контейнер */}
        <div className="projects-container">
          {Object.entries(projectsByCategory).map(([category, projects]) => {
            if (activeCategory !== "All" && activeCategory !== category)
              return null;

            return (
              <div key={category}>
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
                      {proj.media &&
                      proj.media.length > 0 &&
                      proj.media[0].type === "image" ? (
                        <img
                          src={proj.media[0].src}
                          alt={proj.title}
                          className="project-img"
                        />
                      ) : (
                        <div className="project-img placeholder">No Image</div>
                      )}
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
      </div>

      {/* 🔥 Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div
            className="project-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="project-modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="project-modal-body">
              <div className="project-modal-media">
                {selectedProject.media[selectedMediaIndex].type === "image" ? (
                  <img
                    src={selectedProject.media[selectedMediaIndex].src}
                    alt="preview"
                    className="project-modal-img"
                    onClick={() => setZoomed(true)}
                  />
                ) : (
                  <video
                    src={selectedProject.media[selectedMediaIndex].src}
                    controls
                    preload="metadata"
                    controlsList="nodownload noplaybackrate"
                    disablePictureInPicture
                    className="project-modal-video"
                    onClick={() => setZoomed(true)}
                  />
                )}
                {selectedProject.media.length > 1 && (
                  <>
                    <button
                      className="project-slider-btn prev"
                      onClick={prevMedia}
                    >
                      ‹
                    </button>
                    <button
                      className="project-slider-btn next"
                      onClick={nextMedia}
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {/* Текст */}
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
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    GitHub
                  </a>
                )}
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 🔥 Fullscreen просмотр */}
      {zoomed && (
        <div className="fullscreen-overlay" onClick={() => setZoomed(false)}>
          {selectedProject.media[selectedMediaIndex].type === "image" ? (
            <img
              src={selectedProject.media[selectedMediaIndex].src}
              alt="fullscreen"
              className="fullscreen-img"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              src={selectedProject.media[selectedMediaIndex].src}
              controls
              autoPlay
              preload="metadata"
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              className="fullscreen-video"
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <button
            className="fullscreen-close"
            onClick={() => setZoomed(false)}
          >
            ×
          </button>

          {selectedProject.media.length > 1 && (
            <>
              <button
                className="fullscreen-btn prev"
                onClick={(e) => {
                  e.stopPropagation();
                  prevMedia();
                }}
              >
                ‹
              </button>
              <button
                className="fullscreen-btn next"
                onClick={(e) => {
                  e.stopPropagation();
                  nextMedia();
                }}
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </section>
  );
};
