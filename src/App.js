import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { routes } from './routes';
import Sidebar from './components/Sidebar';
import BurgerNav from './components/BurgerNav';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <BurgerNav toggleSidebar={this.toggleSidebar} />
          <div
            className={this.state.isOpen ? 'wrapper toggled' : 'wrapper'}
          >
            <Sidebar isOpen={this.state.isOpen} />
            <div className="content">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    component={route.component}
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
