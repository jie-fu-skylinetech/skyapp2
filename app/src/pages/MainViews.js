import React, { Component } from 'react';

import {
  Framework7App, Statusbar, Panel, View, Navbar, Pages, Page, ContentBlock, ContentBlockTitle,
  List, ListItem, Views, NavLeft, Link, NavCenter, NavRight, Button, Popup,
  LoginScreen, LoginScreenTitle, ListButton, ListLabel, FormLabel, Subnavbar, ButtonsSegmented,
  Tab, AccordionContent, onOpen, onOpened, onClose, onClosed
} from 'framework7-react';
import AppLogo from '../components/app-logo'
import FormInput from '../components/form-input'
import '../css/_global.css';
import '../css/_page.css';
import '../css/_navbar.css';
import '../css/_form.css';
const FormData = require('form-data');

class MainViews extends View {
  constructor(props, context) {
    super(props, context);
    this.state = { response: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(form);
    const form = event.target;
    for (let element of form.elements) {
      data.append(element.name, element.value)
      console.log(element.name)
    }
    console.log(data)
    fetch('/api/isWellKnownUser', {
      method: 'POST',
      body: data
    })
      .then(function (response) {
        return response.json()
      })
      .then(json => {
        let rv = json;
        this.setState({ response: json })
        console.log(rv.isWellKnownUser)
      }
      );
  }
  render() {
    let rv = this.state.response
    return (
      <Views>
        <View id="login" >
          <Navbar title="Loan options" back-link="Back" sliding></Navbar>
          <ContentBlock>
            <AppLogo width="128"></AppLogo>
          </ContentBlock>
          <div className="k-login-form">
            <h1>Secure login</h1>
            <p>
              Easy Loan is part of Smart Loan Platform (Delivered with Block-chain technology).
        If you previously logged into Smart Loan Platform,
        Please enter the email address and password associated with your savings account.
            </p>
            <p>
              For existing Easy Loan lending customers, our login process has changed.
        Please enter the email address associated with your account.
        If you have not yet done so, you will be prompted to create a password.
            </p>
            <form onSubmit={this.handleSubmit}>
              <input name='xx' type='text' value='xxx'/>
              <FormInput klabel="Email"></FormInput>
              <button className="k-btn" >Continue</button>
              <label>Server return: isWellKnownUser: {rv.isWellKnownUser}</label>
            </form>
          </div>
        </View>
      </Views>
    )
  }
}

export default MainViews;