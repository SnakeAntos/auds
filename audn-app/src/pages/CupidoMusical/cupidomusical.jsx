import { ButtonOrange } from "../../components/Common/Button/buttonOrange";
import "./styles.css";
import { ComponentTitle } from "../../components/Common/ComponentTitle";
import { MusicCurrentCupid } from "../../pages/CupidoMusical/MusicCurrentCupid";
import { CurrentMatches } from "../../pages/CupidoMusical/CurrentMatches";
import { useState, useEffect } from "react";
import Loading from "../../components/Common/Loading";

export const CupidoMusical = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [songRandom, setSongRandom] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/songs/random/obtain")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error al acceder al endpoint");
        }
        setIsLoading(false);
        return response.json();
      })
      .then((data) => setSongRandom(data))
      .catch((error) => {
        console.error("fetch error:", error);
        setIsLoading(false);
      });
  }, []);

  const handleNextSong = () => {
    setIsLoading(true);
    fetch("http://localhost:3001/songs/random/obtain")
      .then((response) => {
        if (!response.ok) {
          throw new Error("error al acceder al endpoint");
        }
        setIsLoading(false);
        return response.json();
      })
      .then((data) => setSongRandom(data))
      .catch((error) => {
        setIsLoading(false);
        console.error("fetch error:", error);
      });
  };

  const handleCupidPlaylist = () => {
    setIsLoading(true);
    const songsIdList = likedSongs.map((song) => song.id_song);
    const playlistName = "Cupid playlist";
    const userId = 1; //esto se obtendria mediante el token...

    fetch("http://localhost:3001/playlists/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playlistName,
        userID: userId,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al crear playlist");
        }

        return response.json();
      })
      .then(async (data) => {        
        const playlistId = 9; //no puedo con esto// si pongo data.id queda undefined
        setIsLoading(false);
        handleAddSongsToPlaylist(playlistId, songsIdList);
        console.log("esta es la data", data);
      })
      .catch((error) => {
        console.error("Error al crear la playlist:", errorMessage);
      });
      
  };

  // Función para agregar las canciones a la playlist una vez creada
  const handleAddSongsToPlaylist = (playlistId, songsIdList) => {
    songsIdList.forEach((songId) => {
      console.log(songId, playlistId, songsIdList);
      fetch("http://localhost:3001/songslists/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          songID: playlistId,
          playlistID: songId,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al agregar canciones a la playlist");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Canción agregada a la playlist con éxito", data);
        })
        .catch((error) => {
          console.error("Error al agregar canciones a la playlist:", error);
        });
    });
  };

  const handleLikedSong = () => {
    setLikedSongs((prevLikedSongs) => [...prevLikedSongs, songRandom]);
  };
  return (
    <>
      <div className="cupidoMusical-container">
        {isLoading ? (
          <>
            <Loading />
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
            <ButtonOrange
              onClick={handleCupidPlaylist}
              text="Crear Playlist"
            ></ButtonOrange>
          </>
        ) : (
          <>
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
            <ButtonOrange
              onClick={handleCupidPlaylist}
              text="Crear Playlist"
            ></ButtonOrange>
          </>
        )}
      </div>
    </>
  );
};

export default CupidoMusical;
