import "./styles.css";

 export const ComponentTitle = (props) => {
    return (
      <>
        <div className="componentTitle-container">
            <div className="componentTitle-backArrow"></div>
            <p className="componentTitle-title">{props.title}</p>
        </div>
      </>
    );
  };

  export default ComponentTitle;
  