import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";
import "../styles/Contact.css";
import "../styles/Animations.css";
import useEmailForm from "../util/useEmailForm";
import UseScrollAnimation from "../util/UseScrollAnimation";

const Contact = () => {
  const { ref, visible } = UseScrollAnimation(0.3);
  const { sendEmail, loading, success, error } = useEmailForm();

  // Objeto para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    time: "",
    email: "",
    message: "",
  });

  // Función para manejar el cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando...", formData);

    // Validación: Todos los campos son obligatorios
    if (!formData.name || !formData.email || !formData.message) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validación: No inputs con espacios vacíos  
    if (formData.name.trim() === "" || formData.email.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    // Validación: El correo electrónico debe ser válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    
    // Validación: El mensaje debe tener al menos 10 caracteres
    if (formData.message.length < 10) {
      alert("El mensaje debe tener al menos 10 caracteres.");
      return;
    }

    // Validación: El mensaje es muy largo
    if (formData.message.length > 500) {
      alert("El mensaje es demasiado largo. Máximo 500 caracteres.");
      return;
    }

    // Validación: El nombre debe tener al menos 3 caracteres
    if (formData.name.length < 3) {
      alert("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    await sendEmail(formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div
        ref={ref}
        className={`contact-header ${visible ? "fade-in" : "fade-out"}`}
      >
        <h1>Contacto</h1>
      </div>
      <div
        ref={ref}
        className={`contact-content ${visible ? "fade-in" : "fade-out"}`}
      >
        <form onSubmit={handleSubmit}>
          <p>
            Completa el formulario y me pondré en contacto contigo lo más pronto
            posible
          </p>
          <div className="contact-input-wrapper">
            <FaUser className="contact-icon" />
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nombres y apellidos"
              className="contact-input"
            />
          </div>
          <div className="contact-input-wrapper">
            <FaEnvelope className="contact-icon" />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className="contact-input"
            />
          </div>
          <div className="contact-input-wrapper textarea-wrapper">
            <FaCommentAlt className="contact-icon" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Mensaje"
              className="contact-input"
            ></textarea>
          </div>
          <button>Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
