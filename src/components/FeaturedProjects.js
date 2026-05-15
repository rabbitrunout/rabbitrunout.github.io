import React, { useMemo, useState } from "react";
import { projectsByCategory } from "../data/projectsData";
import ProjectModal from "./ProjectModal";

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const featuredProjects = useMemo(() => {
    const mobileApps = projectsByCategory["Mobile Apps"] || [];

    const glowi = mobileApps.find((project) =>
      project.title.includes("Glowi")
    );

    const fluidex = mobileApps.find(
      (project) => project.title === "FluiDex Drive"
    );

    return [glowi, fluidex].filter(Boolean);
  }, []);

  const handleTilt = (e) => {
    const frame = e.currentTarget.querySelector(".iphone-frame");
    if (!frame) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = (y / rect.height - 0.5) * -10;

    frame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const resetTilt = (e) => {
    const frame = e.currentTarget.querySelector(".iphone-frame");
    if (!frame) return;

    frame.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  return (
    <>
      <section className="editorial-section editorial-featured" id="featured">
        <div className="section-heading">
          <p className="section-label">Selected Work</p>
          <h2>
            Projects shaped by product thinking and real development work.
          </h2>
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

                  {index === 0 && (
                    <span className="featured-badge">Main Project</span>
                  )}

                  <h3>{project.title}</h3>

                  {project.status && (
                    <p className="featured-status">{project.status}</p>
                  )}

                  {project.role && (
                    <p className="featured-role">{project.role}</p>
                  )}

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

                  {Array.isArray(project.engineering) && (
                    <div className="featured-detail">
                      <span>Engineering Highlights</span>

                      <ul className="featured-engineering-list">
                        {project.engineering.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {Array.isArray(project.impact) && (
                    <div className="featured-impact-box">
                      <p className="impact-title">Key Impact</p>
                      <ul>
                        {project.impact.slice(0, 2).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="featured-detail">
                    <span>Stack</span>
                    <div className="project-tech-tags">
  {project.tech.split("•").map((item, i) => (
    <span key={i}>{item.trim()}</span>
  ))}
</div>
                  </div>

                  <div className="featured-editorial-card__actions">
                    <button
                      type="button"
                      className="featured-project-btn"
                      onClick={() => setSelectedProject(project)}
                    >
                      View Case Study
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

                <div
                  className="featured-editorial-card__visual"
                  onMouseMove={handleTilt}
                  onMouseLeave={resetTilt}
                >
                  <div className="iphone-frame">
                    <span className="iphone-frame__island"></span>
                    <img src={cover} alt={project.title} />
                  </div>
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