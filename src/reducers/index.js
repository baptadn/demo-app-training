import { combineReducers } from "redux";

import messagesReducer from "./messages";
import settingsReducer from "./settings";

const reducers = combineReducers({
  messagesReducer: messagesReducer,
  settingsReducer: settingsReducer
});

export default reducers;
