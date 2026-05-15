import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRightCircle, Github } from "react-bootstrap-icons";
import { projectsByCategory } from "../data/projectsData";
import ProjectModal from "./ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = useMemo(() => {
    const mobileApps = projectsByCategory["Mobile Apps"] || [];
    const webApps = projectsByCategory["Web Apps"] || [];

    const glowi =
      mobileApps.find((project) => project.title.includes("Glowi")) ||
      webApps.find((project) => project.title.includes("Glowi"));

    const fluidex = mobileApps.find(
      (project) => project.title === "FluiDex Drive"
    );

    return [glowi, fluidex].filter(Boolean);
  }, []);

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
            Selected projects demonstrating product thinking, mobile
            architecture, API integration, and real-world engineering workflows.
          </p>
        </motion.div>

        <div className="projects-container premium-projects-container">
          <div className="projects-grid">
            {featuredProjects.map((proj, index) => (
              <motion.article
                key={`${proj.title}-${index}`}
                className={`project-card premium-project-card ${
                  index === 0 ? "project-card--featured" : ""
                }`}
                onClick={() => setSelectedProject(proj)}
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
                    <div>
                      {proj.role && <p className="project-role">{proj.role}</p>}
                      <h3>{proj.title}</h3>
                    </div>

                    <span className="project-open-icon">
                      <ArrowUpRightCircle size={17} />
                    </span>
                  </div>

                  <p className="short-desc">{proj.shortDesc}</p>

                  {proj.engineering && (
                    <ul className="project-engineering-preview">
                      {proj.engineering.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  <div className="project-card-footer">
                    <span className="project-tech">{proj.tech}</span>

                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        className="project-github-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;