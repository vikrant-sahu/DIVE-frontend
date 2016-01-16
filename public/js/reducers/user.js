import { LOAD } from 'redux-storage';

import {
  CREATE_ANONYMOUS_USER,
  SET_USER_EMAIL,
  SUBMIT_USER
} from '../constants/ActionTypes';

export default function user(state = {
  isFetching: false,
  loaded: false,
  properties: {}
}, action) {
  switch (action.type) {
    case LOAD:
      if (action.payload.user) {
        return { ...action.payload.user, loaded: true };
      }
      return { ...state, loaded: true };
    case CREATE_ANONYMOUS_USER:
      return { ...state, properties: action.userProperties };
    case SET_USER_EMAIL:
      return { ...state, properties: { ...state.properties, email: action.email } };
    case SUBMIT_USER:
      return { ...state, properties: { ...state.properties, submitted: true } };
    default:
      return state;
  }
}