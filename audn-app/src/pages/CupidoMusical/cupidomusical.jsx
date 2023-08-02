
import React from "react";

import { ButtonOrange } from "../../components/Common/Button/buttonOrange";
import "./styles.css";
import { ComponentTitle } from "../../components/Common/ComponentTitle";
import { MusicCurrentCupid } from "../../pages/CupidoMusical/MusicCurrentCupid";
import { CurrentMatches } from "../../pages/CupidoMusical/CurrentMatches";
import { useState, useEffect } from "react";
import Loading from "../../components/Common/Loading";
import Playlist from "../Playlist/playlist.jsx"

export const CupidoMusical = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [songRandom, setSongRandom] = useState([]);
  const [likedSongs, setLikedSongs] = useState([]);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playlistId, setPlaylistId] = useState(0);
  const baseUrl = import.meta.env.VITE_AUDN_API;

  useEffect(() => {
    setIsLoading(true);
    fetch(`${baseUrl}/songs/random/obtain`)
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
    fetch(`${baseUrl}/songs/random/obtain`)
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

    fetch(`${baseUrl}/playlists/new`, {
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
          console.log("error", response)
          throw new Error("Error al crear playlist");

        }        
        return response.json();
      })
      .then((data) => {  
        console.log("el id es",data.id_playlist);      
        const actualPlaylistId = Number(data.id_playlist); //no puedo con esto// si pongo data.id queda undefined
        setPlaylistId(actualPlaylistId);
        setIsLoading(false);
        handleAddSongsToPlaylist(actualPlaylistId, songsIdList);
        setShowPlaylist(true);
        
      })
      .catch((error) => {
        console.error("Error al crear la playlist:", error);
      });
      
  };

  // Función para agregar las canciones a la playlist una vez creada
  const handleAddSongsToPlaylist = (playlistId, songsIdList) => {
    songsIdList.forEach((songId) => {      
      fetch(`${baseUrl}/songslists/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          songID: songId,
          playlistID: playlistId,
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
    {showPlaylist ? ( 
      <Playlist playlistId={playlistId} title="Tu lista de cupido" subTitle="lista generada a partir de cupido musical" />) 
      : (      
      <div className="cupidoMusical-container">
        {isLoading ? (
          <>
            <Loading/>
            <ComponentTitle title="Cupido Musical" />
            <MusicCurrentCupid
              onLikeSong={handleLikedSong}
              onNextSong={handleNextSong}
              song={songRandom}
            />
            <CurrentMatches likedSongs={likedSongs} title="Matches actuales" />
            <ButtonOrange
              onClick={handleCupidPlaylist}
              text="Crear Playlist"
            />
          </>
        ) : (
          <>
            <ComponentTitle title="Cupido Musical" />
            <MusicCurrentCupid
              onLikeSong={handleLikedSong}
              onNextSong={handleNextSong}
              song={songRandom}
            />
            <CurrentMatches likedSongs={likedSongs} title="Matches actuales" />
            <ButtonOrange
              onClick={handleCupidPlaylist}
              text="Crear Playlist"
            />
          </>
        )}
      </div>
    )}
  </>
);
};
export default CupidoMusical;

