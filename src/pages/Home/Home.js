import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Home.css';
import { changeTheme } from './../../actions';

const appThemes = ['red', 'blue', 'dark'];

class HomePage extends Component {
  handleSelectTheme(theme) {
    this.props.changeTheme(theme);
  }

  render() {
    const themes = appThemes.map((theme, index) => {
      return (
        <div
          key={index}
          className={`palette ${theme}`}
          onClick={() => this.handleSelectTheme(theme)}
        />
      );
    });

    return <div className="palette-choices">{themes}</div>;
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ changeTheme }, dispatch);
};

export default connect(null, mapDispatchToProps)(HomePage);
