import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import logo from "./logo.svg";
import Home from "./components/Home";

import ApplicantInfo from "./components/ApplicantInfo";

import LoanOptions from "./components/LoanOptions";
import "./App.css";
import {
  Button,
  Container,
  Dropdown,
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

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleForm = this.handleForm.bind(this);
    this.setState = this.setState.bind(this);
  }
  // static contextTypes = {
  //   router: React.PropTypes.object
  // };
  handleForm(event) {
    Link.event.preventDefault();
    let form = new FormData(event.target);
    let data = {};
    for (let pair of form.entries()) {
      let key = pair[0];
      let value = pair[1];
      data[key] = value;
    }
    this.setState(data, () => {
      console.log("this.state: " + this.state);
    });
    //this.context.router.push(event.target.action)
    console.log("Current location:");
    console.log(this.props.location);
  }
  render() {
    return (
      <Router>
        <div>
          <Container text style={{ marginTop: "1em" }}>
            <Container text>
              <Header textAlign="center">Easy Loan</Header>
              <Menu>
                <Menu.Item as={Link} to="/">
                  <img src="static/imgs/logo.jpg" />
                </Menu.Item>
                {/* <Dropdown icon="list layout" float="right">
                  <Dropdown.Menu>
                    <Dropdown.Item text="Applicant Info" />
                    <Dropdown.Item text="Loan Options" />
                  </Dropdown.Menu>
                </Dropdown> */}

                <Menu.Item as={Link} to="/applicantInfo">
                  <Button>Application</Button>
                </Menu.Item>
                <Menu.Item as={Link} to="/loanOptions">
                  <Button>Loan Options</Button>
                </Menu.Item>
              </Menu>
              <Route path="/" exact component={Home} />
              <Route path="/applicantInfo" exact component={ApplicantInfo} />
              <Route path="/loanOptions" component={LoanOptions} />
            </Container>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
