import React, { Component } from 'react';
import './BurgerNav.css';

export default class BurgerNav extends Component {
  render() {
    return (
      <div className="burger-nav">
        <i className="fas fa-bars fa-lg" onClick={this.props.toggleSidebar} />
      </div>
    );
  }
}
