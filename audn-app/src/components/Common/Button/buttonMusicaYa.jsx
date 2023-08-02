import "./styles.css";
import { useState } from "react";

export const ButtonMusicaYa = (props) => {
  return (
    <button className={`button button-transparent ${props.className}`}>
      {props.text}
    </button>
  );
};
