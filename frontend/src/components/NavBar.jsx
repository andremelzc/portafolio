import React from "react";
import BotonNavBar from "./BotonNavBar";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#about">Sobre mí</a>
        <a href="#formation">Formación</a>
        <a href="#skill">Habilidades</a>
        <a href="#projects">Proyectos</a>
        <a href="#contact">Contáctame</a>
      </nav>
      <div className="boton">
        <BotonNavBar />
      </div>
    </header>
  );
};

export default NavBar;
