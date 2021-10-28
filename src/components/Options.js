import { Children, Fragment, useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "./SocketContext";
import Timer from "./Timer";

export default function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [timeLeft, setTimeLeft] = useState(1000);
  const [extension, setExtension] = useState(false);
  const [extensionCount, setExtensionCount] = useState(0);
  const extend = function () {
    setExtension(true);
  }

  // calls yourself for now
  const [idToCall, setIdToCall] = useState(me);

  const handleClick = (event, idToCall) => {
    console.log('idToCall', idToCall);
    event.preventDefault();
    callUser(idToCall)
  }

  return (
    <Fragment>
      <form noValidate autoComplete="off">
        {callAccepted && !callEnded ? (
          <Fragment>
            <p>Enjoy your call!</p>
            <Timer endCall={leaveCall} />
          </Fragment>
        ) : (
          <button onClick={(event) => handleClick(event, idToCall)}> Start Chatting!</button>
        )}
      </form>
      {children}
    </Fragment>
  )
}