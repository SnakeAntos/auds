import "./styles.css";
import { ButtonOrange } from "../Common/Button/buttonOrange";
import { ButtonBlack} from "../Common/Button/buttonBlack";
import LandingBackgroundImage from "../../../public/images/gif-landing.gif"
import LandingLogo from "../../../public/images/logo-landing.png"

export const LandingPage = ({ onRegisterClick, onLogInClick }) => {
  return (
    <div id="landing-container">
        <img src={LandingBackgroundImage} className="landing-background-img" alt="" />
        <div className="background-overlay"></div>
      <header id="landing-header">
        <div id="landing-logo-container">
          <img
            className="landing-logo"
            src={LandingLogo}
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
        <button className="button" id="landing-login-button" onClick={onLogInClick}>Iniciar sesión</button>
      </main>
    </div>
  );
};
