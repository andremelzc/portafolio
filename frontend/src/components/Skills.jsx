import React from "react";
import "../styles/Skills.css";
import "../styles/Animations.css";
import useScrollAnimation from "../util/UseScrollAnimation";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { ref, visible } = useScrollAnimation(0.2);
  const skills = [
    { titulo: "React", Icono: FaReact },
    { titulo: "Python", Icono: FaPython },
    { titulo: "HTML5", Icono: FaHtml5 },
    { titulo: "CSS3", Icono: FaCss3Alt },
    { titulo: "JavaScript", Icono: FaJs },
    { titulo: "C++", Icono: SiCplusplus },
    { titulo: "Git", Icono: FaGitAlt },
  ];

  return (
    <section className="skills-section" id="skill">
      <div ref={ref} className={`skills-header ${visible ? "fade-in" : "fade-out"}`}>
        <h1>Tecnologías</h1>
      </div>
      <div className="skills-content">
        {skills.map((skill, index) => (
          <SkillCard key={index} titulo={skill.titulo} Icono={skill.Icono} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
