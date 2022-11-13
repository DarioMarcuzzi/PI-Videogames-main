import React from 'react'
import './createGame.css'
import Nav from '../Nav/Nav'
import { useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlatforms } from '../actions/actions'




 export default function CreateGame(){
const[juegoNuevo, setJuegoNuevo] = useState({
    name: '',
    description: '',
    release_date: '',
    rating: Number,
    genre: [],
    // genre: [1,2,3], y es un [asda.dsad.sdad]
    plataform: ""
    

})
const plataformas = useSelector(state => state.plataformas)
const dispatch = useDispatch()

console.log("plataformas", plataformas)

useEffect (() => {
  dispatch(getPlatforms())

}, [dispatch])

const mostrart = (e) => {
  console.log(juegoNuevo)
  
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
      setJuegoNuevo({ ...juegoNuevo, plataform: juegoNuevo.plataform  + e.target.value + ","})
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
                      value="1"
                      
                />
                <label> Aventura:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="aventura"
                  value="3"
                />
                <label> Indie:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="indie"
                  value="2"
                />
                <label> RPG:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="rpg"
                  value="4"
                />
                <label> Arcade:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="arcade"
                  value="10"
                />
                <label> Puzzle:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="puzzle"
                  value="9"
                />
                <label> Shooter:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego} 
                  name="shooter"
                  value="6"
                />
                <label> Simulador:</label>
                <input 
                  type="checkbox"
                  onChange={genresJuego}
                  name="simulador"
                  value="8"
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


