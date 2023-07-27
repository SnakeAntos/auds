import { ButtonOrange } from "../../components/Common/Button/buttonOrange";
import "./styles.css";
import { ComponentTitle } from "../../components/Common/ComponentTitle";
import { MusicCurrentCupid } from "../../pages/CupidoMusical/MusicCurrentCupid";
import { CurrentMatches } from "../../pages/CupidoMusical/CurrentMatches";
import { useState, useEffect } from "react";

export const CupidoMusical = () => {
  const [songRandom, setSongRandom] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/songs/random/obtain")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error al acceder al endpoint");
        }
        return response.json();
      })
      .then((data) => setSongRandom(data))
      .catch((error) => {
        
        console.error("fetch error:", error);
      });
  }, []);

  const handleNextSong = () => {
    fetch("http://localhost:3001/songs/random/obtain")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error al acceder al endpoint");
        }
        return response.json();
      })
      .then((data) => setSongRandom(data))
      .catch((error) => {
        
        console.error("fetch error:", error);
      });
      
  };

  const handleLikedSong = () => {
    setLikedSongs((prevLikedSongs) => [...prevLikedSongs, songRandom]);
  };
  return (
    <>
      <div className="cupidoMusical-container">
        <ComponentTitle title="Cupido Musical"></ComponentTitle>
        <MusicCurrentCupid
          onLikeSong={handleLikedSong}
          onNextSong={handleNextSong}
          song={songRandom}
        ></MusicCurrentCupid>
        <CurrentMatches
          likedSongs={likedSongs}
          title="Matches actuales"
        ></CurrentMatches>
        <ButtonOrange text="Crear Playlist"></ButtonOrange>
      </div>
    </>
  );
};

export default CupidoMusical;
