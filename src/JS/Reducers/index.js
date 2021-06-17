import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import additionReducer from "./additionReducer";
const rootReducer = combineReducers({
  counterReducer: counterReducer,
  additionReducer: additionReducer,
});

export default rootReducer;
