import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#">Home</a>
      <a href="#about">Sobre mí</a>
      <a href="#formation">Formación</a>
      <a href="#skill">Habilidades</a>
      <a href="#projects">Proyectos</a>
      <a href="#contact">Contáctame</a>
    </nav>
  );
};

export default NavBar;


