import{GET_ALL_VIDEOGAMES ,GET_VIDEOGAMES_BY_NAME,GET_VIDEOGAMES_BY_ID,GET_VIDEOGAMES_BY_FILTER,GET_VIDEOGAMES_BY_ORDEN, RESET_FILTER, GET_PLATFORMS} from './index.js'
import axios from 'axios';

export function getAllVideogames(){
    return async function(dispatch){
      try {
        const response = await axios.get('http://localhost:3001/videogames')
        dispatch({
          type: GET_ALL_VIDEOGAMES,
          payload: response.data
        })
      } catch (error) {
        console.log(error)
      }
      
    }
}

export function getVideoGamebyName(name){
    return async function(dispatch){
      try {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
        dispatch({
          type: GET_VIDEOGAMES_BY_NAME,
          payload: response.data
        })
      } catch (error) {
        console.log(error)
      }
      
    }
}

export function getVideoGamebyId(id){
  console.log(id)
    return async function(dispatch){
      try {
        const response = await axios.get(`http://localhost:3001/videogames/${id}`)
        dispatch({
          type: GET_VIDEOGAMES_BY_ID,
          payload: response.data
        })
        
      } catch (error) {
        console.log(error)
      }
    }
}


 export function getVideoGameByFilter(filter){
  console.log(filter)
    return{
      type: GET_VIDEOGAMES_BY_FILTER,
      payload: filter
    }
 }


 export function getVideoGameByOrden(orden){
  console.log(orden)
    return{
      type: GET_VIDEOGAMES_BY_ORDEN,
      payload: orden
    }
 }

 export function resetTotal(reset){
  console.log(reset)
  return{
    type: RESET_FILTER
  }
 }

 export function getPlatforms(){
  return async function(dispatch){
    try {
      const response = await axios.get('localhost:3001/videogames/platforms')
      dispatch({
        type: GET_PLATFORMS,
        payload: response.data
      })
    } catch (error) {
      console.log(error)
    }
    
  }
}





 // LAS PROMESAS (.THEN()) NO SABEMOS CUANDO SE VA A RESOLVER
  export const buscarOtro = (juegoNuevo) =>{
var url = 'http://localhost:3001/guardarJuego';
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(juegoNuevo), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
  }



  export async function getDb(req, res){
    var url ="http://localhost:3001/genre"
 
    try{
      const response = await fetch(url)
      const data = await response.json();
      console.log(data);
    } catch (error){
      console.log(error)
    }
  }



// CON ASYNC AWAIT FORSAMOS UNA ESPERA EN LA FUNCION PARA QUE ESPERE QUE SE TERMINE LA PROMESA
  export  async function getVideogameDetail(id) {
        
    try{
      const response = await fetch(`https://api.rawg.io/api/games/${id}?key=36c5bd8587b8415fbca11b4b7d148d92`);
      const data = await response.json();
      return data;
        }catch(error){
          console.log(error)
    };
  }

  //ESTE ES EL PEDIO INICIAL A LA API, ESTO ME TRAE EL OBJETO CRUDO (DATA)
  // export async function getAPI(){
    
  //     try{
  //       const response = await fetch(API_URL);
  //       const data = await response.json(); 
  //       return data;
  //       }catch(error){
  //         console.log(error)
  //       }
  //   }

    //ES UN PEDIDO A LA API POR LA URL QUE ME LLEGA POR PARAMETRO, ESTO ME TRAE EL OBJETO CRUDO (DATA)
  export async function getAllVideoGamesUrl(url){

    try{
      const response = await fetch(url);
      const data = await response.json(); 
      
      return data
      }catch(error){
        console.log(error)
      }
  }




  // export async function getAllVideoGames(){
  //   try{

  //   const response = await fetch(API_URL);
  //   const data = await response.json(); 
  //   return data.results;
  //   }catch(error){
  //     console.log(error)
  //   }

  // }

  // ES UN PEDIDO A LA API POR EL NOMBRE QUE ME LLEGA POR PARAMETRO, ESTO ME TRAE EL OBJETO CRUDO (DATA)
  // export async function getVideoGamebyName (name){
  //   try{
  //     const response = await fetch(`${API_URL}&search=${name}`);
  //     const data = await response.json();
  //     return data;
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  



