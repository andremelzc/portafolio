import React from "react";
import {
  FaMapMarkerAlt,
  FaBirthdayCake,
  FaLanguage,
  FaUniversity,
  FaCode,
} from "react-icons/fa";
import imagenEjemplo from "../assets/imagen_ejemplo.jpg";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h1>Sobre mí</h1>
      </div>
      <div className="about-content">
        <div className="about-left">
          <img src={imagenEjemplo} alt="Profile" className="image-profile-2" />
        </div>

        <div className="about-right">
          <p>
            Soy Andre Meléndez Cava, estudiante de Ingeniería de Software en la
            Universidad Nacional Mayor de San Marcos enfocado en el desarrollo
            de aplicaciones web.
          </p>
          <p>
            Me apasiona la resolución de problemas a través de la tecnología,
            creando soluciones eficientes y optimizadas.
          </p>
          <p>
            Mi objetivo es seguir creciendo como desarollador, participando en
            proyectos innovadores y colaborando con equipos que buscan crear
            impacto a través de la tecnología.
          </p>
          <div className="about-datos">
            <div className="dato-item">
              <FaMapMarkerAlt />
              <span>Lima, Perú</span>
            </div>
            <div className="dato-item">
              <FaLanguage />
              <span>Español (nativo), Inglés</span>
            </div>
            <div className="dato-item">
              <FaBirthdayCake />
              <span>19 años</span>
            </div>
            <div className="dato-item">
              <FaUniversity />
              <span>Universidad Nacional Mayor de San Marcos</span>
            </div>
          </div>
          <div className="about-botones">
            <button>DECARGAR CV</button>
            <button>CONTACTO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
