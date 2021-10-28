import { Children, Fragment, useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "./SocketContext";
import Timer from "./Timer";
import axios from "axios";

export default function Options(props, { children }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  // calls yourself for now
  const [idToCall, setIdToCall] = useState("");

  async function handleClick(event, idToCall) {
    // console.log('idToCall', idToCall);
    event.preventDefault();

    console.log(props.user.email);

      await axios.get('http://localhost:3001/call', {}, {params: {user: props.user.email}}
      ).then((res) => {
        console.log('result from get id request', res.data);
        return res.data;
      })
      
    // callUser(idToCall)
  }

  return (
    <Fragment>
      <form noValidate autoComplete="off">
        {callAccepted && !callEnded ? (
          <Fragment>
            <p>Enjoy your call!</p>
            <Timer end={leaveCall} />
          </Fragment>
        ) : (
          <button onClick={(event) => handleClick(event, idToCall)}> Start Chatting!</button>
        )}
      </form>
      {children}
    </Fragment>
  )
}