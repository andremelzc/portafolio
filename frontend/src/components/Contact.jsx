import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";
import "../styles/Contact.css";
import "../styles/Animations.css";
import useEmailForm from "../util/useEmailForm";
import UseScrollAnimation from "../util/UseScrollAnimation";
import NotificationCard from "./NotificationCard";

const Contact = () => {
  const { ref, visible } = UseScrollAnimation(0.3);

  // Hook para manejar el envío de correos
  const { sendEmail, loading, success, error } = useEmailForm();

  // Hook para manejar la notificación
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "",
  });

  // Objeto para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    time: "",
    email: "",
    message: "",
  });

  // Función para manejar la notificación
  useEffect(() => {
    if (success) {
      setNotification({
        show: true,
        message: "Correo enviado con éxito",
        type: "success",
      });
    }
    if (error) {
      setNotification({
        show: true,
        message: "Error al enviar el correo",
        type: "error",
      });
    }
  }, [success, error]);

  // Función para manejar el cambio de los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name == "name") {
      setFormData((prev) => ({
        ...prev,
        title: `Hey! Quiero contactarme contigo - ${value}`,
      }));
    }
  };

  // Función para setear un timer para ocultar la notificación
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, message: "", type: "" });
      }, 3000); // 3 segundos

      return () => clearTimeout(timer); // Limpiar el timer al desmontar el componente
    }
  }, [notification.show]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Enviando...");

    // Validación: Todos los campos son obligatorios
    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        show: true,
        message: "Por favor, completa todos los campos.",
        type: "error",
      });
      return;
    }

    // Validación: No inputs con espacios vacíos
    if (formData.name.trim() === "" || formData.email.trim() === "") {
      setNotification({
        show: true,
        message: "Por favor, completa todos los campos.",
        type: "error",
      });
      return;
    }

    // Validación: El nombre debe tener al menos 3 caracteres
    if (formData.name.length < 3) {
      setNotification({
        show: true,
        message: "El nombre debe tener al menos 3 caracteres.",
        type: "error",
      });
      return;
    }

    // Validación: El correo electrónico debe ser válido
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setNotification({
        show: true,
        message: "Correo electrónico inválido",
        type: "error",
      });
      return;
    }

    // Validación: El mensaje debe tener al menos 10 caracteres
    if (formData.message.length < 10) {
      setNotification({
        show: true,
        message: "El mensaje debe tener al menos 10 caracteres.",
        type: "error",
      });
      return;
    }

    // Validación: El mensaje es muy largo
    if (formData.message.length > 500) {
      setNotification({
        show: true,
        message: "El mensaje es demasiado largo.",
        type: "error",
      });
      return;
    }

    formData.time = new Date().toLocaleString("es-ES", {
      timeZone: "America/Lima",
    });

    //await sendEmail(formData);
    console.log("Enviado", formData);
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
      {notification.show && (
        <div>
          <NotificationCard
            message={notification.message}
            type={notification.type}
          />
        </div>
      )}
    </section>
  );
};

export default Contact;
