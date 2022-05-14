import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducers from "./reducers";
import { composeWithDevTools } from "@redux-devtools/extension";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
