import "./styles.css";

export const Input = (props) => {
  return (
    <div>
      <input 
        className="input" 
        type={props.type} 
        onChange={props.onChange} 
        placeholder={props.placeholder} 
        onFocus={props.onFocus} 
        onBlur={props.onBlur}
        onInput={props.onInput}
        value={props.value}>
          {props.text}
      </input>
    </div>
  );
};
