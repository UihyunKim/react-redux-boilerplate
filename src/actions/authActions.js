import { fbAuth } from "../config/firebase";
import {
  AUTH_WATCH,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "./types";

export const authWatch = () => async dispatch => {
  console.log("authWatch in authActions");
  fbAuth.onAuthStateChanged(user => {
    console.log(user);
    dispatch({
      type: AUTH_WATCH,
      payload: user ? "login" : "logout"
    });
  });
};

export const userLogin = (email, pw) => dispatch => {
  console.log("userLogin in authActions");
  fbAuth
    .signInWithEmailAndPassword(email, pw)
    .then(user => {
      return dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
      });
    })
    .catch(error => {
      console.log(error);
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error
      });
    });
};

export const userLogout = () => dispatch => {
  fbAuth.signOut().then(() => {
    return dispatch({
      type: USER_LOGOUT,
      payload: "logout"
    });
  });
};
