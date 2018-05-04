import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';
import './SidebarTop.css';

export default class SidebarTop extends Component {
  render() {
    return (
      <div className="sidebar-top">
        <img src={logo} className="logo" alt="logo" />
      </div>
    );
  }
}
