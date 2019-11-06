import React from "react";
import PropTypes from "prop-types";
import { Twemoji } from "react-emoji-render";
import { useDispatch, useSelector } from "react-redux";
import { deleteMessage, toggleBookmarkMessage } from "../actions/messages";

const MessageItem = props => {
  const { username, message } = props;
  const dispatch = useDispatch();

  const bookmarkedIndexes = useSelector(
    state => state.messagesReducer.bookmarkedIndexes
  );

  const isBookmark = bookmarkedIndexes.includes(props.index);

  const handleBookmark = () => {
    dispatch(toggleBookmarkMessage(props.index));
  };

  const handleRemove = () => {
    dispatch(deleteMessage(props.index));
  };

  const readMessage = () => {};

  return (
    <li
      style={{
        marginBottom: 10,
        backgroundColor: isBookmark ? "yellow" : "white",
        padding: 10,
        borderRadius: 10
      }}
    >
      <small>
        @{username} <button onClick={handleRemove}>x</button>{" "}
        <button onClick={handleBookmark}>b</button>
        <button onClick={readMessage}>voice</button>
      </small>
      <div>
        <Twemoji text={message} />
      </div>
    </li>
  );
};

MessageItem.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default MessageItem;
