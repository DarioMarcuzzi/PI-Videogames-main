import React from 'react'
import './createGame.css'
import Nav from '../Nav/Nav'
import { useState, useEffect} from 'react'
import * as API from "../actions/actions";



 export default function CreateGame(){
const[juegoNuevo, setJuegoNuevo] = useState({
    name: '',
    description: '',
    release_date: '',
    rating: Number,
    genre: [],
    plataform: []

})




const mostrart = (e) => {
  if(juegoNuevo.name.length < 4 ){
    alert("su juego no puede tener menos de 4 letras")
  }   //SEGUIR CON VALIDACIONES 4/8/2022

  console.log(juegoNuevo)
  API.buscarOtro(juegoNuevo)
} 

const nombreJuego = (e) =>{

  setJuegoNuevo({
    ...juegoNuevo, name: e.target.value
    })
}

const descripcionJuego = (e) =>{
  
  setJuegoNuevo({ ...juegoNuevo, description: e.target.value})
}

const fechaCreacionJuego = (e) =>{
  setJuegoNuevo({ ...juegoNuevo, release_date: e.target.value})
}

const ratingJuego = (e) =>{
  setJuegoNuevo({ ...juegoNuevo, rating: e.target.value})
}

const genresJuego = (e) =>{

  if(e.target.checked){
  juegoNuevo.genre.push(e.target.value)
  }
  else{
    juegoNuevo.genre.splice(juegoNuevo.genre.indexOf(e.target.value), 1)
  }
}

const plataformJuego = (e) =>{
    if(e.target.checked){
      juegoNuevo.plataform.push(e.target.value)
      }
      else{
        juegoNuevo.plataform.splice(juegoNuevo.plataform.indexOf(e.target.value), 1)
      }
}

  return (
    <div className='bg'>
      <Nav />
        <div className='contenedor-CreateGame'>
                <h1>Crear Juego</h1>
                <p> Aqui crearas tu juego, tendras diferentes enpoint y atributos que brindarle, hechale ganas!</p>
                <label> Nombre Juego:<input 
                type="text"
                placeholder="Ej: Super Mario"
                className='input-nombreJuego'
                onChange={nombreJuego}
                
                />
                </label>
                <p>En este input debes agregar la descripcion del juego</p>
                <label> Descripcion:<input type="text"
                placeholder="Ej: Super Mario es un juego de plataformas"
                className='input-descripcion'
                onChange={descripcionJuego}
                />  
                </label>
                <p>Pon aqui abajo↓ cuando creaste este juegazo! </p>
                <label htmlFor="date" className="title-name"><strong>Release Date: </strong></label>
                        <br />
                        <input 
                              name='releaseDate' 
                              className="dt" 
                              type="date" 
                              id="date" 
                              onChange={fechaCreacionJuego}
                              required />
                        <br />
                <p>Pon aqui el rating de tu juegazo</p>
                <label> Rating:<input 
                type="number"
                placeholder="Ej: 5"
                className='input-rating'
                onChange={ratingJuego}
                />
                </label>

                {/* ESTOS SON LOS INPUTS DE GENEROS */}

                <p>Aqui elije el genero o los generos que apliquen a tu juego</p>
                <label> Accion:</label>
                <input 
                      onChange={genresJuego}
                      type="checkbox"
                      name="accion"
                      value="Accion"
                      
                />
                <label> Aventura:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="aventura"
                  value="Aventura"
                />
                <label> Indie:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="indie"
                  value="Indie"
                />
                <label> RPG:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="rpg"
                  value="RPG"
                />
                <label> Arcade:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="arcade"
                  value="Arcade"
                />
                <label> Puzzle:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="puzzle"
                  value="Puzzle"
                />
                <label> Shooter:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego} 
                  name="shooter"
                  value="Shooter"
                />
                <label> Simulador:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="simulador"
                  value="Simulador"
                />
                <label> Otro:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="otro"
                  value="Otro"
                />
                <br />
                {/* ****************************************************************************************************************************************** */}

                {/* ESTOS SON LOS INPUTS DE PLATAFORMAS */}

                <p>Las plataformas que soportan el juego</p>
                <label> PS4:</label>
                <input 
                  type="checkbox"
                  onChange={plataformJuego}
                  name="ps4"
                  value="PS4"
                />
                <label> XBOX:</label>
                <input 
                  type="checkbox"
                  onChange={plataformJuego}
                  name="xbox"
                  value="XBOX"
                />
                <label> PC:</label>
                <input 
                  type="checkbox"
                  onChange={plataformJuego}
                  name="pc"
                  value="PC"
                />
                <label> Nintendo Switch:</label>
                <input 
                  type="checkbox"
                  onChange={plataformJuego}
                  name="nintendoSwitch"
                  value="Nintendo Switch"
                />
                {/* ****************************************************************************************************************************************** */}
                <br/>
                <button onClick={mostrart}>CREATE</button>
        </div>
    </div>


  )
}


