import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />                    {/* 1stcomponent Header.js is  rendering in App.js */}
        <Switch>
          <Route path="/detail">      
            <Detail />                {/* 6thcomponent Detail.js  rendering in App.js when path changes by user,it redirected from Movies Component*/}
          </Route>
          <Route path="/">
            <Home />                  {/* 2ndcomponent Home.js  rendering in App.js */}             
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
