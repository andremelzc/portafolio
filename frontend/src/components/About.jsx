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
import "../styles/Animations.css";
import useScrollAnimation from "../util/useScrollAnimation";

const About = () => {
  const header = useScrollAnimation(0.05);
  const content = useScrollAnimation(0.05);

  const goToContact = () => {
    window.location.href = "#contact";
  };
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
      dato: "Español (nativo), Inglés avanzado",
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
      <div
        ref={header.ref}
        className={`about-header ${header.visible ? "fade-in" : "fade-out"}`}
      >
        <h1>Sobre mí</h1>
      </div>
      <div ref={content.ref} className="about-content">
        <div ref={content.ref} className={`about-left ${content.visible ? "fade-in" : "fade-out"}`}>
          <img src={imagenEjemplo} alt="Profile" className="image-profile-2" />
        </div>

        <div
          ref={content.ref}
          className={`about-right ${
            content.visible ? "slide-in-right" : "slide-out-right"
          }`}
        >
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
            <button className="border-btn">DESCARGAR CV</button>
            <button onClick={goToContact} className="full-btn">
              CONTACTO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
