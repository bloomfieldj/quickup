import React, { Fragment, useContext } from "react";
import { SocketContext } from "./SocketContext";

import { ContextProvider } from "./SocketContext"
import Options from "./Options"
import Notifications from "./Notifications"
import Video from "./Video"

export default function Peer(props) {
  return (
    <Fragment>
      <ContextProvider>
        <Video />
        <Options>
          <Notifications />
        </Options>
      </ContextProvider>
    </Fragment>

  )
}