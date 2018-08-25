import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from "../components/Home";
import App from "../App";

export default class MainRouter extends Component {
  render() {
    return (
     <BrowserRouter>
        <App/>

     </BrowserRouter>
    )
  }
}
