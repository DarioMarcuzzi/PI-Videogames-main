import {useState , useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import "./pagInicial.css";
import Nav from "./Nav/Nav.js";
import Games from "./card/games.js";
import SearchBar from "./searchBar/SearchBar.jsx";
import Loading from "./loading/Loading.js";
import { getAllVideogames, getVideoGameByFilter,getVideoGameByOrden,resetTotal } from "./actions/actions";

export default function PagInicial() {
  const allVideoGames = useSelector((state) => state.allVideoGames);
  const filterActived = useSelector((state) => state.filterActived);
  const orden = useSelector((state) => state.orden);
  const filtro = useSelector((state) => state.filtro);
  
  const dispatch = useDispatch();
  const [filter , setFilter] = useState(false)
  const [tipeOrden , setTipeOrden ] = useState("")
  console.log(filter)

console.log("tipeOrden", tipeOrden)
  useEffect(() => {
      if(filterActived === false){
      dispatch(getAllVideogames());
      }

  }, [dispatch,filterActived,tipeOrden]);

  useEffect(() => {
    
      console.log("tipeOrden", tipeOrden)
      dispatch(getVideoGameByOrden(tipeOrden))
      setTipeOrden(tipeOrden)
    
  }, [dispatch,tipeOrden]);

  
  const handleFilter = (e) => {
    e.preventDefault();
        setFilter(true)
      dispatch(getVideoGameByFilter(e.target.value))
    

  }

  const resetFilter = (e) => {
    setFilter(false)
    dispatch(resetTotal(e.target.value))
    setTipeOrden("")
  }

  const handleOrden = (e) => {
    setFilter(true)
    dispatch(getVideoGameByOrden(e.target.value))
    setTipeOrden(e.target.value)
  }


  return (
    <div className="contenedor-principal">
      <div className="contenedor-home">

        <div className="content-nav">
          <Nav />
        </div>

        <div className="navbar-filtros">
          <button
          disabled={filterActived === false}
          onClick={resetFilter}
          value="reset"
          >
            Reset Filter
          </button>
            <h1>Filters</h1>
            <div >
              <SearchBar />
            </div>
            <div className="buttons-filter">
              <button className={filtro === "Created" ? "btn-activo" : "btn-inactivo"} value="Created" onClick={handleFilter}>Created</button>
              <button className={filtro === "Api" ? "btn-activo" : "btn-inactivo"} value="Api" onClick={handleFilter}>Api</button>
              
            </div>
            
            <h1>Orden</h1>
            <div className="Abc">
              <h3>Abecedario</h3>
              <div className="btn-abc">
                <button className={orden === "A-Z" ? "btn-activo" : "btn-inactivo"} onClick={handleOrden} value="A-Z">A-Z</button>
                <button className={orden === "Z-A" ? "btn-activo" : "btn-inactivo"} onClick={handleOrden} value="Z-A">Z-A</button>
              </div>  

            </div>
            <dib className="rating">
             <h3> Rating </h3>
             <div className="btn-rating">  
             <button className={orden === "max" ? "btn-activo" : "btn-inactivo"} onClick={handleOrden} value="max">Max rating</button>
             <button className={orden === "min" ? "btn-activo" : "btn-inactivo"} onClick={handleOrden} value="min">Min rating</button>
             </div>
             
            </dib>
        </div>
        <div className="videoGames">
          {allVideoGames ? (
            <div className="contenedor-cartas">
              {allVideoGames.map((games) => {
                return (
                  <div className="contenedor-cartas">
                    <Games
                      name={games.name}
                      image={games.image}
                      genres={games.genres}
                      id={games.id}
                      platforms={games.platforms}
                      rating={games.rating}
                    />
                  </div>
                );
              })}
                
            </div>
          ) : (
            <Loading />
          )}
        </div>

      </div>
    </div>
  );
}