import { fbAuth, database, helpersRef } from "../config/firebase";
import {
  AUTH_WATCH,
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "./types";

export const authWatch = () => async dispatch => {
  fbAuth.onAuthStateChanged(user => {
    if (user) {
      database.ref(`/helpers/${user.uid}/isHelper`).on(
        "value",
        snapshot => {
          const isHelper = snapshot.val() ? true : false;

          dispatch({
            type: AUTH_WATCH,
            payload: user ? { user, isHelper } : {}
          });
        },
        err => console.log(err)
      );
    } else {
      dispatch({
        type: AUTH_WATCH,
        payload: {}
      });
    }
  });
};

export const userLogin = (email, pw) => dispatch => {
  console.log("userLogin in authActions");
  fbAuth
    .signInWithEmailAndPassword(email, pw)
    .then(user => {
      /**
       * @todo Need to check authorization
       */

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
    console.log("user logout");
    return dispatch({
      type: USER_LOGOUT,
      payload: "logout"
    });
  });
};
