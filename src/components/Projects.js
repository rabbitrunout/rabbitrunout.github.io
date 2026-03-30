import React, { useState, useEffect, useCallback, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ArrowUpRightCircle } from "react-bootstrap-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsByCategory } from "../data/projectsData";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Mobile Apps");
  const sliderRef = useRef(null);

  const displayCategories = [
    "Mobile Apps",
    "Web Apps",
    "UI/UX & Design",
    "Landing Pages",
    "JavaScript Projects",
  ];

  const currentProjects = projectsByCategory[activeCategory] || [];

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedMediaIndex(0);
  };

  const nextMedia = useCallback(() => {
    if (!selectedProject || !selectedProject.media?.length) return;
    setSelectedMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
  }, [selectedProject]);

  const prevMedia = useCallback(() => {
    if (!selectedProject || !selectedProject.media?.length) return;
    setSelectedMediaIndex(
      (prev) =>
        (prev - 1 + selectedProject.media.length) % selectedProject.media.length
    );
  }, [selectedProject]);

  useEffect(() => {
    if (!selectedProject) return;

    const onKey = (e) => {
      if (e.key === "ArrowRight") nextMedia();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedProject, nextMedia, prevMedia]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0, true);
    }
  }, [activeCategory]);

  const sliderSettings = {
    dots: true,
    infinite: currentProjects.length > 3,
    speed: 550,
    arrows: true,
    slidesToShow: Math.min(3, Math.max(currentProjects.length, 1)),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(2, Math.max(currentProjects.length, 1)),
          slidesToScroll: 1,
          infinite: currentProjects.length > 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: currentProjects.length > 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: currentProjects.length > 1,
        },
      },
    ],
  };

  return (
    <section className="projects premium-projects" id="projects">
      <div className="container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          <span className="section-badge">Project Library</span>
          <h2>All Projects</h2>
          <p>
            A broader collection of mobile, web, UI/UX, and JavaScript projects
            built across different technologies, interfaces, and product ideas.
          </p>
        </motion.div>

        <div className="project-filters">
          {displayCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
              type="button"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-container premium-projects-container">
          <motion.div
            className="projects-subheader"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">{activeCategory}</h3>
            <span className="project-count">
              {currentProjects.length} project
              {currentProjects.length !== 1 ? "s" : ""}
            </span>
          </motion.div>

          {currentProjects.length === 0 ? (
            <p className="no-projects">No projects in this category yet.</p>
          ) : (
            <Slider key={activeCategory} ref={sliderRef} {...sliderSettings}>
              {currentProjects.map((proj, index) => (
                <div
                  key={`${activeCategory}-${proj.title}-${index}`}
                  className="project-slide"
                >
                  <motion.article
                    className="project-card premium-project-card"
                    onClick={() => openModal(proj)}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="project-media-wrap">
                      {proj.media?.[0]?.type === "image" ? (
                        <img
                          src={proj.media[0].src}
                          alt={proj.title}
                          className="project-img"
                        />
                      ) : (
                        <div className="project-img placeholder">
                          Preview unavailable
                        </div>
                      )}

                      {proj.badge && (
                        <span className="project-badge">{proj.badge}</span>
                      )}
                    </div>

                    <div className="project-info">
                      <div className="project-header-row">
                        <h3>{proj.title}</h3>
                        <span className="project-open-icon">
                          <ArrowUpRightCircle size={17} />
                        </span>
                      </div>

                      <p className="short-desc">{proj.shortDesc}</p>

                      <span className="project-tech">{proj.tech}</span>
                    </div>
                  </motion.article>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          selectedMediaIndex={selectedMediaIndex}
          onClose={closeModal}
          nextMedia={nextMedia}
          prevMedia={prevMedia}
        />
      )}
    </section>
  );
};