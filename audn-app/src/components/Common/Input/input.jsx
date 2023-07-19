import "./styles.css";

export const Input = (props) => {
  return (
    <div>
      <input className="input" type={props.type}>{props.text}</input>
    </div>
  );
};
