import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MainRouter from './MainRouter.js';

import store from '../store/store.js';

import './App.css';

render(
  <Provider store={store}>
    <MainRouter />
  </Provider>,
  document.getElementById('root'),
);
