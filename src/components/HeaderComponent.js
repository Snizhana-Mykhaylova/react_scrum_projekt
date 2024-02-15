import React from "react";
import { Link } from "react-router-dom";

import logo from '../img/logo.png'
import profilelogo from '../img/profilelogo.png'

const HeaderComponent = () => {
    return (
        <div className="headerbackground">  
<div className="container">
        <div class="header">
            <div>
              <Link to={"/"}><img className="logo" src={logo}></img></Link>
            </div>
            <ul className="navlist">
              <Link to={"/mitarbeiter"} className="nav-link" href="#">
                    Mitarbeiter
                  </Link>
                   <Link to={"/teilnehmer"} className="nav-link" href="#">
                    Teilnehmer
                  </Link>
<Link to={"/dozenten"} className="nav-link" href="#">
                    Dozenten
                  </Link>
<Link to={"/kurse"} className="nav-link" href="#">
                   Kurse
                  </Link>

            </ul>
            
        <div class="header-right">
                <a href><img className="profileLogo" src= {profilelogo}></img><span className="logintext">Login</span></a>
        </div>
        
        
        
        </div>
</div>
</div>
    )
}


export default HeaderComponent;