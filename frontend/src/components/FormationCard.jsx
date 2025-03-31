import React from "react";
import "../styles/FormationCard.css";
import "../styles/Animations.css";
import useScrollAnimation from "../util/UseScrollAnimation"; 

const FormationCard = ({ tituloImagen, titulo, especialidad, año }) => {
  const { ref, visible } = useScrollAnimation(0.2);
  return (
    <div ref={ref} className={`formacion-cuadro ${visible ? "fade-in" : "fade-out"}`}>
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