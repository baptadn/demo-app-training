import React from "react";
import { useSelector } from "react-redux";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";
import { FormattedMessage } from "react-intl";
import { useIdle } from "react-use";

const chatStyle = {
  borderRadius: 10,
  fontFamily: "Montserrat",
  width: 400,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  transition: "background-color 0.5s ease"
};

const Chat = () => {
  const isAfk = useIdle(5000);

  const color = useSelector(state => state.settingsReducer.chatColor);
  const isPending = useSelector(state => state.messagesReducer.isPending);

  return (
    <div style={{ ...chatStyle, backgroundColor: color }}>
      <div style={{ paddingLeft: 10, paddingTop: 10, fontSize: 30 }}>
        <span role="img" aria-label="langue">
          👅
        </span>{" "}
        <FormattedMessage id="title" />
      </div>
      {isAfk && <div>Êtes-vous toujours là ? </div>}
      {isPending ? (
        <div>Chargement…</div>
      ) : (
        <>
          <MessageList />
          <MessageBar />
        </>
      )}
    </div>
  );
};

export default Chat;
