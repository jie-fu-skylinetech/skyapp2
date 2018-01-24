import React, { Component } from 'react';
import axios from 'axios'

class MyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let form = new FormData(event.target)
        let data = {};
        for (let entry of form.entries()){
            data[entry[0]] = entry[1]
        }
        console.log(JSON.stringify(data))
        axios.post('/api/isWellKnownUser', data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                <label htmlFor="username">Enter username</label>
                <input id="username" name="username" type="text" />
                </p>
                <p>
                <label htmlFor="email">Enter your email</label>
                <input id="email" name="email" type="email" />
                </p>
                <p>
                <label htmlFor="birthdate">Enter your birth date</label>
                <input id="birthdate" name="birthdate" type="text" />
                </p>
                <button>Send data!</button>
            </form>
        );
    }
}

export default MyForm;
