import React, { Component } from 'react';
import { routes } from './../routes';
import SidebarTop from './SidebarTop';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <div className="sidebar-nav">
          <SidebarTop />
          {routes.map((route, index) => (
            <SidebarItem
              key={index}
              route={route}
              toggleSidebar={this.props.toggleSidebar}
            />
          ))}
        </div>
      </div>
    );
  }
}
