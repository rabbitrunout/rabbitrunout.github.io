import React from "react";
import {
  Cpu,
  Layout,
  Smartphone,
  Apple,
  Paintbrush,
  Atom,
  Code,
  BookOpen,
  Coffee,
  Boxes,
  FileCode,
  Palette,
  SquareCode,
  CircleDot,
  Database,
  Bird,
  Terminal,
  Globe,
} from "lucide-react";

const skills = [
  { icon: <Cpu size={38} />, name: "Artificial Intelligence (AI)" },
  { icon: <Layout size={38} />, name: "UI/UX Web Design" },
  { icon: <Smartphone size={38} />, name: "Android Development" },
  { icon: <Apple size={38} />, name: "iOS Development" },
  { icon: <Paintbrush size={38} />, name: "Graphic Design" },
  { icon: <Atom size={38} />, name: "Web Applications" },
  { icon: <Code size={38} />, name: "Web Development" },
  { icon: <BookOpen size={38} />, name: "Intro to Web Design & Dev" },
  { icon: <Coffee size={38} />, name: "Java Development" },
  { icon: <Boxes size={38} />, name: "User Interface Design" },
  { icon: <FileCode size={38} />, name: "HTML" },
  { icon: <Palette size={38} />, name: "CSS" },
  { icon: <SquareCode size={38} />, name: "JavaScript Development" },
  { icon: <Atom size={38} />, name: "React Development" },
  { icon: <CircleDot size={38} />, name: "Angular" },
  { icon: <Database size={38} />, name: "PHP & MySQL" },
  { icon: <Bird size={38} />, name: "Swift Development" },
  { icon: <Terminal size={38} />, name: "Linux" },
  { icon: <Globe size={38} />, name: "WordPress" },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skill-bx">
        <h2>Skills & Tech Stack</h2>
        <p>Technologies and tools I use to bring ideas to life</p>

        <div className="icons-grid full-width">
          {skills.map((skill, index) => (
            <div className="icon-box" key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
