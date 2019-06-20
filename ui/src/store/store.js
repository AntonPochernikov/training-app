import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { reducer as form } from 'redux-form';
import app from '../reducers/root.js';

const reducers = combineReducers({ app, form });
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loadState = () => {
  try {
    const serialisedState = localStorage.getItem('app_state');

    if (!serialisedState) return undefined;

    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const oldState = loadState();

const store = createStore(
  reducers,
  oldState,
  composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
  localStorage.setItem('app_state', JSON.stringify(store.getState()));
});

export default store;
