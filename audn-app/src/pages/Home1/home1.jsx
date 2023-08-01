import { ButtonMusicaYa } from "../../components/Common/Button/buttonMusicaYa";
import "./styles.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { useAuth } from "../../context/authContext";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Icon1 from "../../../public/images/history.svg";
import Icon2 from "../../../public/images/bell.png";
import Image1 from "../../../public/images/musicaYa1.png";
import Image2 from "../../../public/images/musicaYa2.png";
import { Link } from "react-router-dom";

export const Home1 = () => {
  return (
    <div className="musicaya-container">
      <div className="musicaya-nav">
        <div className="musicaya-title-nav">
          <h2 className="musicaya-title"> Música ya</h2>
        </div>
        <div className="musicaya-icons">
          <img className="icono1-musicaya" src={Icon1}></img>
          <img className="icono2-musicaya" src={Icon2}></img>
        </div>
      </div>
      <div className="musicaya-main">
        <div className="musicaya-btn1">
          <div className="button-musicaYa1">
            <img className="photo-my1" src={Image1}></img>
          </div>
          {/* Esto deberia ser un componente pero no nos da el tiempo ahorita */}
          <Link to="/cupidoMusical">
            <div className="cupido-text">
              <h3 className="title-cupido">Cupido Musical</h3>
              <p className="text-cupido">
                Tus artistas favoritos nunca van a dejarte con el corazon roto.
              </p>
            </div>
          </Link>
          <div>
            <ButtonMusicaYa className="button-transparent"></ButtonMusicaYa>
          </div>
        </div>
        <div className="musicaya-btn1">
          <div className="button-musicaYa1">
            <img className="photo-my1" src={Image2}></img>
          </div>
          <Link to="/musicaContextual">
            <div className="cupido-text">
              <h3 className="title-cupido">Musica Contextual</h3>
              <p className="text-cupido">
                Creamos la playlist perfecta para cualquier situacion.
              </p>
            </div>
          </Link>
          <div>
            <ButtonMusicaYa className="button-transparent"></ButtonMusicaYa>
          </div>
        </div>
      </div>

      <NavBar className="home-navbar" />
    </div>
  );
};
