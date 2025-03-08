import React from "react";
import "../styles/Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";

const Skills = () => {
  const skills = [
    { titulo: "React", Icono: FaReact },
    { titulo: "Python", Icono: FaPython },
    { titulo: "HTML5", Icono: FaHtml5 },
    { titulo: "CSS3", Icono: FaCss3Alt },
    { titulo: "JavaScript", Icono: FaJs },
    { titulo: "C++", Icono: SiCplusplus },
  ];

  return (
    <section className="skills-section" id="skill">
      <div className="skills-header">
        <h1>Habilidades</h1>
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

const SkillCard = ({ titulo, Icono }) => {
  return (
    <div className="skill-card">
      <div className="skill-imagen-container">
        <Icono size={60} color="white" />
      </div>
      <div className="skill-text-container">
        <h2>{titulo}</h2>
      </div>
    </div>
  );
};
