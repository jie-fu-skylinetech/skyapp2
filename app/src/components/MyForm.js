import React, { Component } from 'react';

class MyForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log(data.keys)
        for (let entry of data.entries()){
            console.log(entry)
        }
        // for (let datakey of data.keys()) {
        //     console.log(datakey)
        // }

        fetch('/api/isWellKnownUser', {
            method: 'POST',
            body: data,
        });
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