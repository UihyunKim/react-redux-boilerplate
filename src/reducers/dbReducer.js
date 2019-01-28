import produce from "immer";
import { DB_USERS_WATCH } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case DB_USERS_WATCH:
        draft.users = action.users;
    }
  });
};
