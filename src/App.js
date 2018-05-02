import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { routes } from './routes';
import Sidebar from './components/Sidebar';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Sidebar />
          <div className="content">
            <Switch>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} component={route.component} />
              ))}
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
