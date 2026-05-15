import React, { useCallback, useEffect, useMemo, useState } from "react";

const ProjectModal = ({ project, onClose }) => {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const mediaItems = useMemo(() => project?.media || [], [project]);
  const activeMedia = mediaItems[activeMediaIndex];

  useEffect(() => {
    setActiveMediaIndex(0);
    setIsGalleryOpen(false);

    const t = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(t);
  }, [project]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setIsGalleryOpen(false);
    setTimeout(() => onClose?.(), 180);
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
      if (e.key === "Escape") {
        if (isGalleryOpen) {
          setIsGalleryOpen(false);
        } else {
          handleClose();
        }
      }

      if (e.key === "ArrowLeft") goPrevMedia();
      if (e.key === "ArrowRight") goNextMedia();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, handleClose, goPrevMedia, goNextMedia, isGalleryOpen]);

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
                  alt={`${project.title} preview`}
                  className="project-modal__main-image"
                  onClick={() => setIsGalleryOpen(true)}
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

                  <div className="project-modal__counter">
                    {activeMediaIndex + 1} / {mediaItems.length}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="project-modal__content">
            <p className="section-label">Case Study</p>
            <h3>{project.title}</h3>

            {project.status && (
              <p className="project-modal__status">{project.status}</p>
            )}

            <p className="project-modal__lead">{project.shortDesc}</p>

            {project.problem && (
              <div className="project-block">
                <h4>Problem</h4>
                <p>{project.problem}</p>
              </div>
            )}

            {project.built && (
              <div className="project-block">
                <h4>What I Built</h4>
                <p>{project.built}</p>
              </div>
            )}

            {Array.isArray(project.engineering) && (
              <div className="project-block">
                <h4>Engineering Highlights</h4>
                <ul>
                  {project.engineering.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(project.aiFeatures) && (
              <div className="project-block">
                <h4>AI-Assisted Features</h4>
                <ul>
                  {project.aiFeatures.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(project.impact) && (
              <div className="project-block">
                <h4>Key Impact</h4>
                <ul>
                  {project.impact.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {Array.isArray(project.future) && (
              <div className="project-block">
                <h4>Future Expansion</h4>
                <ul>
                  {project.future.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-modal__meta">
              {project.role && (
                <div>
                  <span>Role</span>
                  <p>{project.role}</p>
                </div>
              )}

              {project.tech && (
                <div>
                  <span>Tech Stack</span>
                  <p>{project.tech}</p>
                </div>
              )}

              {project.github && (
                <div>
                  <span>GitHub</span>
                  <a href={project.github} target="_blank" rel="noreferrer">
                    View Repository
                  </a>
                </div>
              )}

              {project.link && (
                <div>
                  <span>Live Demo</span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Open Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isGalleryOpen && activeMedia?.type === "image" && (
        <div
          className="iphone-gallery-overlay"
          onClick={(e) => {
            e.stopPropagation();
            setIsGalleryOpen(false);
          }}
        >
          <button
            type="button"
            className="iphone-gallery-close"
            onClick={() => setIsGalleryOpen(false)}
          >
            ×
          </button>

          {mediaItems.length > 1 && (
            <button
              type="button"
              className="iphone-gallery-nav iphone-gallery-nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                goPrevMedia();
              }}
            >
              ‹
            </button>
          )}

          <img
            src={activeMedia.src}
            alt={`${project.title} fullscreen preview`}
            className="iphone-gallery-image"
            onClick={(e) => e.stopPropagation()}
          />

          {mediaItems.length > 1 && (
            <button
              type="button"
              className="iphone-gallery-nav iphone-gallery-nav--next"
              onClick={(e) => {
                e.stopPropagation();
                goNextMedia();
              }}
            >
              ›
            </button>
          )}

          <div className="iphone-gallery-counter">
            {activeMediaIndex + 1} / {mediaItems.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectModal;