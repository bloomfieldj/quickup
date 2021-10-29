import { Children, Fragment, useContext, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "./SocketContext";
import Timer from "./Timer";
import axios from "axios";

export default function Options({ children, props }) {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);

  // calls yourself for now
  const [idToCall, setIdToCall] = useState(me);

  function handleClick(event) {
    event.preventDefault();

    console.log(props.user.email);

    axios.get('http://localhost:3001/call', {}, {params: {user: props.user.email}}
      ).then((res) => {
        console.log('result from get id request', res.data);
        return res.data;
      }).then((data) => {
        const nextPeer = data[1].chat_id
        console.log('nextpeer', nextPeer)
        setIdToCall(nextPeer);
      })
      .then(() => callUser(idToCall))
  }

  const call = (event) => {
    event.preventDefault();
    // console.log('me', me);
    // console.log('props.user', props.user)
    console.log('props',props);
    // callUser(me)
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
          <>
          <button onClick={(event) => handleClick(event, idToCall)}> Start Chatting!</button>
          <button onClick={call}>Call Myself</button>
          </>
        )}
      </form>
      {children}
    </Fragment>
  )
}