import React from "react";
import "./styles.css";

export const PlaylistBar = () => {
  return (
    <div>
      <div className="playlist-bar">
        <div className="playlist-bar-icons1">
          <div className="audn-bar-nav">
            <img
              className="playlist-icon1"
              src="../../../public/images/logoaudn.svg"
            ></img>
          </div>

          <img
            className="playlist-icon2"
            src="../../../public/images/verified.png"
          ></img>
          <img
            className="playlist-icon3"
            src="../../../public/images/conection-logo.png"
          ></img>
        </div>
        <div className="playlist-bar-icons2">
          <p className="playlist-duration">1h 17m</p>
          <img
            className="playlist-icon4"
            src="../../../public/images/time-logo.png"
          ></img>
        </div>
      </div>
    </div>
  );
};
