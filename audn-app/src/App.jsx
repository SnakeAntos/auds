import "./App.css";
import React, { useState, useEffect } from "react";

import { LandingPage } from "./components/LandingPage/landingPage";
import { LogIn } from "./components/LogIn/logIn";
import { Register } from "./components/Register/register";

export const App = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showRegisterEmail, setShowRegisterEmail] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [users, setUsers] = useState([]);

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowRegisterEmail(true);
    setShowLogIn(false);
  };

  const handleLogInClick = () => {
    setShowLogIn(true);
    setShowRegister(false);
  };

  // Función asincrónica para obtener todos los usuarios
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/users/allusers");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error al obtener los usuarios:", error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <>
      {!showRegister && !showLogIn && (
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
      {showLogIn && <LogIn setShowLogIn={setShowLogIn} />}
    </>
  );
};

export default App;
