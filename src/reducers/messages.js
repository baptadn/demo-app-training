import {
  ADD_MESSAGE_TYPE,
  DELETE_MESSAGE_TYPE,
  TOGGLE_BOOKMARK_MESSAGE_TYPE,
  LOAD_MESSAGES_PENDING_TYPE,
  LOAD_MESSAGES_SUCCESS_TYPE,
  LOAD_MESSAGES_ERROR_TYPE
} from "../actions/messages";

const INITIAL_STATE = {
  messages: [],
  bookmarkedIndexes: [],
  isPending: false,
  hasError: false
};

const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE_TYPE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            message: action.message,
            username: action.username
          }
        ]
      };
    case DELETE_MESSAGE_TYPE:
      return {
        ...state,
        messages: state.messages.filter((message, index) => {
          return index !== action.index;
        })
      };
    case TOGGLE_BOOKMARK_MESSAGE_TYPE:
      // unbookmark
      if (state.bookmarkedIndexes.includes(action.index)) {
        return {
          ...state,
          bookmarkedIndexes: state.bookmarkedIndexes.filter(
            index => index !== action.index
          )
        };
        // bookmark
      } else {
        return {
          ...state,
          bookmarkedIndexes: state.bookmarkedIndexes.concat(action.index)
        };
      }
    case LOAD_MESSAGES_PENDING_TYPE:
      return {
        ...state,
        hasError: false,
        isPending: true
      };
    case LOAD_MESSAGES_SUCCESS_TYPE:
      return {
        ...state,
        isPending: false,
        hasError: false,
        messages: action.messages
      };
    case LOAD_MESSAGES_ERROR_TYPE:
      return {
        ...state,
        hasError: true
      };
    default:
      return state;
  }
};

export default messagesReducer;
