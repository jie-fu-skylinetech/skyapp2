import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  isWellKnownUser(){
    fetch('/api/isWellKnownUser')
    .then(data=>{console.log(data) })
    .catch(err=>{console.log(err)})
  }
  registerUnknownUser(){
    fetch('/api/registerUnknownUser')
    .then((data)=>{console.log(data) })
    .catch((err)=>{console.log(err)})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">
          <button onClick={this.isWellKnownUser}>Call isWellKnownUser</button>
        </p>
        <p className="App-intro">
          <button onClick={this.registerUnknownUser}>Call registerUnknownUser</button>
        </p>
        
          
      </div>
    );
  }
}

export default App;
