import React from "react";
import { Link } from "react-router-dom";

import logo from "../img/logo.png";
import profilelogo from "../img/profilelogo.png";

const HeaderComponent = () => {
  return (
    <div className="headerbackground">
      <div className="container">
        <div className="header">
          <div>
            <Link to={"/"}>
              <img className="logo" src={logo} alt=""></img>
            </Link>
          </div>
          <ul className="navlist">
            <Link to={"/mitarbeiter"} className="nav-link" href="#">
              Mitarbeiter
            </Link>
            <Link to={"/teilnehmer"} className="nav-link" href="#">
              Schüler
            </Link>
            <Link to={"/dozenten"} className="nav-link" href="#">
              Dozenten
            </Link>
            <Link to={"/kurse"} className="nav-link" href="#">
              Kurse
            </Link>
          </ul>
          <div className="header-right">
            <Link to={"/login"}>
              <img className="profileLogo" src={profilelogo} alt=""></img>
              <span className="logintext">Login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
