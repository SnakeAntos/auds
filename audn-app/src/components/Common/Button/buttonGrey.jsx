import React from "react";
import "./styles.css";

export const ButtonGrey = (props) => {
  return (
    <button className="button button-grey" onClick={props.onClick}>
      {props.text} {props.color}
    </button>
  );
};
