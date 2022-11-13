import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./detalleJuegoStyles.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideoGamebyId } from "../actions/actions";

export default function DetalleJuego() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const videoGameById = useSelector((state) => state.videoGameById);


  useEffect(() => {
    dispatch(getVideoGamebyId(id));
    return () => {
      console.log("entro");
      dispatch({ type: "GET_VIDEOGAMES_BY_ID", payload: {} });
    };
  }, []);

  console.log(videoGameById);

  return (
    <div>
      {videoGameById ? (
        <div className="contenedor-Principal">
          <div className="img-Juego">
            <img
              src={videoGameById.image}
              alt="no se carga imagen de juego"
              className="img2"
            ></img>
          </div>

          <div className="contenedor-Detalles">
            <div>
              <h1>{videoGameById.name}</h1>
            </div>
            <div>
              <p>{videoGameById.description}</p>
            </div>
            <div className="genres-platforms">
              <div className="genres">
                <label>
                  <b>Genres:</b>
                {videoGameById.genres?.map((genre) => (
                  <div className="genero" key={genre.id}>
                    
                    <li>{genre}</li>
                  </div>
                ))}
                </label>
              </div>

              <div className="platforms">
                <label>
                  <b>Platforms:</b>
                {videoGameById.plataforms?.map((plataforma) => (
                  <div>
                    <li key={plataforma.id}>{plataforma}</li>
                  </div>
                ))}
                </label>
              </div>
            </div>
            <p>{videoGameById.released}</p>
            <p>{videoGameById.rating}</p>

            <Link to="/videogames">
              <strong>
                {" "}
                <button className="boton">B4CK←</button>
              </strong>
            </Link>
          </div>
        </div>
      ) : (
        <h1>chau</h1>
      )}
    </div>
  );
}
