import "./styles.css";
import { Input } from "../Common/Input/input";
import { ButtonGrey } from "../Common/Button/buttonGrey";

export const LogIn = (props) => {
  return (
    <div className="login-container">
      <div className="login-nav">
        <img
          src="../../../public/images/left-arrow.png"
          className="left-arrow"
        ></img>
        <div className="login-header">
          <h4 className="title-login">Iniciar Sesion</h4>
        </div>
      </div>
      <div className="login-body">
        <div className="login-btn1">
          <label htmlFor="Nombre de Usuario o E-mail:">
            {" "}
            Nombre de Usuario o E-mail :
          </label>
          <Input className="input-name" placeholder="mara_pg"></Input>
        </div>
        <div className="login-btn2">
          <label htmlFor="Contraseña">Contraseña:</label>
          <Input className="input-password"></Input>
        </div>
        <div className="register-footer">
          <div className="login-btn3">
            <ButtonGrey text="Iniciar Sesion" className="input-sesion">
              Iniciar Sesion
            </ButtonGrey>
          </div>
          <h4 className="login-forgot">Olvidaste tu contraseña?</h4>
        </div>
      </div>
    </div>
  );
};
