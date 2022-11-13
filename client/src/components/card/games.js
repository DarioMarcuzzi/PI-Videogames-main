import React from "react";
import "./gamesStyles.css";
import { Link } from "react-router-dom";

const Games = ({ name, image, genres, id , rating}) => {

  

  return (
    <div className="contenedor-cartas-g">
      <p>{rating}</p>
      <h1>{name}</h1>
      <Link to={`/DetalleJuego/${id}`}>
      <img src={image} alt="imagen" width={300} />
      </Link>
      <div className="contenedor-genres">
        {genres.map((genre) => {
          return <li>{genre}</li>;
        })}
        </div>
    </div>
  );
};

export default Games;
