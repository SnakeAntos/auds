import React from "react";
import "./styles.css";
import { ButtonMusicaContextual } from "../../components/Common/Button/buttonMusicaContextual";
import { ButtonGrey } from "../../components/Common/Button/buttonGrey";
import { ButtonsMusicaYa } from "../../components/Common/Button/buttonsMusicaYa";
import { useState, useEffect } from "react";

const fetchSongsByGenre = async (genre) => {
  try {
    const response = await fetch(`http://localhost:3001/songs/allsongs`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener las canciones:", error);
    throw error;
  }
};

export const MusicaContextual = (props) => {
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({
    ocasion: null,
    estadoAnimo: null,
    clima: null,
  });

  const [isPressed, setIsPressed] = useState(false);

  const handleButtonPress = () => {
    setIsPressed(true);
    setSelectedGenre(text);
  };

  const handleButtonRelease = () => {
    setIsPressed(false);
  };

  const genres = [
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

  const menuOptions = [
    "Ejercicio Fisico",
    "Limpieza",
    "Celebracion",
    "Dormir",
    "Meditar",
    "Social",
    "Estudiar",
    "Relajacion",
    "Viajando",
  ];
  const menuOptions1 = ["Muy Contento", "Triste", "Con todo el Power", "Feliz"];
  const menuOptions2 = ["Frio", "Soleado", "de playa", "Caluroso", "Ventoso"];
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

  const fetchSongsByGenre = async (genre) => {
    try {
      const response = await fetch(`http://localhost:3001/songs/allsongs`);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("Error al obtener las canciones:", error);
      throw error;
    }
  };

  useEffect(() => {
    console.log("song", selectedGenre);
    const genre = "Rock"; // Replace "Rock" with your desired musical genre
    fetchSongsByGenre(selectedGenre)
      .then((data) => {
        setSongs(data.filter((item) => item.genre == selectedGenre));

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
  }, [selectedGenre]);

  ///Cambion de color al seleccionar las opciones
  // Function to update selected options
  const handleOptionSelect = (optionType, option) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionType]: option,
    }));
  };

  // Function to check if all three options are selected
  const areAllOptionsSelected = () => {
    return (
      selectedOptions.ocasion !== null &&
      selectedOptions.estadoAnimo !== null &&
      selectedOptions.clima !== null
    );
  };

  // Function to apply the orange color to the "Crear Playlist" button
  const isButtonOrange = areAllOptionsSelected();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = () => {
    onMenuToggle();
  };

  const areAllGenresSelected = () => {
    return buttonTexts.every((genre) => genre === selectedGenre);
  };

  // Función para manejar la selección de géneros
  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    setIsButtonOrange(areAllGenresSelected()); // Actualiza el estado isButtonOrange
  };

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
            isOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
          />
        </div>
        <div>
          <h3 className="musicacont-title1">Como te sientes?</h3>
          <ButtonMusicaContextual
            text="Estado de Animo"
            textColor="grey"
            options={menuOptions1}
            isOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
          />
        </div>
        <div>
          <h3 className="musicacont-title1">Como esta el clima?</h3>
          <ButtonMusicaContextual
            text="Clima"
            textColor="grey"
            options={menuOptions2}
            isOpen={isMenuOpen}
            onMenuToggle={handleMenuToggle}
          />
        </div>
      </div>
      <div className="box">
        <h3 className="musicacont-title1">Selecciona hasta 3 generos:</h3>
        <div className="musica-contextual-container">
          <ul>
            {songs.map((song) => (
              <li key={song.id_song}>{song.song_name}</li>
            ))}
          </ul>
          <div className="musica-contextual-box">
            {buttonTexts.map((text, index) => (
              <div key={index} className="musica-cont-buttons-fit">
                <ButtonsMusicaYa
                  className={
                    isPressed && text == selectedGenre
                      ? "text-button-pressed"
                      : ""
                  }
                  text={text}
                  setIsPressed={setIsPressed}
                  selectedGenre={selectedGenre}
                  setSelectedGenre={setSelectedGenre}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="crear-playlist-button">
        <ButtonGrey
          className="create-playlist"
          text="Crear Playlist"
          style={{ backgroundColor: isButtonOrange ? "orange" : "grey" }}
        />
      </div>
    </div>
  );
};
