//CAMBIAR LA API DE LUGAR!!!!
// import axios from 'axios';
require ('dotenv').config();


// const {API_URL ,API_KEY} = process.env;


const API_URL = "https://api.rawg.io/api/games?key=36c5bd8587b8415fbca11b4b7d148d92"



// export const getAllGames = (juegoNuevo) => {
// return function(dispatch){
//   return axios.get("/http://localhost:3001/verMensaje")
//   .then(res => {
//     dispatch({
//       type: "GET_ALL_GAMES",
//       payload: res.data
//     })
//     }
//   )}
//   }



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
  export async function getAPI(){
    
      try{
        const response = await fetch(API_URL);
        const data = await response.json(); 
        return data;
        }catch(error){
          console.log(error)
        }
    }

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
  export async function getVideoGamebyName (name){
    try{
      const response = await fetch(`${API_URL}&search=${name}`);
      const data = await response.json();
      return data;
    }catch(error){
      console.log(error)
    }
  }
  



