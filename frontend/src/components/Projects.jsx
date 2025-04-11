import React from "react";
import ProjectCard from "./ProjectCard";
import UseScrollAnimation from "../util/UseScrollAnimation";
import "../styles/Projects.css";
import portafolio from "../assets/proyecto_portafolio.png";

const Projects = () => {
  const { ref, visible } = UseScrollAnimation(0.2);
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
        {/*<div className="error-504">
          <h2>504</h2>
          <p>Gateway Timeout</p>
        </div>*/}
      </div>
    </section>
  );
};

export default Projects;
