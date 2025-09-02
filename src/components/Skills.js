import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Figma", level: 70 },
];

const CircleSkill = ({ name, level }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="circle-skill">
      <svg className="progress-ring" width="120" height="120">
        <circle
          className="progress-ring__bg"
          stroke="#333"
          strokeWidth="10"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
        />
        <motion.circle
          className="progress-ring__circle"
          stroke="url(#grad)"
          strokeWidth="10"
          fill="transparent"
          r="50"
          cx="60"
          cy="60"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 50}
          strokeDashoffset={2 * Math.PI * 50}
          animate={
            inView
              ? { strokeDashoffset: (1 - level / 100) * 2 * Math.PI * 50 }
              : {}
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
        </defs>
      </svg>
      <div className="circle-text">
        <h3>{level}%</h3>
        <p>{name}</p>
      </div>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skill-bx">
        <h2>My Skills</h2>
        <p>Here are some of my main skills with experience level</p>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <CircleSkill key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
