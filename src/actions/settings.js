export const UPDATE_CHAT_COLOR_TYPE = "UPDATE_CHAT_COLOR";
export const UPDATE_USERNAME_TYPE = "UPDATE_USERNAME";

export const updateChatColor = color => {
  return {
    type: UPDATE_CHAT_COLOR_TYPE,
    color: color
  };
};

export const updateUsername = username => {
  return {
    type: UPDATE_USERNAME_TYPE,
    username: username
  };
};
