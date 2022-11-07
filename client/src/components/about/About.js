import React from "react";
import "./About.css";
import Nav from "../Nav/Nav";



 function about() {
  return (
    <div className="About">
      <Nav />
      <div className="About-container">
        <div className="About-text">
          <h1>Creador de la pag: Dario Marcuzzi</h1>
            <p>CIUDAD: Santa Cruz</p>
            <p>PAIS: Argentina</p>
            <p>EMAIL:darik@hotmail.com</p>
            <p>TELEFONO: +54 02323 329434</p>
            <p> LINKEDINK IN: <a href="https://www.linkedin.com/in/dario-marcuzzi-399908224/">Dario Marcuzzi</a></p>
        </div>
      </div>
    </div>
  );
}


export default about;