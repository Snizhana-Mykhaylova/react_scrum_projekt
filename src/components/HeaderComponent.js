import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/logo.png'
import profilelogo from '../img/profilelogo.png'

const HeaderComponent = () => {
    return (
        <div className="headerbackground">  
<div className="container">
        <div class="header">
        <div><img className="logo" src={logo}></img></div>
            <ul className="navlist">
                <li><a href>Mitarbeiter</a></li>
                <li><a href>Dozenten</a></li>
                <li><a href>Dozenten</a></li>
            </ul>
            
        <div class="header-right">
                <a href><img className="profileLogo" src= {profilelogo}></img><span className="logintext">Login</span></a>
        </div>
        
        
        
        </div>
</div>
</div>
    )
}

export default HeaderComponent