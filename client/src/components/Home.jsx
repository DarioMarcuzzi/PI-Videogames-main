import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <section className="Home">
    <h3>Hola estas en el home</h3>
    <Link to="/pagInicial">
          <samp>Start</samp>  
      </Link>
  </section>
)

export default Home