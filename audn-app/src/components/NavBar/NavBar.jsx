import "./styles.css";
import { useState } from "react";
import {Link, useLocation} from "react-router-dom"

export const NavBar = (props) => {

  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };


  return (
    <div id="navbar-container" className={props.className}>
        <Link 
          to="/home"
          className={`navbar-item ${isActive("/home") ? "active" : ""}`}>
              <img src={isActive("/home") ? "../../../public/images/home-active.svg" : "../../../public/images/home-inactive.svg"} alt=""/>
              <p style={{ color: isActive("/home") ? "#26262E" : "#838486" }}>Inicio</p>
        </Link>
        <Link 
          to="/buscar"
          className={`navbar-item ${isActive("/buscar") ? "active" : ""}`}>
            <img src={isActive("/buscar") ? '../../../public/images/search-active.svg' : '../../../public/images/search-inactive.svg'} alt="" />
            <p style={{ color: isActive("/buscar") ? '#26262E' : '#838486'}}>Buscar</p>
        </Link>
        <Link
          to="/perfil" 
          className={`navbar-item ${isActive("/perfil") ? "active" : ""}`}>
            <img src={isActive("/perfil") ? '../../../public/images/profile-active.svg' : '../../../public/images/profile-inactive.svg'} alt="" />
            <p style={{color: isActive("/perfil") ? '#26262E' : '#838486'}}>Perfil</p>
        </Link>
        <div id="navbar-friends" className="navbar-item">
            <img src="../../../public/images/friends-inactive.svg" alt="" />
            <p>Amigos</p>
        </div>
    </div>
  );
};
