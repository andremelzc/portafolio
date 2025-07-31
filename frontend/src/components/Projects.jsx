import React from "react";
import ProjectCard from "./ProjectCard";
import useScrollAnimation from "../util/useScrollAnimation";
import "../styles/Projects.css";
import portafolio from "../assets/proyecto_portafolio.png";
import ecommerce from "../assets/proyecto_ecommerce.png";
import clima from "../assets/proyecto_clima.png";
import "../styles/Animations.css"; 

const Projects = () => {
  const { ref, visible } = useScrollAnimation(0.2);
  return (
    <section className="projects-section" id="projects">
      <div
        ref={ref}
        className={`projects-header ${visible ? "fade-in" : "fade-out"}`}
      >
        <h1>Proyectos</h1>
      </div>
      <div className="projects-content">
        <ProjectCard
          project={"Portafolio Personal"}
          image={portafolio}
          tecnologias={["React", "JavaScript", "CSS3", "HTML5"]}
          botones={[
            { tipo: "github", url: "https://github.com/andremelzc/portafolio" },
            {
              tipo: "preview",
              url: "https://portafolio-seven-wheat.vercel.app/",
            },
          ]}
        />
        <ProjectCard
          project={"Sistema Ecommerce"}
          image={ecommerce}
          tecnologias={["NextJS", "React", "TypeScript", "TailwindCSS", "MySQL"]}
          botones={[
            { tipo: "github", url: "https://github.com/andremelzc/ecommerce" }
            /*{
              tipo: "preview",
              url: "https://portafolio-seven-wheat.vercel.app/",
            },*/
          ]}
        />
        <ProjectCard
        project={"Clima App"}
        image={clima}
        tecnologias={["React", "NodeJS", "TailwindCSS"]}
        botones={[
          { tipo: "github", url: "https://github.com/andremelzc/clima_app"},
          {
            tipo: "preview",
            url: "https://clima-app-opal.vercel.app/",
          }
        ]}
        />
        
        {/*<div className="error-504">
          <h2>504</h2>
          <p>Gateway Timeout</p>
        </div>*/}
      </div>
    </section>
  );
};

export default Projects;
