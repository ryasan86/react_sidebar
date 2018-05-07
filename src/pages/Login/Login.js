import React, { Component } from 'react';
import './Login.css';

export default class LoginPage extends Component {
  render() {
    console.log(this.props.theme)
    return (
      <div className={`login-form ${this.props.theme}`}>
        <div className="login-inner">
          <div className="field">
            <label>Username</label>
            <input />
          </div>
          <div className="field">
            <label>Password</label>
            <input />
          </div>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
