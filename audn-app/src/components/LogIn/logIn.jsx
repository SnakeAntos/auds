import "./styles.css";
import { Input } from "../Common/Input/input";
import { ButtonGrey } from "../Common/Button/buttonGrey";

export const LogIn = (props) => {
  return (
    <div className="login-container">
      <div className="login-nav">
        <img
          src="../../../public/images/left-arrow.png"
          className="login-left-arrow"
        ></img>
        <div className="login-header">
          <h3 className="login-title">Iniciar Sesion</h3>
        </div>
      </div>
      <div className="login-body">
        <div className="login-btn1">
          <label htmlFor="Nombre de Usuario o E-mail:">Nombre de Usuario o E-mail:</label>
          <Input className="login-input-name" placeholder="mara_pg" type="text"></Input>
        </div>
        <div className="login-btn2">
          <label htmlFor="Contraseña">Contraseña:</label>
          <Input className="login-input-password" type="password"></Input>
        </div>
        <div className="register-footer">
          <div className="login-btn3">
            <ButtonGrey text="Iniciar Sesion" className="input-sesion"/>
          </div>
          <h4 className="login-forgot">Olvidaste tu contraseña?</h4>
        </div>
      </div>
    </div>
  );
};
