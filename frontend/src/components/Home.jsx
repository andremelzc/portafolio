import React from "react";
import "../styles/Home.css";
import imagenEjemplo from "../assets/imagen_ejemplo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-left">
        <div className="container-greeting">
          <h1>Hola! soy</h1>
          <h2>André Meléndez Cava</h2>
        </div>
        <div className="container-info">
          <h3>Ingeniero de Software</h3>
        </div>
        <div className="container-presentation">
          <p>
            Estudiante de Ingeniería de Software en la Universidad Nacional Mayor de San Marcos enfocado en el Desarrollo Web Frontend.
          </p>
        </div>

        <div className="icons">
          <a
            href="https://github.com/andremelzc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/andr%C3%A9-ivan-mel%C3%A9ndez-cava-b3035a342/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.instagram.com/andremelc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="home-right">
        <img src={imagenEjemplo} alt="Profile" className="image-profile" />
      </div>
      {/*<div className="home-card">
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
      </div>*/}
    </section>
  );
};

export default Home;
