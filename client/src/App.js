import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import PagInicial from './components/pagInicial';
import Home from './components/home/Home.jsx';
import About from './components/about/About.js';
import DetalleJuego from './components/card/DetalleJuego.js';
import CreateGame from './components/createGame/createGame.jsx';

function App() {

  return (
    
    <BrowserRouter>
    <div className="App">

        <Switch>

          <Route exact path="/" component={Home} />
        
          <Route path="/pagInicial" component={PagInicial}/>

          <Route path="/About" component={About} />

          <Route path="/DetalleJuego" component={DetalleJuego} />

          <Route path="/CreateGame" component={CreateGame} />
        
        </Switch>
            
    </div>
    </BrowserRouter>
    
    
    );
  }
  
  
  export default App;
  