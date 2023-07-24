import "./styles.css";
import { useState } from "react";
import { RegisterEmail } from "./registerEmail";
import { RegisterUser } from "./registerUser";
import { ButtonOrange } from "../Common/Button/buttonOrange";
import { ButtonGrey } from "../Common/Button/buttonGrey";

export const Register = (props) => {
  const [showRegisterEmail, setShowRegisterEmail] = useState(true);
  const [isButtonOrange, setIsButtonOrange] = useState(false);

  const handleContinueClick = () => {
    setShowRegisterEmail(false);
  };

  // Funciones para recibir información sobre el estado de los campos de los componentes hijos
  const handleRegisterEmailFilled = (isFilled) => {
    setIsButtonOrange(isFilled);
  };

  const handleGoBack = () => {
    props.setShowRegister(false);
  };

  return (
    <div id="register-container">
      <header id="register-header">
        <div id="register-arrow-container">
          <img
            src="../../../public/images/arrow-back.png"
            id="register-arrow-image"
            alt=""
            onClick={handleGoBack}
          />
        </div>

        <h3 id="register-title">Crear cuenta</h3>
      </header>
      {showRegisterEmail ? (
        <RegisterEmail onEmailFilled={handleRegisterEmailFilled} />
      ) : (
        <RegisterUser />
      )}
      {isButtonOrange ? (
        <ButtonOrange text="Continuar" onClick={handleContinueClick} />
      ) : (
        <ButtonGrey text="Continuar" />
      )}
    </div>
  );
};
