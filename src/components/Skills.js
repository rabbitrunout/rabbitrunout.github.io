import React from "react";
import {
  Code,
  Palette,
  Braces,
  Atom,
  FileType,
  Layout,
  Paintbrush,
  Smartphone,
  Apple,
  Coffee,
  Cpu,
  GitBranch,
  Cloud,
  Network,
} from "lucide-react";

const skills = [
  { icon: <Code size={38} />, name: "HTML" },
  { icon: <Palette size={38} />, name: "CSS" },
  { icon: <Braces size={38} />, name: "JavaScript" },
  { icon: <Atom size={38} />, name: "React" },
  { icon: <FileType size={38} />, name: "TypeScript" },
  { icon: <Layout size={38} />, name: "UI/UX" },
  { icon: <Paintbrush size={38} />, name: "Graphic Design" },
  { icon: <Smartphone size={38} />, name: "Android" },
  { icon: <Apple size={38} />, name: "iOS" },
  { icon: <Coffee size={38} />, name: "Java" },
  { icon: <Cpu size={38} />, name: "AI" },
  { icon: <GitBranch size={38} />, name: "Git" },
  { icon: <Cloud size={38} />, name: "Vercel" },
  { icon: <Network size={38} />, name: "Netlify" },
];

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="skill-bx">
        <h2>Skills & Tools</h2>
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
