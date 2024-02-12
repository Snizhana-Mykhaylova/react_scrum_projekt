import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../img/logo.jpeg'

const HeaderComponent = () => {
    return (
<div>
 
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
 
        <div className="container-fluid">
       
            <button
                data-mdb-collapse-init
                className="navbar-toggler"
                type="button"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars"></i>
            </button>
    
     
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
                    <a className="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src={logo}
                            height="180"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </a>
                        
      
                    <div
                    className="collapse navbar-collapse justify-content-center"
                    id="navbarCenteredExample">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Kurse</a>
                        </li>
                        
                        <li className="nav-item">
                                    <Link to={"/mitarbeiter"} className="nav-link" href="#">Mitarbeiter</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Teilnehmer</a>
                        </li>
                        </ul>
                        

                    </div>
                
        
         
                <div className="d-flex align-items-center">
               
                    <a className="text-reset me-3" href="#">
                    <i className="fas fa-shopping-cart"></i>
                    </a>
            
           
                    <div className="dropdown">
                        <a
                            data-mdb-dropdown-init
                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-expanded="false">
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a className="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                                    
      
                    <div className="dropdown">
                        <a
                            data-mdb-dropdown-init
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            aria-expanded="false">
                            <img
                            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                            />
                        </a>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <a className="dropdown-item" href="#">My profile</a>
                            </li>
                            
                            <li>
                                <a className="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
        
            </div>
        </div>
    
    </nav>
     
</div>
    )
}

export default HeaderComponent