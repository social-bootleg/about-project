import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import glowna from './components/strony/glowna';
import Artykuly from './components/strony/Artykuly'
import Ksiazki from './components/strony/Ksiazki';
import Omnie from './components/strony/Omnie';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/stronaglowna' exact component={glowna}/>
        <Route path='/artykuly' exact component={Artykuly}/>
        <Route path='/ksiazki' exact component={Ksiazki}/>
        <Route path='/omnie' exact component={Omnie}/>
      </Switch>
      <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
