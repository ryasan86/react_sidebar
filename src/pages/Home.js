import React, { Component } from 'react';
import './Home.css';

export default class HomePage extends Component {
  render() {
    return (
      <div className="palette-choices">
        <div className="palette blue" />
        <div className="palette red" />
        <div className="palette dark" />
      </div>
    );
  }
}
