import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";

import { PlaylistBar } from "./playlistBar";
import { Playlistbar2 } from "./playlistbar2";
import "./styles.css";
import { useEffect, useState } from "react";
import { Song } from "./song";

export const Playlist = (props) => {
  const [allSongs, setAllSongs] = useState([]);

  const fetchSongs = async () => {
    try {
      const response = await fetch("http://localhost:3001/songs/allsongs");
      const data = await response.json();
      setAllSongs(data);
    } catch (error) {
      console.error("Error al obtener las canciones:", error);
    }
  };

  useEffect(() => {
    fetchSongs();
  }, [allSongs]);

  return (
    <div>
      <div className="playlist-nav">
        <div className="playlist-img">
          <img
            src="../../../public/images/left-arrow.png"
            className="login-left-arrow"
          ></img>
        </div>
        <div className="playlist-titles">
          <h5 className="playlist-subtitle">Generada del Cupido Musical</h5>
          <h3 className="playlist-title">Playlist Generada</h3>
        </div>
        <div className="playlist-dots">
          <img
            className="img-dots"
            src="../../../public/images/three-dots-vertical.png"
          ></img>
        </div>
      </div>
      <div className="playlist-box">
        <div className="playlist-photoline-1">
          <div className="playlist-photo1">
            <img
              className="playlist-photo-1"
              src="../../../public/images/playlist-cover.jpg"
            ></img>
          </div>
          <div className="playlist-photo1">
            <img
              className="playlist-photo-2"
              src="../../../public/images/playlist-cover.jpg"
            ></img>
          </div>
        </div>
        <div className="playlist-photoline-2">
          <div className="playlist-photo2">
            <img
              className="playlist-photo-3"
              src="../../../public/images/playlist-cover.jpg"
            ></img>
          </div>
          <div className="playlist-photo1">
            <img
              className="playlist-photo-4"
              src="../../../public/images/playlist-cover.jpg"
            ></img>
          </div>
        </div>
      </div>
      <PlaylistBar />
      <Playlistbar2 />
      <NavBar />
      <Song />
      <ul>
        {allSongs.map((song) => (
          <li key={song.id}>{song.song_name}</li>
        ))}
      </ul>
      <div></div>
    </div>
  );
};
