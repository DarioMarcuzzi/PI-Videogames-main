import React from "react";
import { Link } from "react-router-dom";
import "./home.css";


function Home() {



  return (
    <section className="home">
      <div className="home__texto">
        <h3>Hola estas en el home</h3>
      </div>
      <div className="start">
        <Link to="/videogames">
          <strong>
            <button className="link">Start</button>
          </strong>
        </Link>
      </div>
    </section>
  );
}

export default Home;
