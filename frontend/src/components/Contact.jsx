import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-header">
        <h1>Contacto</h1>
      </div>
      <div className="contact-content">
        <form>
          <p>
            Completa el formulario y me pondré en contacto contigo lo más pronto posible
          </p>
          <div className="contact-name">
            <div className="contact-input-wrapper">
              <FaUser className="contact-icon" />
              <input placeholder="Nombre" className="contact-input" />
            </div>
            <div className="contact-input-wrapper">
              <FaUser className="contact-icon" />
              <input placeholder="Apellido" className="contact-input" />
            </div>
          </div>
          <div className="contact-input-wrapper">
            <FaEnvelope className="contact-icon" />
            <input placeholder="Correo electrónico" className="contact-input" />
          </div>
          <div className="contact-input-wrapper textarea-wrapper">
            <FaCommentAlt className="contact-icon" />
            <textarea placeholder="Mensaje" className="contact-input"></textarea>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;