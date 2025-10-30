import React, { useState, useEffect, useCallback, useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsByCategory } from "../data/projectsData";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const sliderRef = useRef(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedMediaIndex(0);
  };
  const closeModal = () => setSelectedProject(null);

  const nextMedia = useCallback(() => {
    if (!selectedProject) return;
    setSelectedMediaIndex((prev) => (prev + 1) % selectedProject.media.length);
  }, [selectedProject]);

  const prevMedia = useCallback(() => {
    if (!selectedProject) return;
    setSelectedMediaIndex(
      (prev) => (prev - 1 + selectedProject.media.length) % selectedProject.media.length
    );
  }, [selectedProject]);

  // 🎹 Клавиатурная навигация в модалке
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

  // ⚙️ Настройки слайдера
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 600,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const categories = ["All", ...Object.keys(projectsByCategory)];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Here are some of the applications I’ve built and contributed to.
        </motion.p>

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

        {/* 🔘 Проекты по категориям */}
        <div className="projects-container">
          {Object.entries(projectsByCategory).map(([category, projects]) => {
            if (activeCategory !== "All" && activeCategory !== category) return null;

            return (
              <div key={category}>
                {/* Заголовок категории с анимацией */}
                <motion.h3
                  className="category-title"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {category}
                </motion.h3>

                <Slider ref={sliderRef} {...sliderSettings}>
                  {projects.map((proj, i) => (
                    <motion.div
                      key={i}
                      className="project-card"
                      initial={{ opacity: 0, y: 40, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        ease: "easeOut",
                        delay: i * 0.15,
                      }}
                      viewport={{ once: true, amount: 0.2 }}
                      whileHover={{
                        scale: 1.04,
                        boxShadow: "0 0 25px rgba(255, 75, 75, 0.45)",
                        filter: "brightness(1.15)",
                      }}
                      onClick={() => openModal(proj)}
                    >
                      {proj.media?.[0]?.type === "image" ? (
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

      {/* 🔘 Модальное окно */}
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
