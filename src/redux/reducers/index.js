import authReducer from "./Auth";
import { combineReducers } from "redux";
import platformSelected from "./Platform";
import getAllPuzlles from "./Puzzles";

const appReducers = combineReducers({
  authReducer,
  platformSelected,
  getAllPuzlles,
});

export default appReducers;
