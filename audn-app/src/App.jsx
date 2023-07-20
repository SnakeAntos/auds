import React, { useState } from 'react';
import "./App.css";
import { Home1 } from "./components/Home1/home1";
//import { LandingPage } from "./components/LandingPage/landingPage";
//import { LogIn } from "./components/LogIn/logIn";
//import { Register } from "./components/Register/register";

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
        <Home1 />
      </>
    );
  };

export default App;
