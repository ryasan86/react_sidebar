import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './SidebarItem.css';

class SidebarItem extends Component {
  render() {
    const { route, theme } = this.props;
    return (
      <Link
        to={route.path}
        onClick={this.props.onToggleSidebar}
        className={`sidebar-item ${theme}`}
      >
        {route.name}
      </Link>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(SidebarItem);
