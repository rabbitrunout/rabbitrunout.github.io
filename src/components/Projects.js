import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightCircle } from "react-bootstrap-icons";
import { projectsByCategory } from "../data/projectsData";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedMediaIndex, setSelectedMediaIndex] = useState(0);

  const featuredProjects = [
    ...(projectsByCategory["Mobile Apps"] || []).slice(0, 1),
    ...(projectsByCategory["Web Apps"] || []).slice(0, 1),
    ...(projectsByCategory["UI/UX & Design"] || []).slice(0, 1),
  ];

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

    setSelectedMediaIndex(
      (prev) => (prev + 1) % selectedProject.media.length
    );
  }, [selectedProject]);

  const prevMedia = useCallback(() => {
    if (!selectedProject || !selectedProject.media?.length) return;

    setSelectedMediaIndex(
      (prev) =>
        (prev - 1 + selectedProject.media.length) %
        selectedProject.media.length
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
          <span className="section-badge">Selected Work</span>
          <h2>Featured Projects</h2>
          <p>
            Selected projects demonstrating real-world development, clean
            architecture, API integration, and user-focused design.
          </p>
        </motion.div>

        <div className="projects-container premium-projects-container">
          {featuredProjects.length === 0 ? (
            <p className="no-projects">No featured projects yet.</p>
          ) : (
            <div className="projects-grid">
              {featuredProjects.map((proj, index) => (
                <motion.article
                  key={`${proj.title}-${index}`}
                  className={`project-card premium-project-card ${
                    index === 0 ? "project-card--featured" : ""
                  }`}
                  onClick={() => openModal(proj)}
                  whileHover={{ y: -6 }}
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
              ))}
            </div>
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