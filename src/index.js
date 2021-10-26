import React from "react";
import ReactDOM from "react-dom";


import Application from "./components/Application";
import { ContextProvider } from "./SocketContext";

import "./index.scss";

ReactDOM.render(
 <ContextProvider>    
  <Application />, document.getElementById("root")
</ContextProvider>

);