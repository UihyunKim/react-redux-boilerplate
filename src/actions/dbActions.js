import { database } from "../config/firebase";
import { DB_USERS_WATCH, DB_UPDATE_FEEDBACK_LV4 } from "./types";

export const dbUsersWatch = () => async dispatch => {
  console.log("DBACTIONS::DB_USERS_WATCH");
  database.ref("users").on(
    "value",
    snapshot => {
      dispatch({
        type: DB_USERS_WATCH,
        users: snapshot.val()
      });
    },
    err => {
      console.log(err);
    }
  );
};

export const dbUpdateFeedbackLv4 = () => async dispatch => {
  console.log("DBACTIONS::DB_UPDATE_FEEDBACK_LV4");
  // database.ref("users").on(
  //   "value",
  //   snapshot => {
  //     dispatch({
  //       type: DB_USERS_WATCH,
  //       users: snapshot.val()
  //     });
  //   },
  //   err => {
  //     console.log(err);
  //   }
  // );
};
