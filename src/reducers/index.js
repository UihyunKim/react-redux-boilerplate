import { combineReducers } from "redux";
import postReducer from "./postReducer";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";
import dbReducer from "./dbReducer";

export default combineReducers({
  posts: postReducer,
  todo: todoReducer,
  auth: authReducer,
  db: dbReducer
});
