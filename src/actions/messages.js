import axios from "axios";

export const ADD_MESSAGE_TYPE = "ADD_MESSAGE";
export const DELETE_MESSAGE_TYPE = "DELETE_MESSAGE";
export const TOGGLE_BOOKMARK_MESSAGE_TYPE = "TOGGLE_BOOKMARK_MESSAGE";

export const LOAD_MESSAGES_PENDING_TYPE = "LOAD_MESSAGES_PENDING";
export const LOAD_MESSAGES_SUCCESS_TYPE = "LOAD_MESSAGES_SUCCESS";
export const LOAD_MESSAGES_ERROR_TYPE = "LOAD_MESSAGES_ERROR";

const API_ENDPOINT =
  "https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages";

export const loadMessages = () => {
  return dispatch => {
    dispatch({ type: LOAD_MESSAGES_PENDING_TYPE });

    axios
      .get(API_ENDPOINT)
      .then(response => {
        dispatch({
          type: LOAD_MESSAGES_SUCCESS_TYPE,
          messages: response.data
        });
      })
      .catch(e => {
        dispatch({ type: LOAD_MESSAGES_ERROR_TYPE });
      });
  };
};

export const addMessage = (message, username) => {
  return {
    type: ADD_MESSAGE_TYPE,
    message: message,
    username: username
  };
};

export const deleteMessage = index => {
  return {
    type: DELETE_MESSAGE_TYPE,
    index: index
  };
};

export const toggleBookmarkMessage = index => {
  return {
    type: TOGGLE_BOOKMARK_MESSAGE_TYPE,
    index: index
  };
};
