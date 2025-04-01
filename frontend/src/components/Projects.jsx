import React from "react";
import UseScrollAnimation from "../util/UseScrollAnimation";
import "../styles/Projects.css";

const Projects = () => {
  const { ref, visible } = UseScrollAnimation(0.2);
  return (
    <section className="projects-section" id="projects">
      <div ref={ref} className={`projects-header ${visible ? "fade-in" : "fade-out"}`}>
        <h1>Proyectos</h1>
      </div>
      <div className="projects-content">
        <div className="error-504">
          <h2>504</h2>
          <p>Gateway Timeout</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
