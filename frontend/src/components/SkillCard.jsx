import React from "react";
import "../styles/SkillCard.css";

const SkillCard = ({ titulo, Icono }) => {
  return (
    <div className="skill-card">
      <div className="skill-imagen-container">
        <Icono size={60} color="white" />
      </div>
      <div className="skill-text-container">
        <h2>{titulo}</h2>
      </div>
    </div>
  );
};

export default SkillCard;