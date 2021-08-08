import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App.jsx";
import { TrackContextProvider } from "./TrackContext.jsx";

ReactDOM.render(
  <TrackContextProvider>
    <App />
  </TrackContextProvider>
  , document.getElementById("app"));
