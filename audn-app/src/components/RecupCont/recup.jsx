import "./styles.css";
import { Input } from "../Common/Input/input";
import { ButtonGrey } from "../Common/Button/buttonGrey";
import LeftArrow from "../../../public/images/left-arrow.png";
import { Link } from 'react-router-dom';

export const RecupCont = (props) => {
  return (
    <div className="login-container">
      <div className="login-nav">
        <Link to="/perfil">
        <img
          src={LeftArrow}
          className="login-left-arrow"
        ></img></Link>
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
