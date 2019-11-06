import {
  UPDATE_CHAT_COLOR_TYPE,
  UPDATE_USERNAME_TYPE
} from "../actions/settings";

const INITIAL_STATE = {
  chatColor: "#A2DED0",
  username: null
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_CHAT_COLOR_TYPE:
      return {
        ...state,
        chatColor: action.color
      };
    case UPDATE_USERNAME_TYPE:
      return {
        ...state,
        username: action.username
      };
    default:
      return state;
  }
};

export default settingsReducer;
