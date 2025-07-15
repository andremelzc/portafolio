import React from "react";
import "../styles/Skills.css";
import "../styles/Animations.css";
import useScrollAnimation from "../util/useScrollAnimation";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { 
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si";
import SkillCard from "./SkillCard";

const Skills = () => {
  const { ref, visible } = useScrollAnimation(0.2);
  const skills = [
    // Frontend (Alta prioridad)
    { titulo: "React", Icono: FaReact },
    { titulo: "NextJS", Icono: SiNextdotjs },
    { titulo: "JavaScript", Icono: FaJs },
    { titulo: "TypeScript", Icono: SiTypescript },
    { titulo: "TailwindCSS", Icono: SiTailwindcss },
    
    // Fundamentos web (Media-alta prioridad)
    { titulo: "HTML5", Icono: FaHtml5 },
    { titulo: "CSS3", Icono: FaCss3Alt },
    
    // Backend & Database (Media prioridad)
    { titulo: "Python", Icono: FaPython },
    { titulo: "MySQL", Icono: SiMysql },
    
    // Herramientas & Otros (Media-baja prioridad)
    { titulo: "Git", Icono: FaGitAlt },
    { titulo: "C++", Icono: SiCplusplus },
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
