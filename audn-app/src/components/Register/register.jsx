import './styles.css'
import { useState } from 'react'
import { RegisterEmail } from './registerEmail'
import { RegisterUser } from './registerUser'
import { ButtonOrange } from '../Common/Button/buttonOrange'

export const Register = () => {

  const [showRegisterEmail, setShowRegisterEmail] = useState(true);

  const handleContinueClick = () => {
    setShowRegisterEmail(false);
  };

  return (
    <div id='register-container'>
      <header id="register-header">
            <div id="register-arrow-container">
                <img src="../../../public/images/arrow-back.png" id="register-arrow-image" alt="" />
            </div>
            <h3 id="register-title">Crear cuenta</h3>
        </header>
      {showRegisterEmail ? <RegisterEmail /> : <RegisterUser />}
      <ButtonOrange text='Continuar' onClick={handleContinueClick}/>
    </div>
  )
}
