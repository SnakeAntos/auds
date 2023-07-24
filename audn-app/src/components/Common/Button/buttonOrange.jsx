import "./styles.css";

export const ButtonOrange = (props) => {
  return <button className="button button-orange" onClick={props.onClick} id={props.id}>{props.text}</button>;
};
