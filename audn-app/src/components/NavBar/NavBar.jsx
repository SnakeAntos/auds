import "./styles.css";
import { useState } from "react";
import {Link, useLocation} from "react-router-dom"
import LogoHomeInactive from "../../../public/images/home-inactive.svg"
import LogoHomeActive from "../../../public/images/home-active.svg"
import LogoSearchActive from "../../../public/images/search-active.svg"
import LogoSearchInactive from "../../../public/images/search-inactive.svg"
import LogoProfileActive from "../../../public/images/profile-active.svg"
import LogoProfileInactive from "../../../public/images/profile-inactive.svg"
import LogoFriendsInactive from "../../../public/images/friends-inactive.svg"

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
              <img src={isActive("/home") ? LogoHomeActive : LogoHomeInactive} alt=""/>
              <p style={{ color: isActive("/home") ? "#26262E" : "#838486" }}>Inicio</p>
        </Link>
        <Link 
          to="/buscar"
          className={`navbar-item ${isActive("/buscar") ? "active" : ""}`}>
            <img src={isActive("/buscar") ? LogoSearchActive : LogoSearchInactive} alt="" />
            <p style={{ color: isActive("/buscar") ? '#26262E' : '#838486'}}>Buscar</p>
        </Link>
        <Link
          to="/perfil" 
          className={`navbar-item ${isActive("/perfil") ? "active" : ""}`}>
            <img src={isActive("/perfil") ? LogoProfileActive : LogoProfileInactive} alt="" />
            <p style={{color: isActive("/perfil") ? '#26262E' : '#838486'}}>Perfil</p>
        </Link>
        <div id="navbar-friends" className="navbar-item">
            <img src={LogoFriendsInactive} alt="" />
            <p>Amigos</p>
        </div>
    </div>
  );
};
