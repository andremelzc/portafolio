import React from "react";
import "../styles/ProjectCard.css";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaEye,
} from "react-icons/fa";

const ProjectCard = ({ project, image, tecnologias, botones }) => {
  const tecnologiasIconos = [
    { titulo: "React", Icono: FaReact },
    { titulo: "Python", Icono: FaPython },
    { titulo: "HTML5", Icono: FaHtml5 },
    { titulo: "CSS3", Icono: FaCss3Alt },
    { titulo: "JavaScript", Icono: FaJs },
    { titulo: "NodeJs", Icono: FaNodeJs },
    { titulo: "Git", Icono: FaGitAlt },
  ];

  const botonesIconos = [
    { titulo: "github", Icono: FaGithub },
    { titulo: "preview", Icono: FaEye },
  ];
  return (
    <div className="project-card">
      <div className="project-card-image">
        <img src={image} alt={project} className="project-image" />
        <div className="project-card-image-overlay">
          <div className="project-card-image-overlay-buttons">
            {botones.map((botonInfo, index) => {
              const boton = botonesIconos.find(
                (b) => b.titulo.toLowerCase() === botonInfo.tipo.toLowerCase()
              );

              if(!boton){
                return null;
              }

              return (
                <a key={index} href={botonInfo.url} target="_blank">
                  <boton.Icono />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-card-title">
          <h1>{project}</h1>
        </div>
        <div className="project-card-tecnologies">
          {tecnologias.map((tecnologia, index) => {
            const skill = tecnologiasIconos.find(
              (skill) => skill.titulo === tecnologia
            );
            return (
              <div key={index} className="project-card-tecnology">
                {skill && <skill.Icono className="tecnology-icon" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
