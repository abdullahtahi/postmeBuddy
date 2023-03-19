import { combineReducers } from "@reduxjs/toolkit";
import PostReducer from "./Reducers/PostReducer";
import SingleUser from "./Reducers/SingleUser";
import UserReducer from "./Reducers/UserReducer";
const rootReducer = combineReducers({
  Post: PostReducer,
  user: UserReducer,
  singleUser: SingleUser,
});
export default rootReducer;
