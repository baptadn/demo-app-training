import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadMessages } from "./actions/messages";
import Router from "./containers/Router";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessages());
  }, [dispatch]);

  return <Router />;
};

export default App;
