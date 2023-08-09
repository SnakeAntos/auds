import React from "react";
import { useState } from "react";

export const ButtonsMusicaYa = (props) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonPress = () => {
    setIsPressed(true);
    setSelectedGenre(text);
  };

  const handleButtonRelease = () => {
    setIsPressed(false);
  };

  const handleClick = () => {
    props.setSelectedGenre(props.text);
    props.setIsPressed(true);
  };
  return (
    <button
      className={`button buttons-musicaya ${props.className}`}
      onClick={handleClick}
    >
      {props.text}
    </button>
  );
};
