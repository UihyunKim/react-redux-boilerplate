import { database } from "../config/firebase";
import { DB_ACTIVITY_LV4 } from "./types";

export const dbActivityLv4 = () => async dispatch => {
  console.log("dbActivityLv4");
  database
    .ref("users")
    .orderByChild("id")
    .equalTo("quiz104")
    .on(
      "value",
      snapshot => {
        console.log(snapshot.val());
      },
      err => {
        console.log(err);
      }
    );

  // database
  //   .ref("/users")
  //   .orderByChild("activity/id")
  //   .equalTo("quiz104")
  //   .on("value", snapshot => {
  //     dispatch({
  //       type: DB_ACTIVITY_LV4,
  //       payload: snapshot.val()
  //     });
  //   });
};
