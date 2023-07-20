import { Input } from "../Common/Input/input"

export const RegisterUser = () => {
    return (
      <div>
        <div id="register-user-container">
            <div id="register-user-title">
                <h1>Ingresa un nombre de usuario y contraseña.</h1>
            </div>
            <form action="">
                <label>Nombre de usuario:</label>
                <Input type="text"/>
                <label>Contraseña:</label>
                <Input type="password"/>
            </form>
            <p>Deberá contener al menos 8 caracteres.</p>
            <div id="register-user-acceptterms">
                <input type="checkbox"/>
                <span>He leído y acepto los Términos y Condiciones.</span>
            </div>
        </div>
      </div>
    )
  }