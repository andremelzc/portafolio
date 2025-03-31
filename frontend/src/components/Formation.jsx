import React from "react";
import UNMSM from "../assets/logo_unmsm.png";
import Britanico from "../assets/logo_acpb.png";
import "../styles/Formation.css";
import "../styles/Animations.css";
import FormationCard from "./FormationCard";
import useScrollAnimation from "../util/UseScrollAnimation"; 

const Formation = () => {
  const { ref, visible } = useScrollAnimation(0.2);

  const Formacion = [
    {
      tituloImagen: UNMSM,
      titulo: "Universidad Nacional Mayor de San Marcos",
      especialidad: "Ingeniería de Software",
      año: "2023 - En curso",
    },
    {
      tituloImagen: Britanico,
      titulo: "Asociación Cultural Peruano Británica",
      especialidad: "Inglés Avanzado",
      año: "2020 - 2024",
    },
  ];
  return (
    <section className="formation-section" id="formation">
      <div ref={ref} className={`formation-header ${visible ? "fade-in" : "fade-out"}`}>
        <h1>Formación</h1>
      </div>
      <div className="formation-content">
        {Formacion.map((data, index) => (
          <FormationCard
            key={index}
            tituloImagen={data.tituloImagen}
            titulo={data.titulo}
            especialidad={data.especialidad}
            año={data.año}
          />
        ))}
      </div>
    </section>
  );
};

export default Formation;
