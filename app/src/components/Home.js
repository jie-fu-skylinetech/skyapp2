import React, { Component } from "react";
import  {Link} from "react-router-dom"
import { Input } from "semantic-ui-react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Form,
  Table
} from "semantic-ui-react";

const Home = (props, context) => (
  <div>
    <h2>Secure Login</h2>

    <h4>
      <p>Easy Loan is part of Smart Loan Platform (...)</p>
      <p>For existing Easy Loan lending customers,...</p>
    </h4>
    <Button fluid color="blue"  as={Link} to='/applicantInfo'>
      Continue
    </Button>
  </div>
);
export default Home;
