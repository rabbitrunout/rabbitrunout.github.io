import React from "react";

export const ProjectModal = ({
  project,
  selectedMediaIndex,
  onClose,
  nextMedia,
  prevMedia,
}) => {
  if (!project) return null;

  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div
        className="project-modal-content two-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="project-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="project-modal-body two-col">
          {/* Левая колонка — медиа */}
          <div className="modal-left">
            <div className="media-frame">
              {project.media[selectedMediaIndex].type === "image" ? (
                <img
                  src={project.media[selectedMediaIndex].src}
                  alt="preview"
                />
              ) : (
                <video
                  src={project.media[selectedMediaIndex].src}
                  controls
                  preload="metadata"
                  className="video"
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                />
              )}

              {project.media.length > 1 && (
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
          </div>

          {/* Правая колонка — текст */}
          <div className="modal-right">
            <h3 className="modal-title">{project.title}</h3>
            <div className="modal-scroll">
              <p className="modal-desc">{project.fullDesc}</p>
              <p className="modal-tech">
                <strong>Tech:</strong> {project.tech}
              </p>

              <div className="modal-buttons">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-link"
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
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
      </div>
    </div>
  );
};
