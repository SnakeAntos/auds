import {Input} from "../Common/Input/input"

export const RegisterEmail = () => {
  return (
    <div id="register-email-container">
        <div id="register-email-title">
            <h1>Cuál es tu correo electrónico?</h1>
        </div>
        <form action="">
            <label>Correo electrónico</label>
            <Input type="email"/>
        </form>
            <p>Deberás poder confirmarlo luego.</p>
    </div>
  )
}