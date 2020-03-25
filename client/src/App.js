import React from 'react';
import './App.css';
import calendar from './components/Calendar/calendar'
import { Switch, Route } from 'react-router-dom';
import NavbarComp  from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
       <Switch>
      <Route path ="/calendar" component={calendar}>
        </Route>
        <Route path ="/home" component={Home}>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
