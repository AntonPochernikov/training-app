import { createAction } from 'redux-actions';

export const changeEmail = createAction('EMAIL/CHANGE');
export const changePassword = createAction('PASSWORD/CHANGE');
export const loginSuccess = createAction('USER/LOGIN/SUCCESS');
