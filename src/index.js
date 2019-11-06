import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import thunk from "redux-thunk";

import reducers from "./reducers";
import App from "./App";
import logMiddleware from "./middleware/log";

const LOCALE = "fr";
const messages = {
  en: {
    title: "JoliCat 🇬🇧"
  },
  fr: {
    title: "JoliChat 🇫🇷"
  }
};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, logMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale={LOCALE} messages={messages[LOCALE]}>
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
