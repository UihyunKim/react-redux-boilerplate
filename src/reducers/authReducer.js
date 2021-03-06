import {
  AUTH_WATCH,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_WATCH:
      return action.payload;
    case USER_LOGIN:
      return action.payload;
    case USER_LOGIN_SUCCESS:
      return action.payload;
    case USER_LOGIN_FAIL:
      return action.payload;
    case USER_LOGOUT:
      return action.payload;
    default:
      return state;
  }
};
