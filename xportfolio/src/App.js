import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      <div className="App">
        <header className="App-header">
        <p> we need {this.state.superhero} </p>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.props.title}</h1>
        </header>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <p className="App-intro">
    
        {this.props.name?
          "your name is "+this.props.name:''}
        </p>
        <p> we need {this.state.superhero} </p>
        <p> we need {this.state.superhero} </p>
        <p> we need {this.state.superhero} </p>

        <button onClick={
          ()=>{
            this.setState({
              previousSuperhero:this.state.superhero,
              superhero:this.state.previousSuperhero
            })
          }
        }>Change my hero
        </button>
      </div>
    );
  }
}

export default App;
