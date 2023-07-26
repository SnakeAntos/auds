import React from "react";
import "./styles.css";

export const ButtonMusicaContextual = (props) => {
  return (
    <button
      className="button button-transparente"
      placeholder={props.placeholder}
    >
      {props.text}l
    </button>
  );
};
