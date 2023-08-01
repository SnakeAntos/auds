import { useState, useEffect } from "react";
import { Input } from "../Common/Input/input";

export const RegisterEmail = ({ onEmailFilled, setEmail, email }) => {


  const handleInputChange = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  // Función para determinar si el campo está completo
  const isEmailFilled = () => {
    return email.trim() !== "";
  };

  // Actualiza el estado del botón en el componente padre cuando cambia el contenido del campo
  useEffect(() => {
    const isFilled = isEmailFilled();
    onEmailFilled(isFilled);
  }, [email, onEmailFilled]);

  useEffect(() => {
    setEmail(email);
  }, [email, setEmail]);

  return (
    <div id="register-email-container">
      <div id="register-email-title">
        <h1>Cuál es tu correo electrónico?</h1>
      </div>
      <form action="">
        <label>Correo electrónico</label>
        <Input type="email" onChange={handleInputChange} value={email}/>
      </form>
      <p>Deberás poder confirmarlo luego.</p>
    </div>
  );
};
