import React, { useState } from "react";
import emailjs from "emailjs-com";

const useEmailForm = () => {
  // Estado para manejar el envío de correos
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Credenciales (deberían estar en un archivo .env en producción)
  const SERVICE_ID = "service_wmqjqkr";
  const TEMPLATE_ID = "template_dqxhyjo";
  const USER_ID = "RY_MAUVZHMIIbk4dc";

  const sendEmail = async (formData) => {
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        USER_ID
      );

      console.log("Correo enviado con éxito", response);
      setSuccess(true);
      return { success: true };
    } catch (e) {
      console.error("Error al enviar el correo:", e);
      setError(e);
      return { success: false, error: e };
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading, success, error };
};

export default useEmailForm;
