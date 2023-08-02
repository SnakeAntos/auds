import { Input } from "../Common/Input/input";
import { useState} from "react";

export const RegisterUser = ({setUsername, setPassword, username, password}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  return (
    <div>
      <div id="register-user-container">
        <div id="register-user-title">
          <h1>Ingresa un nombre de usuario y contraseña.</h1>
        </div>
        <form action="">
          <label>Nombre de usuario:</label>
          <Input type="text" value={username} onChange={handleUsernameChange}/>
          <label>Contraseña:</label>
          <Input type="password" value={password} onChange={handlePasswordChange}/>
        </form>
        <p>Deberá contener al menos 8 caracteres.</p>
        <div id="register-user-acceptterms" onClick={handleCheckboxClick}>
          <img
            src={
              isChecked
                ? "../../../public/images/checkbox-ticked.png"
                : "../../../public/images/checkbox-empty.png"
            }
            alt="Checkbox"
          />
          <span>
            He leído y acepto los <a>Términos</a> y <a>Condiciones.</a>
          </span>
        </div>
      </div>
    </div>
  );
};
