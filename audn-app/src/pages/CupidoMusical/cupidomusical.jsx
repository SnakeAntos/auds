import { ButtonOrange } from "../../components/Common/Button/buttonOrange";
import "./styles.css";
import { ComponentTitle } from "../../components/Common/ComponentTitle";
import { MusicCurrentCupid } from "../../pages/CupidoMusical/MusicCurrentCupid";
import { CurrentMatches } from "../../pages/CupidoMusical/CurrentMatches";
import { useState, useEffect } from "react";


export const CupidoMusical = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
           fetch("http://localhost:3001/songs/allsongs")
          .then((response) => response.json())
          .then((data) => setSongs(data));
      }, []);

      const getRandomSong = () => {
        if(songs.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * songs.length)
        return songs[randomIndex];
      }

      const randomSong = getRandomSong();

  return (
    <>
      <div className="cupidoMusical-container">
        <ComponentTitle title="Cupido Musical"></ComponentTitle>
        <MusicCurrentCupid song={randomSong}></MusicCurrentCupid>
        <CurrentMatches title="Matches actuales"></CurrentMatches>
        <ButtonOrange text="Crear Playlist"></ButtonOrange>
      </div>
    </>
  );
};

export default CupidoMusical;
