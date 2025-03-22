import React from "react";
import UNMSM from "../assets/logo_unmsm.png";
import Britanico from "../assets/logo_acpb.png";
import "../styles/Formation.css";

const Formation = () => {
  return (
    <section className="formation-section" id="formation">
      <div className="formation-header">
        <h1>Formación</h1>
      </div>
      <div className="formation-content">
        <FormacionCuadro
          tituloImagen={UNMSM}
          titulo="Universidad Nacional Mayor de San Marcos"
          especialidad="Ingeniería de Software"
          año="2023 - 202X"
        />
        <FormacionCuadro
          tituloImagen={Britanico}
          titulo="Asociación Cultural Peruano Británica"
          especialidad="Inglés Avanzado"
          año="2018 - 2023"
        />
      </div>
    </section>
  );
};

export default Formation;

const FormacionCuadro = ({ tituloImagen, titulo, especialidad, año }) => {
  return (
    <div className="formacion-cuadro">
      <div className="formacion-imagen-container">
        <img src={tituloImagen} alt={titulo} />
      </div>
      <div className="formacion-text-container">
        <h2>{titulo}</h2>
        <h3>{especialidad}</h3>
        <p>{año}</p>
      </div>
    </div>
  );
};
