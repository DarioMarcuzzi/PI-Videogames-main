import React from "react";
import "./gamesStyles.css";
import { Link } from "react-router-dom";

const Games = ({ busqueda }) => {
  return (
    <div className="flex-container">
      {busqueda.map((game) => (
        <div className="games" key={game.id}>
          <div className="nombreJuego">{game.name}</div>
          {/* {console.log("busqueda", game)} */}

          <div className="contenedor-img">
            {/* <Link to={`/DetalleJuego/${game.id}` }
              state={{ from: "occupation" }} >
              
            </Link> */}
            <Link
              to={{
                pathname: "/DetalleJuego",
                state: {
                  juegoSeleccionado: { game },
                },
              }}
            >
              <img
                className="img"
                src={game.background_image}
                alt="no se cargo la imagen del juego"
              />
            </Link>
          </div>
          {game.genres.map((genre) => (
            <div className="genero" key={genre.id}>
              <div>
                <li>{genre.name}</li>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Games;
