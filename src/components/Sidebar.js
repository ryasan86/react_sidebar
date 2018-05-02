import React, { Component } from 'react';
import { routes } from './../routes';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        {routes.map((route, index) => (
          <SidebarItem key={index} route={route} />
        ))}
      </div>
    );
  }
}
