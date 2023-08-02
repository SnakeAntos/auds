import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

export const ButtonMusicaContextual = ({
  text,
  textColor,
  options,
  onMenuToggle,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [topSongs, setTopSongs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleButtonClick = () => {
    setShowDropdown(!showDropdown);
    setSelectedGenre(text);
    onMenuToggle();
  };

  const handleOptionSelect = (option) => {
    // Aquí puedes hacer lo que necesites con la opción seleccionada
    console.log("Opción seleccionada:", option);

    // Cerrar el menú desplegable después de seleccionar una opción
    setSelectedOption(option);
    setShowDropdown(false);
    fetchWeather(option);
  };

  //obtener canciones por genero

  return (
    <div className="button-container">
      <ul>
        {songs.map((song) => (
          <li key={song.id_song}>{song.song_name}</li>
        ))}
      </ul>

      <button
        className={`button button-transparente `}
        style={{ color: textColor }}
        onClick={handleButtonClick}
      >
        {selectedOption ? selectedOption : text}
      </button>

      {showDropdown && (
        <ul
          className={`button dropdown-menu${
            selectedGenre === text ? "button-selected" : ""
          }`}
          onClick={() => handleOptionSelect(option)}
        >
          {options.map((option) => (
            <div key={option} onClick={() => handleOptionSelect(option)}>
              {option}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
