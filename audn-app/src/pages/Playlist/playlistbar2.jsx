import React from "react";

export const Playlistbar2 = () => {
  return (
    <div className="playlist-bar2">
      <div className="playlist-menu-left">
        <img
          className="playlist-copy-icon"
          src="../../../public/images/copy-icon.png"
        ></img>
        <p className="playlist-bar2-text">Crear Copia</p>
      </div>
      <div className="playlist-menu-right">
        <img
          className="playlist-conection-icon"
          src="../../../public/images/conection2.png"
        ></img>
        <img
          className="playlist-play-icon"
          src="../../../public/images/play-icon.svg"
        ></img>
      </div>
    </div>
  );
};
