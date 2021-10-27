import React from "react";
import ReactDOM from "react-dom";


import Application from "./components/Application";
import { ContextProvider } from "./components/SocketContext";

import "./index.scss";

ReactDOM.render(
  <ContextProvider>    
    <Application />
  </ContextProvider>, 
  document.getElementById("root")
  );