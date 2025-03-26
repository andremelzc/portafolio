import React from "react";
import "../styles/FormationCard.css";

const FormationCard = ({ tituloImagen, titulo, especialidad, año }) => {
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

export default FormationCard;