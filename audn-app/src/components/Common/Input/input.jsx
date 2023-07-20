import "./styles.css";

export const Input = (props) => {
  return (
    <div>
      <input className="input" type={props.type} onChange={props.onChange}>{props.text}</input>
    </div>
  );
};
