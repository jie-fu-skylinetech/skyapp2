import React, { Component } from 'react';
import '../css/_global.css';
import '../css/_logo.css';


const AppLogo = (props, context) => {
    return (
        <div className="k-logo">
            <img src="static/imgs/logo.JPG" />
            <div className="k-register-link">
                <div className="k-help-text">Don't have an account?</div>
                <div className="k-reg-text">
                    <a href="javascript: void(0);">Get started</a>
                </div>
            </div>
        </div>
    );
}
export default AppLogo
