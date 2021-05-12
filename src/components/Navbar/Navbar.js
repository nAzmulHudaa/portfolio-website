import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  return (
    <div className='font'>
      <nav class="navbar navbar-expand-lg ">
        <a class="navbar-brand text-info font-weight-bolder" href="/">
          <a href=""></a>
          <span className="logo color">Rimon's</span>
        </a>
        <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsExample09" >
          <ul class="navbar-nav ml-auto ">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
          <div className="navbar ml-auto">
              <ul>
                  <li className='nav-item icon'>
                     <FontAwesomeIcon icon={faFacebook} />
                  </li>
                  <li className='nav-item icon'>
                  <FontAwesomeIcon icon={faLinkedin} />
                  </li>
                  <li className='nav-item icon'>
                  <FontAwesomeIcon icon={faInstagram} />
                  </li>
                  <li className='nav-item icon'>
                  <FontAwesomeIcon icon={faTwitter} />
                  </li>
               </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;