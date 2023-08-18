import authReducer from "./Auth";
import { combineReducers } from "redux";
import platformSelected from "./Platform";

const appReducers = combineReducers({
  authReducer,
  platformSelected,
});

export default appReducers;
