import "./styles.css";

export const Input = (props) => {
  return (
    <div>
      <input className="input">{props.text}</input>
    </div>
  );
};
