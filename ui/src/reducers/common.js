import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as action from '../actions';

const modal = handleActions({
  [action.showModal]: (state, { payload: { name } }) => name,
  [action.hideModal]: () => null,
}, null);

export default combineReducers({
  modal,
});
