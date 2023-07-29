import React from "react";

export const ButtonsMusicaYa = (props) => {
  const handleClick = () => {
    props.setSelectedGenre(props.text);
  };
  return (
    <button className="button buttons-musicaya" onClick={handleClick}>
      {props.text}
    </button>
  );
};
