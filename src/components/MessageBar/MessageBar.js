import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "./elements";
import { addMessage } from "../../actions/messages";
import { updateChatColor } from "../../actions/settings";
import { GithubPicker } from "react-color";

const MessageBar = () => {
  const dispatch = useDispatch();

  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  const username = useSelector(state => state.settingsReducer.username);

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(addMessage(message, username));
    setMessage("");
  };

  const handleChangeColor = color => {
    dispatch(updateChatColor(color.hex));
    setShowPicker(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", padding: 10 }}>
        <Input
          value={message}
          onChange={e => {
            setMessage(e.target.value);
          }}
          placeholder="Votre message"
          type="text"
        />
        <br />
        <Button type="submit">Envoyer</Button>
      </form>
      <span onClick={() => setShowPicker(!showPicker)}>Change color</span>
      {showPicker && <GithubPicker onChangeComplete={handleChangeColor} />}
    </>
  );
};

export default MessageBar;
