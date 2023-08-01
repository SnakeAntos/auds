import "./styles.css";
import { Input } from "../Common/Input/input";
import { ButtonGrey } from "../Common/Button/buttonGrey";

export const RecupCont = (props) => {
  return (
    <div className="login-container">
      <div className="login-nav">
        <img
          src="../../../public/images/left-arrow.png"
          className="login-left-arrow"
        ></img>
        <div className="login-header">
          <h3 className="login-title">Recuperar Cuenta</h3>
        </div>
      </div>
      <div className="login-body">
        <div className="login-btn1">
          <label htmlFor="Nombre de Usuario o E-mail:">
            Nombre de Usuario o E-mail:
          </label>
          <Input
            className="login-input-name"
            type="text"
          ></Input>
        </div>
        <div className="recup-text">
          Deberas poder ingresar al e-mail de la cuenta para poder recuperarla
        </div>
        <div className="register-footer">
          <div className="login-btn3">
            <ButtonGrey text="Iniciar Sesion" className="input-sesion" />
          </div>
        </div>
      </div>
    </div>
  );
};
