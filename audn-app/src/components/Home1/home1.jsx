import { ButtonMusicaYa } from "../Common/Button/buttonMusicaYa";
import "./styles.css";

export const Home1 = (props) => {
  return (
    <div className="musicaya-container">
      <div className="musicaya-nav">
        <div className="musicaya-title-nav">
          <h2 className="musicaya-title"> Musica ya</h2>
        </div>
        <div className="musicaya-icons">
          <img
            className="icono1-musicaya"
            src="../../../public/images/rewind.png"
          ></img>
          <img
            className="icono2-musicaya"
            src="../../../public/images/bell.png"
          ></img>
        </div>
      </div>
      <div className="musicaya-main">
        <ButtonMusicaYa className="button-transparent"></ButtonMusicaYa>
        <ButtonMusicaYa className="button-transparent"></ButtonMusicaYa>
      </div>
    </div>
  );
};
