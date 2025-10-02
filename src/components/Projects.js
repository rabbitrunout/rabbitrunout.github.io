import React, { useState, useEffect, useCallback } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsByCategory } from "../data/projectsData";
import { ProjectModal } from "./ProjectModal";// ✅ импорт модалки

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextMedia = useCallback(() => {
    if (!selectedProject) return;
    setSelectedMediaIndex((prev) =>
      (prev + 1) % selectedProject.media.length
    );
  }, [selectedProject]);

  const prevMedia = useCallback(() => {
    if (!selectedProject) return;
    setSelectedMediaIndex((prev) =>
      (prev - 1 + selectedProject.media.length) %
      selectedProject.media.length
    );
  }, [selectedProject]);

  // ✅ слушатель клавиш
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

 const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2, slidesToScroll: 1 }
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1, slidesToScroll: 1 }
    }
  ]
};






  const categories = ["All", ...Object.keys(projectsByCategory)];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Here are some of the applications I’ve built and contributed to.</p>

        {/* 🔘 Фильтры */}
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

        {/* 🔘 Ленты по категориям */}
        <div className="projects-container">
          {Object.entries(projectsByCategory).map(([category, projects]) => {
            if (activeCategory !== "All" && activeCategory !== category) return null;

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
                      {proj.media && proj.media.length > 0 && proj.media[0].type === "image" ? (
                        <img src={proj.media[0].src} alt={proj.title} className="project-img" />
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

      {/* 🔘 Модалка (теперь отдельный компонент) */}
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
