import React from 'react';
import {HashRouter,Route} from "react-router-dom";
import './App.scss';
import Home from './routes/Home';
import About from './routes/About'

function App() {
  return (
    <HashRouter>
      <Route path= "/" exact = "true" component = {Home}/>
      <Route path= "/about"  component = {About}/>
    </HashRouter>  );
}

export default App;
