import { Children, Fragment, useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "./SocketContext";
import Timer from "./Timer";

export default function Options({ children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  // calls yourself for now
  const [idToCall, setIdToCall] = useState(me);


  const handleClick = (event, idToCall) => {
    console.log('idToCall', idToCall);
    event.preventDefault();
    callUser(idToCall)
  }

  return (
    <>
      <div>
        <form>
          {/* <input label="name" value={name} onChange={event => setName(event.target.value)} /> */}
          {/* <CopyToClipboard text={me}>
            <button onClick={(event) => event.preventDefault()}>Copy Personal Chat ID</button>
          </CopyToClipboard> */}
        </form>
      </div>
      <div>
        <form noValidate autoComplete="off">
          {/* currently calls yourself */}
          {/* <input label="idToCall" value={me} onChange={event => setIdToCall(event.target.value)} /> */}

          {callAccepted && !callEnded ? (
            // <button onClick={leaveCall}>End Call</button>
            <Fragment>
              <p>Enjoy your call!</p>
              <Timer end={leaveCall} />
            </Fragment>
          ) : (
            <button onClick={(event) => handleClick(event, idToCall)}> Start Chatting!</button>
          )}
        </form>
        {children}
      </div>
    </>
  )
}