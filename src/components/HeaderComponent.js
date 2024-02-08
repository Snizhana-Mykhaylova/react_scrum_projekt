import React from 'react'

const HeaderComponent = () => {
    return (
<div>
 
    <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
 
        <div class="container-fluid">
       
            <button
                data-mdb-collapse-init
                class="navbar-toggler"
                type="button"
                data-mdb-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i class="fas fa-bars"></i>
            </button>
    
     
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
      
                    <a class="navbar-brand mt-2 mt-lg-0" href="#">
                        <img
                            src="./view/img/WhatsApp Image 2024-02-06 at 12.30.24.jpeg"
                            height="180"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </a>
                        
      
                    <div
                    class="collapse navbar-collapse justify-content-center"
                    id="navbarCenteredExample">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Kurse</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Mitarbeiter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Teilnehmer</a>
                        </li>
                        </ul>
                        

                    </div>
                
        
         
                <div class="d-flex align-items-center">
               
                    <a class="text-reset me-3" href="#">
                    <i class="fas fa-shopping-cart"></i>
                    </a>
            
           
                    <div class="dropdown">
                        <a
                            data-mdb-dropdown-init
                            class="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            aria-expanded="false">
                            <i class="fas fa-bell"></i>
                            <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink">
                            <li>
                                <a class="dropdown-item" href="#">Some news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Another news</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                                    
      
                    <div class="dropdown">
                        <a
                            data-mdb-dropdown-init
                            class="dropdown-toggle d-flex align-items-center hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            aria-expanded="false">
                            <img
                            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzctYWV3LTEzOS5qcGc.jpg"
                            class="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                            />
                        </a>
                        <ul
                            class="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar">
                            <li>
                                <a class="dropdown-item" href="#">My profile</a>
                            </li>
                            
                            <li>
                                <a class="dropdown-item" href="#">Settings</a>
                            </li>
                            <li>
                                <a class="dropdown-item" href="#">Logout</a>
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