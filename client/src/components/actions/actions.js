//CAMBIAR LA API DE LUGAR!!!!
const API_URL = "https://api.rawg.io/api/games?key=36c5bd8587b8415fbca11b4b7d148d92"

  export const buscarEnElBack = () => {
    fetch("http://localhost:3001/")
      .then(response => response.json())         
      .then(json => {
        console.log(json)
      });
      
  }

  export async function getAllVideoGames(){
    try{

    const response = await fetch(API_URL);
    const data = await response.json();
    return data.results;
    }catch(error){
      console.log(error)
    }

  }

  export async function getVideoGamebyName (name){
    try{
      const response = await fetch(`${API_URL}&search=${name}`);
      const data = await response.json();
      return data;
    }catch(error){
      console.log(error)
    }
  }



