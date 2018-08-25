import React, { Component } from 'react'
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Home from './Home';
import App from '../App';

export default class Main extends Component {
  render() {
    return (
    //   <div>
    //         <p className="App-intro">
    //         To get started, edit <code>src/App.js</code> and save to reload.
    //         </p>
    //   </div>
    <Switch>
        <Route path='/' component={Home}></Route>
        <Route path='/App' component={App}></Route>
    </Switch>
    )
  }
}
