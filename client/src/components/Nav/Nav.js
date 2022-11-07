
import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';


function Nav() {

  
  

 

  return (

    <div  className= 'Nav'>
      
          <div>
            <Link to= '/'>
                <button className='botonInicio' >INICIO↓</button>
            </Link>
          </div>

          <div className='divInfo'>
            <Link to= '/About'>
                <strong><p className='informacionPag' >INFO DE LA PAG</p></strong>
            </Link>
          </div>

          <div>
          
            <Link to = '/createGame'>
              <button className='boton-CrearJuego'
                      
                      
              >CREAR JUEGO
              </button>
            </Link>
         
          </div>

      </div>
  );
};

export default Nav;