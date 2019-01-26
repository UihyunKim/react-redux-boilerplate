import { DB_ACTIVITY_LV4 } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case DB_ACTIVITY_LV4:
      return action.payload;
    default:
      return state;
  }
};
