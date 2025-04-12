import React from "react";
import "../styles/SkillCard.css";
import "../styles/Animations.css";
import useScrollAnimation from "../util/useScrollAnimation";

const SkillCard = ({ titulo, Icono }) => {
  const { ref, visible } = useScrollAnimation(0.2);
  return (
    <div ref={ref} className={`skill-card ${visible ? "fade-in" : "fade-out"}`}>
      <div className="skill-imagen-container">
        <Icono size={60} />
      </div>
      <div className="skill-text-container">
        <h2>{titulo}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
