import React from "react";
import { useSelector } from "react-redux";
import MessageItem from "./MessageItem";

const MessageList = () => {
  const messages = useSelector(state => {
    return state.messagesReducer.messages;
  });

  return (
    <>
      <ul style={{ borderColor: "grey", padding: 10, listStyle: "none" }}>
        {messages.map((message, index) => {
          return (
            <MessageItem
              key={index}
              index={index}
              message={message.message}
              username={message.username}
            />
          );
        })}
      </ul>
      {messages.length === 0 && <span>Aucun message</span>}
    </>
  );
};

export default MessageList;
