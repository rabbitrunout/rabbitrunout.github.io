import React, { useMemo, useState } from "react";
import { projectsByCategory } from "../data/projectsData";
import ProjectModal from "./ProjectModal";

const FeaturedProjects = () => {
  const featuredProjects = useMemo(() => {
    const mobileApps = projectsByCategory["Mobile Apps"] || [];
    const webApps = projectsByCategory["Web Apps"] || [];

    const fluidex =
      mobileApps.find((project) => project.title === "FluiDex Drive") ||
      mobileApps.find((project) => project.title === "FluiX Drive");

    const glowi = webApps.find((project) => project.title === "Glowi");

    return [fluidex, glowi].filter(Boolean);
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section className="editorial-section editorial-featured" id="featured">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2>Projects shaped by product thinking and real development work.</h2>
        </div>

        <div className="featured-editorial-grid">
          {featuredProjects.map((project, index) => {
            const cover =
              project.media?.find?.((m) => m.type === "image")?.src ||
              "/placeholder.png";

            return (
              <article
                key={project.title}
                className={`featured-editorial-card ${
                  index % 2 === 1 ? "featured-editorial-card--reverse" : ""
                }`}
              >
                <div className="featured-editorial-card__content">
                  <p className="featured-index">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3>{project.title}</h3>
                  <p className="featured-role">{project.role}</p>

                  <p className="featured-lead">{project.shortDesc}</p>

                  {project.problem && (
                    <div className="featured-detail">
                      <span>Problem</span>
                      <p>{project.problem}</p>
                    </div>
                  )}

                  {project.built && (
                    <div className="featured-detail">
                      <span>What I built</span>
                      <p>{project.built}</p>
                    </div>
                  )}

                  {Array.isArray(project.impact) && (
                    <div className="featured-impact-box">
  <p className="impact-title">Key Impact</p>

  <ul>
    {project.impact.map((item, i) => (
      <li key={i}>{item}</li>
    ))}
  </ul>
</div>
                  )}

                  <div className="featured-detail">
                    <span>Stack</span>
                    <p>{project.tech}</p>
                  </div>

                  <div className="featured-editorial-card__actions">
                    <button
                      type="button"
                      className="featured-project-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Project
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="featured-project-btn featured-project-btn--ghost"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>

                <div className="featured-editorial-card__visual">
                  <img src={cover} alt={project.title} />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default FeaturedProjects;