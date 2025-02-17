import React from "react";
import "../styles/Home.css";
import imagenEjemplo from "../assets/imagen_ejemplo.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-card">
        <img src={imagenEjemplo} alt="Profile" className="profile-image" />
        <h1 className="h1-card">Andre</h1>
        <h2 className="h2-card">Full Stack Developer</h2>
        <div className="icons-card">
          <a href="https://github.com/andremelzc" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/andr%C3%A9-ivan-mel%C3%A9ndez-cava-b3035a342/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/andremelzc/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
