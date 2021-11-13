import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./conponents/App/App";
import AppProvider from "./conponents/AppProvider/AppProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
