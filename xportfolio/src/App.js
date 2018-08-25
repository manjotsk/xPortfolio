import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";
import MainRouter from './modules/MainRouter';
import Header from "./components/Header";
import Main from './components/Main';
import Home from "./components/Home";

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      superhero : "Batman",
      previousSuperhero:"Spiderman"
    }
  }
  render() {
    return (
    <BrowserRouter>
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Header' component={Header}></Route>
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
