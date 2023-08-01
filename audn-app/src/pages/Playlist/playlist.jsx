import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";

import { PlaylistBar } from "./playlistBar";
import { Playlistbar2 } from "./playlistbar2";
import Loading from "../../components/Common/Loading";
import RandomImgsPlaylist from "./randomImgsPlaylist";
import "./styles.css";
import { useEffect, useState } from "react";
import { Song } from "./song";

export const Playlist = (props) => {
  const [playlistsSongs, setPlaylistsSongs] = useState([]);
  const playlistId = props.playlistId;
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlaylistSongs = async (playlistId) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/playlists/getsongs/${playlistId}`
      );
      const data = await response.json();
      setPlaylistsSongs(data);
    } catch (error) {
      console.error("Error al obtener las canciones de la playlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlaylistSongs(playlistId);
  }, [playlistId]);

  const getRandomPlaylistSongs = (songsList, count) => {
    const shuffledSongs = songsList.sort(() => 0.5 - Math.random());
    return shuffledSongs.slice(0, count);
  };

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
          <h5 className="playlist-subtitle">{props.subTitle}</h5>
          <h3 className="playlist-title">{props.title}</h3>
        </div>
        <div className="playlist-dots">
          <img
            className="img-dots"
            src="../../../public/images/three-dots-vertical.png"
          ></img>
        </div>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <RandomImgsPlaylist
          randomSongs={getRandomPlaylistSongs(playlistsSongs, 4)}
        />
      )}
      <PlaylistBar />
      <Playlistbar2 />
      <NavBar />
      <Song />
      <ul className="playlist-ul_song_render">
        {playlistsSongs.map((song) => (
          <li key={song.id}>
            <div className="playlist-render_container">
              <img
                className="playlist-ul-rendered_img"
                src={song.img}
                alt={song.song_name}
              ></img>
              <p className="playlist-ul-render_title">{song.song_name}</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Playlist;
