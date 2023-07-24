import { Input } from "../Common/Input/input";
import { useState, useEffect } from "react";

export const RegisterUser = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div id="register-user-container">
        <div id="register-user-title">
          <h1>Ingresa un nombre de usuario y contraseña.</h1>
        </div>
        <form action="">
          <label>Nombre de usuario:</label>
          <Input type="text" />
          <label>Contraseña:</label>
          <Input type="password" />
        </form>
        <p>Deberá contener al menos 8 caracteres.</p>
        <div id="register-user-acceptterms" onClick={handleCheckboxClick}>
          <img
            src={
              isChecked
                ? "../../../public/images/checkbox-ticked.png"
                : "../../../public/images/checkbox-empty.png"
            }
            alt="Checkbox"
          />
          <span>
            He leído y acepto los <a>Términos</a> y <a>Condiciones.</a>
          </span>
        </div>
      </div>
    </div>
  );
};
