import authReducer from "./Auth";
import { combineReducers } from "redux";

const appReducers = combineReducers({
  authReducer,
});

export default appReducers;
