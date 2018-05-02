import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const RenderApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(RenderApp, document.getElementById('root'));
registerServiceWorker();
