import React from "react";
import "./styles.css";

export const RandomImgsPlaylist = (props) => {
  const randomSongs = props.randomSongs;

  return (
    <div className="random-container">
      <div className="random-grid">
        {randomSongs.map((song) => (
          <div key={song.id}>
            <img className="random-img" src={song.img} alt={song.song_name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomImgsPlaylist;
