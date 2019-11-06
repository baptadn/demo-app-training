import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUsername } from "../actions/settings";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");

  const handleOnChange = e => {
    setUsername(e.target.value);
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    if (username) {
      // dispatch action
      dispatch(updateUsername(username));
      // redirect user
      history.push("/chat");
    }
  };

  return (
    <form onSubmit={handleOnSubmit}>
      Mon nom :
      <input required onChange={handleOnChange} value={username} type="text" />
      <button type="submit">Connexion</button>
    </form>
  );
};

export default LoginForm;
