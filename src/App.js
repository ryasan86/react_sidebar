import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { connect } from 'react-redux';
import { routes } from './routes';
import Sidebar from './components/Sidebar/Sidebar';
import BurgerNav from './components/BurgerNav/BurgerNav';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.handleToggleSidebar = this.handleToggleSidebar.bind(this);
  }

  handleToggleSidebar() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <BrowserRouter>
        <div>
          <BurgerNav onToggleSidebar={this.handleToggleSidebar} />
          <div className={isOpen ? `wrapper toggled` : 'wrapper'}>
            <Sidebar
              isOpen={isOpen}
              onToggleSidebar={this.handleToggleSidebar}
            />
            <div className="content-wrapper">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    render={props => (
                      <route.component {...props} theme={this.props.theme} />
                    )}
                  />
                ))}
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme
  };
};

export default connect(mapStateToProps)(App);
