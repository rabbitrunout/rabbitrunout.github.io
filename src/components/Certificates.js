import React, { useState } from "react";

const certificates = [
  {
    title: "CSS Fundamentals: Unlock the Power of Web Styling",
    img: "/certificates/css.png",
    pdf: "/certificates/1.pdf",
  },
  {
    title: "Modern CSS Techniques without JavaScript",
    img: "/certificates/js.png",
    pdf: "/certificates/2.pdf",
  },
  {
    title: "Web Design and Development",
    img: "/certificates/design.png",
    pdf: "/certificates/3.pdf",
  },
  {
    title: "WEB-developer",
    img: "/certificates/5.png",
    pdf: "/certificates/5.png",
  },
  {
    title: "Web Development (HTML5, CSS3)",
    img: "/certificates/4.png",
    pdf: "/certificates/4.png",
  },
];

const Certificates = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const prevCert = () =>
    setSelectedIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  const nextCert = () =>
    setSelectedIndex((prev) => (prev + 1) % certificates.length);

  return (
    <section className="editorial-section editorial-certificates" id="certificates">
      <div className="section-heading">
        <p className="section-label">Certificates</p>
        <h2>Selected credentials supporting my technical path.</h2>
      </div>

      <div className="editorial-certificates__grid">
        {certificates.map((cert, i) => (
          <article
            key={i}
            className="certificate-card"
            onClick={() => setSelectedIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedIndex(i);
              }
            }}
          >
            <div className="certificate-card__image-wrap">
              <img src={cert.img} alt={cert.title} />
            </div>

            <div className="certificate-card__content">
              <p className="certificate-card__index">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3>{cert.title}</h3>
              <span>Click to preview</span>
            </div>
          </article>
        ))}
      </div>

      {selectedIndex !== null && (
        <div className="editorial-modal-overlay" onClick={closeModal}>
          <div
            className="editorial-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="editorial-modal-close" onClick={closeModal}>
              ×
            </button>

            <div className="editorial-modal-body">
              <div className="editorial-modal-image-wrap">
                <img
                  src={certificates[selectedIndex].img}
                  alt={certificates[selectedIndex].title}
                  className="editorial-modal-img"
                />
              </div>

              <div className="editorial-modal-info">
                <p className="section-label">Certificate</p>
                <h3>{certificates[selectedIndex].title}</h3>

                <div className="editorial-modal-actions">
                  <a
                    href={certificates[selectedIndex].pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-modal-link"
                  >
                    Open File
                  </a>
                </div>
              </div>
            </div>

            <button className="editorial-slider-btn prev" onClick={prevCert}>
              ‹
            </button>
            <button className="editorial-slider-btn next" onClick={nextCert}>
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;