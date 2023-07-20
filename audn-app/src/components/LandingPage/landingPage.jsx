import "./styles.css";
import { ButtonOrange } from "../Common/Button/buttonOrange";
import { ButtonBlack} from "../Common/Button/buttonBlack"

export const LandingPage = ({ onRegisterClick }) => {
  return (
    <div id="landing-container">
        <img src="../../../public/images/gif-landing.gif" className="landing-background-img" alt="" />
        <div className="background-overlay"></div>
      <header id="landing-header">
        <div id="landing-logo-container">
          <img
            className="landing-logo"
            src="../../../public/images/logo-landing.png"
            alt=""
          />
        </div>
        <div id="landing-slogan-container">
          <h1 id="landing-slogan">Música a medida.</h1>
        </div>
      </header>
      <main id="landing-main">
        <ButtonOrange text="Registrarse" onClick={onRegisterClick}/>
        <ButtonBlack text="Continuar con Google"/>
        <ButtonBlack text="Continuar con Apple"/>
        <button className="button" id="landing-login-button">Iniciar sesión</button>
      </main>
    </div>
  );
};
