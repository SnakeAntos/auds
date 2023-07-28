import React from "react";
import "./styles.css";

export const CurrentMatches = (props) => {  
  const lastLikedSongs = props.likedSongs.slice(-4);  
  return (
    <>
      <div className="currentMatches-container">
        <p className="currentMatches-title">{props.title}</p>
        <div className="currentMatches-imgs_container">
          {/* Mapear las canciones likedSongs para mostrar las imágenes */}
          {lastLikedSongs.map((likedSong, index) => (
            <div
              className="currentMatches-song_img"
              key={index}
              style={{ backgroundImage: `url(${likedSong.img})` }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CurrentMatches;
