import React, { useState } from 'react';
import "./App.css";
import { LandingPage } from "./components/LandingPage/landingPage";
import { LogIn } from "./components/LogIn/logIn";
import { Register } from "./components/Register/register";

export const App = () => {

  const [showRegister, setShowRegister] = useState(false);
  const [showRegisterEmail, setShowRegisterEmail] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowRegisterEmail(true);
  };

  return (
      <>
        {!showRegister && <LandingPage onRegisterClick={handleRegisterClick} />}
        {showRegister && <Register showRegisterEmail={showRegisterEmail} />}
        <LogIn />
      </>
    );
  };
export default App;
