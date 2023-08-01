import "./styles.css";
import { useState } from "react";
import { RegisterEmail } from "./registerEmail";
import { RegisterUser } from "./registerUser";
import { ButtonOrange } from "../Common/Button/buttonOrange";
import { ButtonGrey } from "../Common/Button/buttonGrey";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [showRegisterEmail, setShowRegisterEmail] = useState(true);
  const [isButtonOrange, setIsButtonOrange] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const apiUrl = "http://localhost:3001";

  const handleContinueClick = () => {
    setShowRegisterEmail(false);
    if (email !== "" && username !== "" && password !== "") {
      registerNewUser();
      navigate("/home")
    }
  };

  const handleRegisterEmailFilled = (isFilled) => {
    setIsButtonOrange(isFilled);
  };

  const handleGoBack = () => {
    props.setShowRegister(false);
  };

  // conectar con endpoint register
// que tome mail, usuario, contrasena y lo mande al back

const registerNewUser = async () => {
  try {
    const response = await fetch(`${apiUrl}/users/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        nickname: props.nickname,
        email: email, // Usar el correo electrónico capturado en el estado del componente
      }),
    });
    const data = await response.json();
    console.log(data); // Aquí puedes hacer algo con la respuesta del backend, por ejemplo, mostrar un mensaje de éxito
  } catch (error) {
    console.error(error);
  }
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
        <RegisterEmail 
          onEmailFilled={handleRegisterEmailFilled}
          setEmail={setEmail} 
          email={email}
          />
      ) : (
        <RegisterUser 
        setUsername={setUsername}
        setPassword={setPassword}
        username={username}
        password={password}/>
      )}
      {isButtonOrange ? (
        <ButtonOrange text="Continuar" onClick={handleContinueClick} />
      ) : (
        <ButtonGrey text="Continuar" />
      )}
    </div>
  );
};
