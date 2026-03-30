import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { projectsByCategory } from "../data/projectsData";
import ProjectModal from "./ProjectModal";

const HorizontalProjects = () => {
  const trackRef = useRef(null);
  const isManualScroll = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  // 👉 собираем все проекты
  const allProjects = useMemo(() => {
    return Object.values(projectsByCategory)
      .flat()
      .map((project) => ({
        ...project,
        category: project.badge || project.tech || "Project",
        cover:
          project.media?.find?.((m) => m.type === "image")?.src ||
          project.media?.[0]?.src ||
          "/placeholder.png",
      }));
  }, []);

  // 👉 центрирование карточки (идеально стабильное)
  const centerCard = useCallback((index) => {
    const track = trackRef.current;
    if (!track) return;

    const cards = track.querySelectorAll(".horizontal-project-card");
    const card = cards[index];

    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, []);

  // 👉 определяем активную карточку при скролле
  const updateActiveCard = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const cards = [...track.querySelectorAll(".horizontal-project-card")];
    const trackRect = track.getBoundingClientRect();
    const center = trackRect.left + trackRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - cardCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    // 🔥 ФИКС ДЕРГАНИЯ
    if (!isManualScroll.current) {
      setActiveIndex(closestIndex);
    }
  }, []);

  // 👉 подписка на scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => updateActiveCard();
    const handleResize = () => updateActiveCard();

    track.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    updateActiveCard();

    return () => {
      track.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateActiveCard]);

  // 👉 центр при изменении activeIndex
  useEffect(() => {
    const timer = setTimeout(() => {
      centerCard(activeIndex);
    }, 40);

    return () => clearTimeout(timer);
  }, [activeIndex, centerCard]);

  // 👉 вертикальный scroll → горизонтальный
  const handleWheel = (e) => {
    const track = trackRef.current;
    if (!track) return;

    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      e.preventDefault();
      track.scrollLeft += e.deltaY;
    }
  };

  // 👉 клик по карточке
  const handleCardClick = (index) => {
    isManualScroll.current = true;

    setActiveIndex(index);
    centerCard(index);
    setSelectedProject(allProjects[index]);

    setTimeout(() => {
      isManualScroll.current = false;
    }, 400);
  };

  // 👉 стрелки
  const goNext = () => {
    if (!allProjects.length) return;

    isManualScroll.current = true;

    const nextIndex =
      activeIndex === allProjects.length - 1 ? 0 : activeIndex + 1;

    setActiveIndex(nextIndex);
    centerCard(nextIndex);

    setTimeout(() => {
      isManualScroll.current = false;
    }, 400);
  };

  const goPrev = () => {
    if (!allProjects.length) return;

    isManualScroll.current = true;

    const nextIndex =
      activeIndex === 0 ? allProjects.length - 1 : activeIndex - 1;

    setActiveIndex(nextIndex);
    centerCard(nextIndex);

    setTimeout(() => {
      isManualScroll.current = false;
    }, 400);
  };

  return (
    <>
      <section
        className="editorial-section horizontal-projects"
        id="project-strip"
      >
        <div className="section-heading horizontal-projects__heading">
          <p className="section-label">Project Strip</p>
          <h2>Swipe through selected work.</h2>
        </div>

        <div className="horizontal-projects__intro">
          <p>
            A quick visual pass through product-focused work across mobile, web,
            and interface design.
          </p>
        </div>

        {/* 🔥 TOP BAR */}
        <div className="horizontal-projects__topbar">
          <div className="horizontal-projects__progress">
            {allProjects.map((_, index) => (
              <span
                key={index}
                className={`horizontal-projects__dot ${
                  index === activeIndex ? "is-active" : ""
                }`}
              />
            ))}
          </div>

          <div className="horizontal-projects__controls">
            <button
              type="button"
              className="horizontal-projects__control"
              onClick={goPrev}
            >
              ‹
            </button>
            <button
              type="button"
              className="horizontal-projects__control"
              onClick={goNext}
            >
              ›
            </button>
          </div>
        </div>

        {/* 🔥 TRACK */}
        <div
          className="horizontal-projects__track"
          ref={trackRef}
          onWheel={handleWheel}
        >
          {allProjects.map((project, index) => (
            <article
              key={`${project.title}-${index}`}
              className={`horizontal-project-card ${
                activeIndex === index ? "is-active" : ""
              }`}
              onClick={() => handleCardClick(index)}
              role="button"
              tabIndex={0}
            >
              <div className="horizontal-project-card__image-wrap">
                <img
                  src={project.cover}
                  alt={project.title}
                  className="horizontal-project-card__image"
                />
              </div>

              <div className="horizontal-project-card__content">
                <p className="horizontal-project-card__index">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3>{project.title}</h3>
                <span>{project.category}</span>
              </div>
            </article>
          ))}
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

export default HorizontalProjects;