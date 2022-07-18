import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import pagInicial from './components/pagInicial';
import Home from './components/Home.jsx'


function App() {

  return (
    
    <Router>
    <div className="App">

        <Switch>

          <Route exact path="/" component={Home} />
        
          <Route path="/pagInicial" component={pagInicial}/>
        
        </Switch>
            
    </div>
    </Router>
    
    
    );
  }
  
  
  export default App;
  