import React from "react";
import "./styles.css";
import { ButtonMusicaContextual } from "../../components/Common/Button/buttonMusicaContextual";
import { ButtonGrey } from "../../components/Common/Button/buttonGrey";
import { ButtonsMusicaYa } from "../../components/Common/Button/buttonsMusicaYa";

export const MusicaContextual = (props) => {
  const buttonTexts = [
    "Rock",
    "Country",
    "Soul",
    "Jazz",
    "Blues",
    "Hip-Hop",
    "Pop",
    "Reggae",
    "Folk",
    "R&B",
  ];
  return (
    <div className="musica-cont-nav">
      <div className="musica-cont-header">
        <div className="musica-cont">
          <img
            src="../../../public/images/left-arrow.png"
            className="login-left-arrow"
          ></img>
          <h3 className="musica-cont-title">Musica Contextual</h3>
        </div>
      </div>
      <div className="musica-cont-body">
        <div>
          <h3 className="musicacont-title1">Cual es la ocasion?</h3>
          <ButtonMusicaContextual placeholder="Actividad" />
        </div>
        <div>
          <h3 className="musicacont-title1">Como te sientes?</h3>
          <ButtonMusicaContextual placeholder="Actividad" />
        </div>
        <div>
          <h3 className="musicacont-title1">Como estas el clima?</h3>
          <ButtonMusicaContextual placeholder="Actividad" />
        </div>
      </div>
      <h3 className="musicacont-title1">Selecciona hasta 3 generos:</h3>
      {buttonTexts.map((text, index) => (
        <div key={index} className="musica-cont-buttons-fit">
          <ButtonsMusicaYa text={text} />
        </div>
      ))}
      <ButtonGrey text="Crear Playlist" />
    </div>
  );
};
