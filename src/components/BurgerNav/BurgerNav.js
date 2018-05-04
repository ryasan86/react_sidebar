import React, { Component } from 'react';
import { connect } from 'react-redux';
import './BurgerNav.css';

class BurgerNav extends Component {
  render() {
    return (
      <div className={`burger-nav ${this.props.theme}`}>
        <i className="fas fa-bars fa-lg" onClick={this.props.onToggleSidebar} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(BurgerNav);
