import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Glowi",
    desc: "Neon-style parent–child portal with events, calendar, achievements, and payments.",
    tech: "PHP • MySQL • React • Bootstrap • FullCalendar",
    img: "/images/glowi.png",
    demo: "https://rabbitrunout.github.io/Glowi/",
    github: "https://github.com/rabbitrunout/glowi"
  },
  {
    title: "FoodWasteTracker",
    desc: "Mobile app that reduces food waste with Core Data, gamification, and notifications.",
    tech: "SwiftUI • Core Data • Charts • iOS",
    img: "/images/foodwaste.png",
    demo: "#",
    github: "#"
  },
  {
    title: "Car Maintenance Tracker",
    desc: "App to track maintenance, OBD-II integration, analytics, PDF/CSV export.",
    tech: "React Native • Node.js • Express • MongoDB",
    img: "/images/car.png",
    demo: "#",
    github: "#"
  },
  {
    title: "Reservation System",
    desc: "React + PHP API booking system with resource & timeslot management.",
    tech: "React • PHP • MySQL • REST API",
    img: "/images/reservation.png",
    demo: "#",
    github: "#"
  }
];

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p>Here are some of the applications I’ve built and contributed to.</p>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img src={proj.img} alt={proj.title} className="project-img" />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <span>{proj.tech}</span>
                <div className="buttons">
                  <a href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a>
                  <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
