import React, { useState } from "react";
import BotonNavBar from "./BotonNavBar";
import "../styles/NavBar.css";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <header className="header">
      <nav className={`navbar${clicked ? "-active" : ""}`}>
        <a onClick={handleClick} href="#">Home</a>
        <a onClick={handleClick} href="#about">Sobre mí</a>
        <a onClick={handleClick} href="#formation">Formación</a>
        <a onClick={handleClick} href="#skill">Habilidades</a>
        <a onClick={handleClick} href="#projects">Proyectos</a>
        <a onClick={handleClick} href="#contact">Contáctame</a>
      </nav>
      <div className="boton">
        <BotonNavBar clicked={clicked} handleClick={handleClick}/>
      </div>
      <div className={`links-background${clicked ? "-active" : ""}`}>
      </div>
    </header>
  );
};

export default NavBar;
