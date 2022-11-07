import React, { useEffect, useState } from "react";
import "./detalleJuegoStyles.css";
import { useLocation, Link } from "react-router-dom";

import * as API from "../actions/actions";

export default function DetalleJuego() {
  const location = useLocation();
  const { juegoSeleccionado } = location.state;
  const game = juegoSeleccionado.game;
  const [description, setDescription] = useState("");

  useEffect(() => {
    API.getVideogameDetail(game.id).then((e) => {
      setDescription(e.description.replace(/(<([^>]+)>)/gi, ""));
    });
  });

const numer = 7


console.log(numer)

  return (
    <div className="contenedor-Principal">
      <div className="img-Juego">
          <img
            src={game.background_image}
            alt="no se carga imagen de juego"
            className="img2"
            >
          </img>
      </div>

      <div className="contenedor-Detalles">
        <h1 className="nombre">{game.name}</h1>

        {game.genres.map((genre) => (
          <div className="genero" key={genre.id}>
            <li>{genre.name}</li>
          </div>
        ))}

        {game.parent_platforms.map((plataforma) => (
          <div>
            <li key={plataforma.id}>{plataforma.platform.name}</li>
          </div>
        ))}
        
        <p>{description}</p>

        <p>{game.released}</p>
        <p>{game.rating}</p>
        
        <Link to="/pagInicial">
              <strong> <button className="boton">B4CK←</button></strong>
          </Link>
      </div>
    </div>
  );
}
