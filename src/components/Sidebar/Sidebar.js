import React, { Component } from 'react';
import { routes } from './../../routes';
import { connect } from 'react-redux';
import SidebarTop from './../SidebarTop/SidebarTop';
import SidebarItem from './../SidebarItem/SidebarItem';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const sidebarItems = routes
      .filter(route => route.name)
      .map((route, index) => {
        if (route.name) {
          return (
            <SidebarItem
              key={index}
              route={route}
              onToggleSidebar={this.props.onToggleSidebar}
            />
          );
        }
      });

    return (
      <div className={`sidebar-wrapper ${this.props.theme}`}>
        <div className={`sidebar-nav ${this.props.theme}`}>
          <SidebarTop />
          {sidebarItems}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(Sidebar);
