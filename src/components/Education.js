import React, { useState } from "react";

const Education = () => {
  const [showDiploma, setShowDiploma] = useState(false);

  return (
    <section className="editorial-section editorial-education" id="education">

      <div className="section-heading">
        <p className="section-label">Education</p>
        <h2>Academic Foundation.</h2>
      </div>

      <div className="editorial-diploma editorial-diploma--simple">

        <div>

          <h3>Honours Diploma</h3>

          <p>
            <strong>triOS College</strong>
            <br />
            Mobile Application Development using AI
          </p>

          <p className="education-meta">
            Honours Graduate • 98% GPA • 2026
          </p>

        </div>

        <button
          type="button"
          className="editorial-btn editorial-btn--primary"
          onClick={() => setShowDiploma(true)}
        >
          View Diploma
        </button>

      </div>

      {showDiploma && (

        <div
          className="diploma-lightbox"
          onClick={() => setShowDiploma(false)}
        >

          <div
            className="diploma-lightbox__content"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="diploma-lightbox__close"
              onClick={() => setShowDiploma(false)}
            >
              ×
            </button>

            <img
              src="/diploma-full.png"
              alt="Honours Diploma"
              className="diploma-lightbox__image"
            />

            

          </div>

        </div>

      )}

    </section>
  );
};

export default Education;