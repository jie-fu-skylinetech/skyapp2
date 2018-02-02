import React, { Component } from "react";
import { Link } from "react-router-dom";
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

const ApplicantInfo = (props, context) => (
  <div>
    <h2>Let's get started</h2>

    <h4>
      Tell us about yourself to see personalized loan options. This will not
      affect your credit score.
    </h4>
    <p />
    <Form onSubmit={props.handleForm} action="/loanOptions">
      <Form.Field>
        <input type="text" name="firstName" placeholder="First Name" />
      </Form.Field>
      <Form.Field>
        <input type="text" name="lastName" placeholder="Last Name" />
      </Form.Field>
      <Form.Field>
        <input type="text" name="email" placeholder="Email Address" />
      </Form.Field>
      <Form.Field>
        <input
          type="text"
          name="dob"
          placeholder="Date of birth (MM/DD/YYYY)"
        />
      </Form.Field>
      <Form.Field>
        <input type="text" placeholder="SSN" />
      </Form.Field>
      <Form.Field>
        <input type="text" name="addressLine1" placeholder="Address" />
      </Form.Field>
      <Form.Field>
        <input type="text" name="addressLine2" placeholder="Address" />
      </Form.Field>
      <Form.Field>
        <input type="text" name="city" placeholder="City" />
      </Form.Field>
      <Form.Field>
        <input type="text" name="state" placeholder="State" />
      </Form.Field>
      <Form.Field>
        <input type="text" name="annualIncome" placeholder="Annual Income" />
      </Form.Field>
      <Form.Field>
        <input
          type="text"
          name="monthlyPayment"
          placeholder="Monthly payment"
        />
      </Form.Field>
      <Form.Field>
      {/* as={Link} to="/loanOptions" */}
        <Button fluid color="blue" >
          Continue
        </Button>
      </Form.Field>
    </Form>
  </div>
);

export default ApplicantInfo;
