import React from "react";
import "../styles/Home.css";
import "../styles/Animations.css";
import imagenEjemplo from "../assets/imagen_ejemplo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import UseScrollAnimation from "../util/UseScrollAnimation";

const Home = () => {
  const { ref, visible } = UseScrollAnimation(0.2);

  return (
    <section className={`home-section`} id="home">
      <div ref={ref} className={`home-left ${visible ? "slide-in-left" : "slide-out-left"}`}>
        <div className="container-greeting">
          <h1>Hola! soy</h1>
          <h2>André Meléndez Cava</h2>
        </div>
        <div className="container-info">
          <h3>Ingeniero de Software</h3>
        </div>
        <div className="container-presentation">
          <p>
            Estudiante de Ingeniería de Software en la Universidad Nacional
            Mayor de San Marcos enfocado en el Desarrollo Web Frontend.
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
      <div ref={ref} className={`home-right ${visible ? "fade-in" : "fade-out"}`}>
        <img src={imagenEjemplo} alt="Profile" className="image-profile" />
      </div>
    </section>
  );
};

export default Home;
