import {useState , useEffect }  from "react";
import "./pagInicial.css";
import Nav from "./Nav/Nav.js";
import Games from "./card/games.js";
import Loading from "./loading/Loading.js";
import Pagination from "./Pagination/Pagination.js";
import { Route } from "react-router-dom";
import * as API from "./actions/actions";

export default function SearchBar() {
  const [objetoGrande, setObjetoGrande] = useState({});
  const [listaJuegos, setListaJuegos] = useState([]);
  const [nombreJuego, setNombreJuego] = useState("");
  const [contador, setContador] = useState(0);
  const [loading, setLoading] = useState(false);
  const [tipoDeLoader, setTipoDeLoader] = useState("");

  useEffect(() => {
    // API.getAPI().then(setApi);
    setLoading(true);
    API.getAPI().then((e) => {
      setObjetoGrande(e);
      // setListaJuegos(e.results);
      let nuevaListaJuegos = [];
      for (let i = 0; i < 15; i++) {
        nuevaListaJuegos.push(e.results[i]);
      }
      setListaJuegos(nuevaListaJuegos);
      cambiarEstados();
    });
    // API.getAllVideoGamesUrl().then(setBusqueda);
  }, []);

  const cambiarEstados = (e) => {
    setTimeout(() => {
      setLoading(false);
      setTipoDeLoader("");
    }, 2000);
  };


  const capturar = (e) =>{
    console.log(e.target.value)
    let error = {}
    let valorTarget = e.target.value
    if(valorTarget.length < 4){
      error.name = false
    } else {
      error.name = true
    }
    console.log(error)
  }

  // FUNCTION PARA PASAR DE PAG A LA ANTERIOR  (OBJETOGRANDE.PREVIOUS)                                                                                                    (E.RESULTS)
  //GETALLVIDEOGAMESURL SE LE PASA LA URL DEL ANTERIOR OBJETO, SETEA EN OBJETOGRANDE  EL OBJETO PRINCIPAL Y LUEGO LE SETEA A LISTAJUEGOS EL ARRAY QUE SE ENCUENTRA EN ESE OBJETO.RESULTS
  const onPrevious = () => {
    setLoading(true);
    API.getAllVideoGamesUrl(objetoGrande.previous).then((e) => {
      setObjetoGrande(e);
      // setListaJuegos(e.results);
      let nuevaListaJuegos = [];

      for (let i = 0; i < 15; i++) {
        nuevaListaJuegos.push(e.results[i]);
      }
      setListaJuegos(nuevaListaJuegos);
    });
    cambiarEstados();
  };

  // FUNCTION PARA PASAR DE PAGINA A LA SIG:  (OBJETOGRANDE.PREVIOUS)                                                                                                        (E.RESULTS)
  //GETALLVIDEOGAMESURL SE LE PASA LA URL DEL SIGUIENTE OBJETO, SETEA EN OBJETOGRANDE  EL OBJETO PRINCIPAL Y LUEGO LE SETEA A LISTAJUEGOS EL ARRAY QUE SE ENCUENTRA EN ESE OBJETO.RESULTS
  const onNext = () => {
    setLoading(true);
    API.getAllVideoGamesUrl(objetoGrande.next).then((e) => {
      setObjetoGrande(e);
      // setListaJuegos(e.results);
      // let lista = listaJuegos;
      let nuevaListaJuegos = [];
      for (let i = 0; i < 15; i++) {
        nuevaListaJuegos.push(e.results[i]);
      }
      setListaJuegos(nuevaListaJuegos);
    });
    cambiarEstados();
  };

  //CONTADOR
  // const cueta = () => {
  // setContador(contador + 1);

  // }

  // BOTON TEST
  const setInfo = () => {
    console.log(objetoGrande);
  };

  //BUSCARJUEGO: LLAMA A LA FUNCTION GETVIDEOGAMEBYNAME A LA CUAL SE LE PASA UN PARAMETRO 'NOMBRE JUEGO' CAPTURADO EN EL INPUT Y HACE UN PEDIDO A LA API_URL CON EL NOMBRE DEL JUEGO CAPUTURADO
  // SI VALUE.RESULT(LISTAJUEGOS) ES MENOR A 1 ES POR Q NO SE ENCONTRARON JUEGOS  SI ES MAYOR A 1 EN LISTA DE JUEGOS SETEA EL RESULTADO.
  const buscarJuego = () => {
    API.getVideoGamebyName(nombreJuego).then((value) => {
      const listaJuegos = value.results;
      if (listaJuegos.length < 1) {
        setTipoDeLoader("buscar");
        setLoading(true);

        cambiarEstados();

        console.log("No se encontraron juegos");
      } else {
        setTipoDeLoader("buscar");
      }
      setLoading(true);

      cambiarEstados();
      setTimeout(() => {
        let nuevaListaJuegos = [];
        for (let i = 0; i < 15; i++) {
          nuevaListaJuegos.push(value.results[i]);
        }
        setListaJuegos(nuevaListaJuegos);
      }, 1);
    });
  };

  //FUNCTION PARA BUSCAR POR PLATAFORMAS TODAVIA NO FUNCA!
  const buscarGenre = (e) => {
    
  };

  // FUNCION ORDENAR: INVESTIGAR ORDENAMIENTO CON .SORT()
  const orden = (e) => {
    const SortArray = (x, y) => {
      if (e.target.value === "A-Z") {
        console.log("es igual a A-Z");
        if (x.name < y.name) {
          return -1;
        }
        if (x.name > y.name) {
          return 1;
        }
        return 0;
      } else if (e.target.value === "Z-A") {
        console.log("es igual a Z-A");
        if (x.name > y.name) {
          return -1;
        }
        if (x.name < y.name) {
          return 1;
        }
        return 0;
      } else if (e.target.value === "Mejor") {
        console.log("es igual a Mejor");
        if (x.rating > y.rating) {
          return -1;
        }
        if (x.rating < y.rating) {
          return 1;
        }
        return 0;
      } else if (e.target.value === "Peor") {
        console.log("es igual a Peor");
        if (x.rating < y.rating) {
          return -1;
        }
        if (x.rating > y.rating) {
          return 1;
        }
        return 0;
      }
    };

    console.log(e.target.value);
    // var listaJuegosOrdenada = listaJuegos.sort(SortArray);
    setContador(contador + 1); //PREGUNTAR POR QUE ESTO ESTA ASI!... LO PUSE ASI POR Q ES LA UNICA MANERA QUE ME REENDERISE UNA NUEVA LISTA DE JUEGOS ORDENADA
    setListaJuegos(listaJuegos.sort(SortArray));
  };

  // FUNCTION FILTRARJUEGO: OBTIENE EL VALOR DEL IMPUT "BUSCAR JUEGO" Y SE LO SETEA A !NOMBRE DE JUEGO!
  const filtrarJuego = (e) => {
    setNombreJuego(e.target.value);
  };

  return (
    <div className="Contenedor-PagInicial">
      <Route path="/" render={() => <Nav />} />
      <h2>Estas en la pag inicial</h2>
        <strong>
            <div>.
              <input
                autoComplete="on"
                type="text"
                onChange={capturar}
              >
              </input>
          </div>
        </strong>


      <strong>
        <label className="ordenar">Ordenar por :</label>
      </strong>
      {/* SELECTOR DE OPCIONES DE FILTRADO */}
      <select onChange={orden}>
        <option>A-Z</option>
        <option>Z-A</option>
        <option>Mejor</option>
        <option>Peor</option>
      </select>
      <strong>
        <label className="ordenar">Genre :</label>
      </strong>
      {/* SELECTOR DE OPCIONES DE FILTRADO */}
      <select onChange={buscarGenre}>
        <option>Accion</option>
        <option></option>
        <option></option>
        <option></option>
        <option></option>
      </select>

      {/* INPUT PARA BUSCAR EL JUEGO POR NOMBRE */}
      <input
        type="text"
        placeholder="Buscar video juegos"
        onChange={filtrarJuego}
      />
      <button onClick={buscarJuego}>Buscar</button>
      {/* BOTON DE PRUEB */}
      <div>
        {/* <button onClick={cueta}>contador</button> // CONTADOR INVISIBLE 
        <h1>{contador}</h1> */}
        <button onClick={setInfo}>test</button>
      </div>
      {/* PAGINACION DE LA API */}
      <div>
        <Pagination
          previous={objetoGrande.previous}
          next={objetoGrande.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
      {/* ESTOS SON LOS JUEGOS QUE SE MUESTRAN EN LA PANTALLA */}
      <did>
        <Games busqueda={listaJuegos} />
      </did>

      <div>
        <Pagination
          previous={objetoGrande.previous}
          next={objetoGrande.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
      {loading ? <Loading tipoDeLoader={tipoDeLoader} /> : null}
    </div>
  );
}