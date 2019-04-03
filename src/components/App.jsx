import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../store/store.js';
import './App.css';

render(
  <Provider store={store}>
    <div>TODO: router component</div>
  </Provider>,
  document.getElementById('root'),
);
