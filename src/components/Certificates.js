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

export const Certificates = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const prevCert = () =>
    setSelectedIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  const nextCert = () =>
    setSelectedIndex((prev) => (prev + 1) % certificates.length);

  return (
    <section className="certificates" id="certificates">
      <h2>Certificates</h2>
      <p>Here are some of my certificates and achievements.</p>

      <div className="cert-grid">
        {certificates.map((cert, i) => (
          <div key={i} className="cert-icon" onClick={() => setSelectedIndex(i)}>
            <img src={cert.img} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>

      {/* 🔥 Модалка */}
      {selectedIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <img
              src={certificates[selectedIndex].img}
              alt={certificates[selectedIndex].title}
              className="modal-img"
            />
            <h3>{certificates[selectedIndex].title}</h3>
            {/* <a
              href={certificates[selectedIndex].pdf}
              target="_blank"
              rel="noreferrer"
              className="modal-link"
            >
              View PDF
            </a> */}

            {/* стрелки */}
            <button className="slider-btn prev" onClick={prevCert}>‹</button>
            <button className="slider-btn next" onClick={nextCert}>›</button>
          </div>
        </div>
      )}
    </section>
  );
};
