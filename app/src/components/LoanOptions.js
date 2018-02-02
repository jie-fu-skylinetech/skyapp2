
import React, { Component } from "react";

const LoanOptions = (props) => (
  <div >
    <p>Loan Options</p>
    <form action="" onSubmit={props.handleForm}>
      <p>
        First Name: {props.firstName}
        Last Name: {props.lastName}
      </p>
        <ul>
          <li>Bank of America, 3%, 2yr</li>
          <li>HSBC, 2.75%, 2yr</li>
          <li>GS, 3.25%, 2yr</li>
        </ul>
    </form>
  </div>
);

export default LoanOptions;
