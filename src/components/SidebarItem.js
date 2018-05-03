import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SidebarItem.css';

export default class SidebarItem extends Component {
  render() {
    const { route } = this.props;
    return (
      <div className="sidebar-item">
        <Link to={route.path} onClick={this.props.toggleSidebar}>{route.name}</Link>
      </div>
    );
  }
}
