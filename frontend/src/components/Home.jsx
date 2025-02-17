import React from "react";
import "../styles/Home.css";
import imagenEjemplo from "../assets/imagen_ejemplo.jpg";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-card">
        <img src={imagenEjemplo} alt="Profile" className="profile-image" />
        <h1 className="h1-card">Andre Melendez Cava</h1>
        <h2 className="h2-card">Full Stack Developer</h2>
      </div>
    </section>
  );
};

export default Home;
