import {useState , useEffect }  from "react";
import Nav from './Nav.js';
import { Route } from "react-router-dom";
// import  {buscarEnElBack, busquedaEnLaApi  } from "../components/actions/actions"
import * as API from './actions/actions'

export default function SearchBar (){
  const [busqueda, setBusqueda] = useState([]);
  const [nombreJuego, setNombreJuego] = useState('')

  useEffect(() => {
    API.getAllVideoGames().then(setBusqueda)
  },[]);
  

  const buscarJuego = e =>{
    // console.log(nombreJuego)
    // console.log(busqueda)

    // for (let i = 0; i < busqueda.length; i++){
    //   console.log(busqueda[i].name)
    //   if(nombreJuego === busqueda[i].name){
    //     console.log(busqueda[i])
    //   }
    // }
    
    API.getVideoGamebyName(nombreJuego).then(
    (value)=>{
              const listaJuegos = value.results
              if(listaJuegos.length < 1){
                console.log("No se encontraron juegos")
              } else {
              setBusqueda(value.results);
              console.log("Se encontraron juegos")
              }
    }
    
    )

  }

  const filtrarJuego = e => {
    // setBusqueda(e.target.value)
    setNombreJuego(e.target.value)
    // console.log(e.target.value)
    // console.log(nombreJuego)
  }
  

  return ( 
  
  <>
    
    <Route path= '/' render={()=><Nav/>}/>
    <h2>Estas en la pag inicial</h2>
    <input
      type="text"
      placeholder="Buscar video juegos"
      onChange={filtrarJuego}
    />
    <button
    
    onClick={buscarJuego}
    >
      Buscar

    </button>
    
    <section>
      { busqueda.map(game => (
        <ul key={game.id}>
        <div>
        {game.name}
        
        <img 
            src={game.background_image} 
            width={300} 
            alt="no se cargo la imagen del juego"
            /> 
        </div>
        </ul> 
      ))}
    </section>

        {/* <input
              className="button"
              value = "buscar en el back"
              type="button"
              onClick={buscarEnElBack}
        />
        <input
              className="button"
              value = "busqueda en la api"
              type="button"
              onClick={busquedaEnLaApi}
        />
        <form onSubmit = {(e) => {
        e.preventDefault();
        busquedaEnLaApi(input);
        e.target.reset() 
      }}>
        <input 
              onChange={onHandleInputCiudadChange}
              type=" text "
              placeholder="VideoGame...."
        />
        <input type= "submit" value="buscar" />
        </form> */}
    

        


  </>
  ) 
}