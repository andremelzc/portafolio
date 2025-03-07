import React from "react";
import { FaCode, FaPalette, FaGamepad, FaFilm } from "react-icons/fa";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-header">
        <h1>Sobre mí</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          vehicula, nisi nec facilisis cursus, justo erat tincidunt libero, non
          tincidunt sapien eros nec libero. Curabitur ac felis nec urna
          tincidunt tincidunt. Sed sit amet sapien ut libero venenatis
          fermentum. Proin euismod, ligula a facilisis fermentum, justo purus
          gravida libero, nec scelerisque justo metus a libero. Integer nec
          magna sit amet purus tincidunt tincidunt. Vivamus vel turpis nec
          sapien scelerisque tincidunt. Donec vel felis at libero tincidunt
          tincidunt. Nullam vehicula, nisi nec facilisis cursus, justo erat
          tincidunt libero, non tincidunt sapien eros nec libero.
        </p>
      </div>

      <div className="about-content">
        <DatosPersonales />
        <Intereses />
      </div>

      <div className="about-botones"> 
        <button>Descargar CV</button>
        <button>Contáctame</button>
      </div>
    </section>
  );
};

export default About;

const DatosPersonales = () => {
  return (
    <div className="datos-personales">
      <h2>Datos Personales</h2>
      <ul>
        <li>
          <strong>Cumpleaños: </strong> 19 - 07 - 2005
        </li>
        <li>
          <strong>Email: </strong> andre050719mc@gmail.com
        </li>
        <li>
          <strong>Residencia: </strong> Lima
        </li>
      </ul>
    </div>
  );
};

const Intereses = () => {
  const intereses = [
    { titulo: "Programación", Icono: FaCode },
    { titulo: "Música", Icono: FaPalette },
    { titulo: "Videojuegos", Icono: FaGamepad },
    { titulo: "Películas", Icono: FaFilm },
  ];

  return (
    <div className="intereses">
      <h2>Intereses</h2>
      <div className="intereses-lista">
        {intereses.map((intereses, index) => (
          <InteresCuadro
            key={index}
            titulo={intereses.titulo}
            Icono={intereses.Icono}
          />
        ))}
      </div>
    </div>
  );
};

const InteresCuadro = ({ titulo, Icono }) => {
  return (
    <div className="interes-cuadro">
      <Icono size={40} color="white" />
      <h3>{titulo}</h3>
    </div>
  );
};
