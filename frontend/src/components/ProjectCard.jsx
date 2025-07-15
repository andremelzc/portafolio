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
  FaVuejs,
  FaAngular,
  FaBootstrap,
  FaSass,
  FaPhp,
  FaJava,
  FaDocker,
  FaAws,
  FaDatabase,
} from "react-icons/fa";
import { 
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiWebpack,
  SiVite,
  SiNuxtdotjs,
  SiSvelte,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiJest,
  SiRedux,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiGithub,
  SiGitlab,
  SiFigma,
  SiPostman,
  SiNpm,
  SiYarn,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import "../styles/Animations.css";
import useScrollAnimation from "../util/useScrollAnimation";

const ProjectCard = ({ project, image, tecnologias, botones }) => {
  const tecnologiasIconos = [
    // Frontend Frameworks
    { titulo: "React", Icono: FaReact },
    { titulo: "Vue", Icono: FaVuejs },
    { titulo: "Angular", Icono: FaAngular },
    { titulo: "NextJS", Icono: SiNextdotjs },
    { titulo: "NuxtJS", Icono: SiNuxtdotjs },
    { titulo: "Svelte", Icono: SiSvelte },
    
    // Languages
    { titulo: "JavaScript", Icono: FaJs },
    { titulo: "TypeScript", Icono: SiTypescript },
    { titulo: "Python", Icono: FaPython },
    { titulo: "PHP", Icono: FaPhp },
    { titulo: "Java", Icono: FaJava },
    
    // Markup & Styling
    { titulo: "HTML5", Icono: FaHtml5 },
    { titulo: "CSS3", Icono: FaCss3Alt },
    { titulo: "Sass", Icono: FaSass },
    { titulo: "Bootstrap", Icono: FaBootstrap },
    { titulo: "TailwindCSS", Icono: SiTailwindcss },
    
    // Backend
    { titulo: "NodeJS", Icono: FaNodeJs },
    { titulo: "Express", Icono: SiExpress },
    { titulo: "Django", Icono: SiDjango },
    { titulo: "Flask", Icono: SiFlask },
    { titulo: "FastAPI", Icono: SiFastapi },
    
    // Databases
    { titulo: "MySQL", Icono: SiMysql },
    { titulo: "PostgreSQL", Icono: SiPostgresql },
    { titulo: "MongoDB", Icono: SiMongodb },
    { titulo: "Redis", Icono: SiRedis },
    { titulo: "Firebase", Icono: SiFirebase },
    
    // Tools & Build
    { titulo: "Git", Icono: FaGitAlt },
    { titulo: "GitHub", Icono: SiGithub },
    { titulo: "GitLab", Icono: SiGitlab },
    { titulo: "Docker", Icono: FaDocker },
    { titulo: "AWS", Icono: FaAws },
    { titulo: "Vercel", Icono: SiVercel },
    { titulo: "Netlify", Icono: SiNetlify },
    { titulo: "Heroku", Icono: SiHeroku },
    { titulo: "Vite", Icono: SiVite },
    { titulo: "Webpack", Icono: SiWebpack },
    { titulo: "npm", Icono: SiNpm },
    { titulo: "Yarn", Icono: SiYarn },
    
    // State Management & Data
    { titulo: "Redux", Icono: SiRedux },
    { titulo: "GraphQL", Icono: SiGraphql },
    
    // Testing & Quality
    { titulo: "Jest", Icono: SiJest },
    { titulo: "ESLint", Icono: SiEslint },
    { titulo: "Prettier", Icono: SiPrettier },
    
    // Design & Development Tools
    { titulo: "Figma", Icono: SiFigma },
    { titulo: "Postman", Icono: SiPostman },
  ];

  const botonesIconos = [
    { titulo: "github", Icono: FaGithub },
    { titulo: "preview", Icono: FaEye },
  ];

  const { ref, visible } = useScrollAnimation(0.05);

  return (
    <div ref={ref} className={`project-card ${visible ? "fade-in" : "fade-out"}`}>
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
