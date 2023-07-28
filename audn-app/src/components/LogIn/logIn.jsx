import "./styles.css";
import { Input } from "../Common/Input/input";
import { ButtonGrey } from "../Common/Button/buttonGrey";
import { RecupCont } from "../RecupCont/recup";
import { useState } from "react";
import { ButtonOrange } from "../Common/Button/buttonOrange";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export const LogIn = (props) => {
  const [showRecupCont, setShowRecupCont] = useState(false);
  const {login, user} = useAuth()

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const validateUsername = (username) => {
    // Agregar aquí la lógica de validación del nombre de usuario o correo electrónico
    // Puedes verificar el formato, la longitud, entre otras cosas
    return username.trim().length > 0; // Comprobamos que no esté vacío después de eliminar espacios en blanco al inicio y final
  };

  const validatePassword = (password) => {
    // Agregar aquí la lógica de validación de la contraseña
    // Puedes verificar la longitud, complejidad, caracteres permitidos, etc.
    return password.length >= 8; // Por ejemplo, aquí simplemente comprobamos que tenga al menos 8 caracteres
  };

  const handleGoBack = () => {
    props.setShowLogIn(false);
  };
  //aca
  const handleForgotPasswordClick = () => {
    setShowRecupCont(true);
  };

  const handleLogin = () => {
    login(username, password)
    .then(data => {
      if (data.accessToken) {
        navigate("/home");
      } else {
        console.log("Error: No se recibió el token de acceso.");
      }
    })
    .catch(error => {
      console.error("Error al iniciar sesión:", error);
    });
  };

  const handleUsernameChange = (event) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
  }

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
  }

  return (
    <div className="login-container">
      {showRecupCont ? (
        <RecupCont />
      ) : (
        <>
          <div className="login-nav">
            <img
              src="../../../public/images/arrow-back.png"
              className="login-left-arrow"
              alt="Flecha hacia atrás"
              onClick={handleGoBack}
            ></img>

            <div className="login-header">
              <h3 className="login-title">Iniciar Sesion</h3>
            </div>
          </div>
          <div className="login-body">
            <div className="login-btn1">
              <label htmlFor="username">Nombre de Usuario o E-mail:</label>
              <Input
                className="login-input-name"
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="login-btn2">
              <label htmlFor="password">Contraseña:</label>
              <Input
                className="login-input-password"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            <div className="register-footer">
              <div className="login-btn3">
                {username.length > 0 && password.length > 0 ? (
                  <ButtonOrange
                    text="Iniciar Sesion"
                    className="input-sesion"
                    onClick={handleLogin}
                  />
                ) : (
                  <ButtonGrey text="Iniciar Sesion" className="input-sesion"/>
                )}
              </div>
              <h4 className="login-forgot" onClick={handleForgotPasswordClick}>
                Olvidaste tu contraseña?
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
