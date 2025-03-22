import React, { useState, useEffect } from "react";
import BotonNavBar from "./BotonNavBar";
import "../styles/NavBar.css";

const NavBar = () => {
  // Para gestionar el estado del botón de la NavBar
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  // Para gestiónar el estado de la sección que se está viendo
  const [activeSection, setActiveSection] = useState("home");

  // Para gestionar el subrayado de la sección activa
  useEffect(() => {
    // Selección de todas las secciones de la página
    const sections = document.querySelectorAll("section");
    // Creamos un observer para observar las secciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.9 } // 0.5 significa que el 50% de la sección tiene que estar en el viewport
    );

    // Observamos cada sección
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Dejamos de observar
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="header">
      <nav className={`navbar${clicked ? "-active" : ""}`}>
        <a href="#" className={activeSection === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={activeSection === "about" ? "active" : ""}>
          Sobre mí
        </a>
        <a
          href="#formation"
          className={activeSection === "formation" ? "active" : ""}
        >
          Formación
        </a>
        <a href="#skill" className={activeSection === "skill" ? "active" : ""}>
          Habilidades
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          Proyectos
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contacto
        </a>
      </nav>
      <div className="boton">
        <BotonNavBar clicked={clicked} handleClick={handleClick} />
      </div>
      <div className={`links-background${clicked ? "-active" : ""}`}></div>
    </header>
  );
};

export default NavBar;
