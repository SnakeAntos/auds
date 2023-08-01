import React from "react";
import { useEffect, useState } from "react";

export const Song = (props) => {
  const [allSongs, setAllSongs] = useState([]);
  return (
    <div className="song-box">
      <div className="song-image">
        <img src="">{props.image}</img>
      </div>
      <div className="song-name">
        <h3>{props.name}</h3>
        <p>{props.name}</p>
      </div>
      <div className="img-dots">
        <img src="../../../public/images/three-dots-vertical.png">
          {props.image}
        </img>
      </div>
    </div>
  );
};
