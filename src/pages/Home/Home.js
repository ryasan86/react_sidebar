import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Home.css';
import { changeTheme } from './../../actions';

const themes = ['red', 'blue', 'dark'];

class HomePage extends Component {
  handleSelectTheme(theme) {
    this.props.changeTheme(theme);
  }

  render() {
    return (
      <div className="palette-choices">
        {themes.map((theme, index) => {
          return (
            <div
              key={index}
              className={`palette ${theme}`}
              onClick={() => this.handleSelectTheme(theme)}
            />
          );
        })}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeTheme }, dispatch);
};

export default connect(null, mapDispatchToProps)(HomePage);
