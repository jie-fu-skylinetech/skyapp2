import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import App Custom Styles
//import AppStyles from './css/app.scss'
//import './css/_logo.scss';

import {
  Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
  List, ListItem, Views, NavLeft, Link, NavCenter, NavRight,  Button, Popup,
  LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, FormInput, Subnavbar, ButtonsSegmented,
  Tab, AccordionContent, onOpen, onOpened, onClose, onClosed
} from 'framework7-react';
import MainViews from './pages/MainViews';

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
      <Framework7App themeType="material" >
      {
        /*
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
        */
      }
      <Statusbar />
      <MainViews props/>
      </Framework7App>
    );
  }
}

export default App;
