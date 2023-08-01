import "./App.css";
import React, { useState } from "react";

import { LandingPage } from "./components/LandingPage/landingPage";
import { LogIn } from "./components/LogIn/logIn";
import { Register } from "./components/Register/register";
import { Playlist } from "./pages/Playlist/playlist";
import { PlaylistBar } from "./pages/Playlist/playlistBar";
import { Playlistbar2 } from "./pages/Playlist/playlistbar2";
import { NavBar } from "./components/NavBar/NavBar";

export const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showRegisterEmail, setShowRegisterEmail] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowRegisterEmail(true);
    setShowLogIn(false);
  };

  const handleLogInClick = () => {
    setShowLogIn(true);
    setShowRegister(false);
  };


  return (
    <>
      {/* {!showRegister && !showLogIn && (
        <LandingPage
          onRegisterClick={handleRegisterClick}
          onLogInClick={handleLogInClick}
        />
      )}
      {showRegister && (
        <Register
          showRegisterEmail={showRegisterEmail}
          setShowRegister={setShowRegister}
        />
      )}
      {showLogIn && <LogIn setShowLogIn={setShowLogIn} />} */}
    </>
  );
};

export default App;
