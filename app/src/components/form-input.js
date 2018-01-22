import React, { Component } from 'react';
import '../css/_global.css';
import '../css/_form.css';


class FormInput extends Component {
    constructor(props, context){
        super(props, context);
    }
    render() {
        let klabel = this.props.klabel;
        return (<div className="k-form-element">
        
            <label className="k-label">{klabel}</label>
            <div className="k-input-container">
                <input name={klabel} type="text" className="k-input-text" v-model="value" />
                <span className="k-placeholder"></span>
            </div>
            <div className="k-help-text">

            </div>
        </div>
        );

    }
}
export default FormInput;
