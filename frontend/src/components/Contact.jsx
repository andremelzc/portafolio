import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contacto</h1>
      </div>
      <div className="contact-content">
        <form>
          <label>Nombres y apellidos</label>
          <input placeholder="Escribe tu nombre" />
          <label>Correo electrónico</label>
          <input placeholder="Escribe tu correo electrónico" />
          <label>Teléfono</label>
          <input placeholder="Ingrese su teléfono" />
          <label>Mensaje</label>
          <textarea placeholder="Ingrese su mensaje"></textarea>
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
