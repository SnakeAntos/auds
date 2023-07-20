import './styles.css'
import { RegisterEmail } from './registerEmail'
import { RegisterUser } from './registerUser'
import { ButtonOrange } from '../Common/Button/buttonOrange'

export const Register = () => {
  return (
    <div id='register-container'>
      <header id="register-header">
            <div id="register-arrow-container">
                <img src="../../../public/images/arrow-back.png" alt="" />
            </div>
            <h3 id="register-title">Crear cuenta</h3>
        </header>
      <RegisterEmail/>
      <RegisterUser/>
      <ButtonOrange text='Continuar'/>
    </div>
  )
}
