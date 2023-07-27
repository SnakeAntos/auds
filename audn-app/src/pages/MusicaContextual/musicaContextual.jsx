import React from "react";
import "./styles.css";
import { ButtonMusicaContextual } from "../../components/Common/Button/buttonMusicaContextual";
import { ButtonGrey } from "../../components/Common/Button/buttonGrey";
import { ButtonsMusicaYa } from "../../components/Common/Button/buttonsMusicaYa";

export const MusicaContextual = (props) => {
  const menuOptions = ["Ejercicio Fisico", "Limpieza", "Celebracion"];
  const menuOptions1 = ["Muy Contento", "Triste", "Con todo el Power"];
  const menuOptions2 = ["Frio", "Soleado", "de playa"];
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
    "Clasico",
    "Alterntivo",
    "Ambiente",
    "EDM",
    "Electronica",
    "Disco",
    "New Age",
    "Punk",
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
          <ButtonMusicaContextual
            text="Actividad"
            textColor="grey"
            options={menuOptions}
          />
        </div>
        <div>
          <h3 className="musicacont-title1">Como te sientes?</h3>
          <ButtonMusicaContextual
            text="Estado de Animo"
            textColor="grey"
            options={menuOptions1}
          />
        </div>
        <div>
          <h3 className="musicacont-title1">Como esta el clima?</h3>
          <ButtonMusicaContextual
            text="Clima"
            textColor="grey"
            options={menuOptions2}
          />
        </div>
      </div>
      <div className="box">
        <h3 className="musicacont-title1">Selecciona hasta 3 generos:</h3>
        <div className="musica-contextual-container">
          <div className="musica-contextual-box">
            {buttonTexts.map((text, index) => (
              <div key={index} className="musica-cont-buttons-fit">
                <ButtonsMusicaYa text={text} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="crear-playlist-button">
        <ButtonGrey text="Crear Playlist" />
      </div>
    </div>
  );
};
