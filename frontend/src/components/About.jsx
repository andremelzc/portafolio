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
  // Mapeo de nombres a componentes de iconos
  const Iconos = {
    FaMapMarkerAlt: FaMapMarkerAlt,
    FaLanguage: FaLanguage,
    FaBirthdayCake: FaBirthdayCake,
    FaUniversity: FaUniversity,
  };

  // Lista de datos personales
  const DatosPersonales = [
    {
      icono: "FaMapMarkerAlt",
      dato: "Lima, Perú",
    },
    {
      icono: "FaLanguage",
      dato: "Español (nativo), Inglés",
    },
    {
      icono: "FaBirthdayCake",
      dato: "19 años",
    },
    {
      icono: "FaUniversity",
      dato: "Universidad Nacional Mayor de San Marcos",
    },
  ];

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
            Mi objetivo es seguir creciendo como desarrollador, participando en
            proyectos innovadores y colaborando con equipos que buscan crear
            impacto a través de la tecnología.
          </p>
          <div className="about-datos">
            {DatosPersonales.map((item, index) => {
              const Icono = Iconos[item.icono]; // Obtener el componente del ícono
              return (
                <div className="dato-item" key={index}>
                  <Icono />
                  <span>{item.dato}</span>
                </div>
              );
            })}
          </div>
          <div className="about-botones">
            <button>DESCARGAR CV</button>
            <button>CONTACTO</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
