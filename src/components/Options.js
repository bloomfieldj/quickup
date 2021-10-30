import { Children, Fragment, useContext, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "./SocketContext";
import Timer from "./Timer";
import axios from "axios";

export default function Options(props) {


  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, users, setUsers } = useContext(SocketContext);

  // calls yourself for now
  const [idToCall, setIdToCall] = useState(me);

  function handleClick(event) {
    event.preventDefault();

    console.log(props.user.email);

    axios.get('http://localhost:3001/call', {}, {params: {user: props.user.email}}
      ).then((res) => {
        return res.data;
      }).then((data) => {

        for(const peer of data) {
          if(peer.chat_id !== me){
            setName(peer.first_name);
            callUser(peer.chat_id)
          }
        
          // return peerArr;
        }
        // const nextPeer = peerArr[0]

        // console.log('nextpeer', nextPeer)
        // setIdToCall(nextPeer);
        
      })
      // .then(() => {
      //   console.log(name)
      //   callUser(idToCall)
      // })
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
          <button onClick={(event) => handleClick(event)}> Start Chatting!</button>
          </>
        )}
      </form>
      {props.children}
    </Fragment>
  )
}