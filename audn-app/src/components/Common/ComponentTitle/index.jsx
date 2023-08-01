import "./styles.css";
import { Link } from 'react-router-dom';


 export const ComponentTitle = (props) => {
    return (
      <>
        <div className="componentTitle-container">
            <Link to="/home"><div className="componentTitle-backArrow"></div></Link>
            <p className="componentTitle-title">{props.title}</p>
        </div>
      </>
    );
  };

  export default ComponentTitle;
  