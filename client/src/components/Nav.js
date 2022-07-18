import React from 'react';
import stilosNav from './Nav.module.css'

import { Link } from 'react-router-dom';

function Nav() {
  return (

    <div  className={stilosNav.estiloDelNav} >
      <div className={stilosNav.contenedorDelNav}>
      <Link to= '/'>
          <div className={stilosNav.logoDelNav}>
          </div>
          <div className={stilosNav.nombreDelNav} >
            <strong><samp>app de juegos</samp></strong>
          </div>
        </Link>
        <div className={stilosNav.barraDeBusqueda}>
        
          
        </div>

      </div>
    </div>
  );
};

export default Nav;