import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
];

// Анимация контейнера (для волны)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // задержка между элементами
    },
  },
};

// Анимация кружка
const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const CircleSkill = ({ name, level }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="circle-skill"
      variants={itemVariants}
    >
      <svg className="progress-ring" width="180" height="180">
        <circle
          className="progress-ring__bg"
          stroke="#333"
          strokeWidth="10"
          fill="transparent"
          r="80"
          cx="90"
          cy="90"
        />
        <motion.circle
          className="progress-ring__circle"
          stroke="url(#grad)"
          strokeWidth="10"
          fill="transparent"
          r="80"
          cx="90"
          cy="90"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 80}
          strokeDashoffset={2 * Math.PI * 80}
          animate={
            inView
              ? { strokeDashoffset: (1 - level / 100) * 2 * Math.PI * 80 }
              : {}
          }
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--main-red)" />
            <stop offset="100%" stopColor="var(--accent-green)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="circle-text">
        <h3>{level}%</h3>
        <p>{name}</p>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skill-bx">
        <h2>My Skills</h2>
        <p>Here are some of my main skills with experience level</p>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <CircleSkill key={index} {...skill} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
