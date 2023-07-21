import React, { useState } from 'react';
import "./App.css";

import { LandingPage } from "./components/LandingPage/landingPage";
import { LogIn } from "./components/LogIn/logIn";
import { Register } from "./components/Register/register";
import { Home1 } from './components/Home1/home1';

export const App = () => {

  // const [showRegister, setShowRegister] = useState(false);
  // const [showRegisterEmail, setShowRegisterEmail] = useState(false);
  // const [showLogIn, setShowLogIn] = useState(false);


  // const handleRegisterClick = () => {
  //   setShowRegister(true);
  //   setShowRegisterEmail(true);
  //   setShowLogIn(false);
  // };

  // const handleLogInClick = () => {
  //   setShowLogIn(true);
  //   setShowRegister(false);
  // };

  // {!showRegister && !showLogIn && <LandingPage onRegisterClick={handleRegisterClick} onLogInClick={handleLogInClick}/>}
  // {showRegister && <Register showRegisterEmail={showRegisterEmail} />}
  // {showLogIn && <LogIn />}

  return (

      <>
        <Home1/>
      </>
    );
  };


export default App;
