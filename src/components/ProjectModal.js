import React, { useCallback, useEffect, useMemo, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const mediaItems = useMemo(() => project?.media || [], [project]);
  const activeMedia = mediaItems[activeMediaIndex];

  useEffect(() => {
    setActiveMediaIndex(0);
    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, [project]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 180);
  }, [onClose]);

  const goPrevMedia = useCallback(() => {
    if (!mediaItems.length) return;
    setActiveMediaIndex((prev) =>
      prev === 0 ? mediaItems.length - 1 : prev - 1
    );
  }, [mediaItems.length]);

  const goNextMedia = useCallback(() => {
    if (!mediaItems.length) return;
    setActiveMediaIndex((prev) =>
      prev === mediaItems.length - 1 ? 0 : prev + 1
    );
  }, [mediaItems.length]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") goPrevMedia();
      if (e.key === "ArrowRight") goNextMedia();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, handleClose, goPrevMedia, goNextMedia]);

  if (!project) return null;

  return (
    <div
      className={`project-modal-overlay ${isVisible ? "is-visible" : ""}`}
      onClick={handleClose}
    >
      <div
        className={`project-modal ${isVisible ? "is-visible" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="project-modal__close"
          onClick={handleClose}
          aria-label="Close project modal"
        >
          ×
        </button>

        <div className="project-modal__grid">
          <div className="project-modal__media">
            <div className="project-modal__main-image-wrap">
              {activeMedia?.type === "image" && (
                <img
                  src={activeMedia.src}
                  alt={`${project.title} preview ${activeMediaIndex + 1}`}
                  className="project-modal__main-image"
                />
              )}

              {activeMedia?.type === "video" && (
                <video
                  className="project-modal__main-video"
                  src={activeMedia.src}
                  controls
                  playsInline
                />
              )}

              {mediaItems.length > 1 && (
                <>
                  <button
                    type="button"
                    className="project-modal__nav project-modal__nav--prev"
                    onClick={goPrevMedia}
                    aria-label="Previous media"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    className="project-modal__nav project-modal__nav--next"
                    onClick={goNextMedia}
                    aria-label="Next media"
                  >
                    ›
                  </button>
                </>
              )}

              {mediaItems.length > 0 && (
                <div className="project-modal__counter">
                  {activeMediaIndex + 1} / {mediaItems.length}
                </div>
              )}
            </div>

            {mediaItems.length > 1 && (
              <div className="project-modal__thumbs">
                {mediaItems.map((item, index) => (
                  <button
                    type="button"
                    key={`${item.src}-${index}`}
                    className={`project-modal__thumb ${
                      activeMediaIndex === index ? "is-active" : ""
                    }`}
                    onClick={() => setActiveMediaIndex(index)}
                    aria-label={`Open media ${index + 1}`}
                  >
                    {item.type === "image" ? (
                      <img src={item.src} alt="" />
                    ) : (
                      <div className="project-modal__video-thumb">
                        <video src={item.src} muted playsInline />
                        <span>Video</span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="project-modal__content">
            <p className="section-label">Project</p>
            <h3>{project.title}</h3>
            <p className="project-modal__lead">{project.shortDesc}</p>
            <p className="project-modal__text">{project.fullDesc}</p>

            <div className="project-modal__meta">
              {project.tech && (
                <div>
                  <span>Tech</span>
                  <p>{project.tech}</p>
                </div>
              )}

              {project.github && (
                <div>
                  <span>GitHub</span>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    Open Repository
                  </a>
                </div>
              )}

              {project.link && (
                <div>
                  <span>Live Link</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Open Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;