import { Children, Fragment, useContext, useState } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "./SocketContext";
import Timer from "./Timer";
import axios from "axios";

export default function Options(props) {


  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser, users, setUsers } = useContext(SocketContext);

  // calls yourself for now
  const [idToCall, setIdToCall] = useState(me);
  

  function getPeers() {
    // event.preventDefault();

    axios.get('http://localhost:3001/call', {}, {params: {user: props.user.email}}
      ).then((res) => {
        return res.data;
      }).then((data) => {
        // const id = data[0].chat_id
        // callUser(id)
        const peerArr = [];
        
        for(const peer of data) {
          if(peer.chat_id !== idToCall){
            peerArr.push(peer.chat_id);
          }
        }
        console.log(peerArr)
        return peerArr;
      }).then ((peer) => {
        return peer;
      })  
  }

function handleClick(event){
    event.preventDefault()
    
    axios.get('http://localhost:3001/call', {}, {params: {user: props.user.email}}
      ).then((res) => {
        return res.data;
      }).then((data) => {
        // const id = data[0].chat_id
        // callUser(id)
        setName(data[0].first_name)

        return data[0].chat_id
      }).then((data) => {
        console.log(data)
        callUser(data);
      })
  }

  const handleClick2 = (event) => {
    event.preventDefault();
  
    axios.get('http://localhost:3001/call', {}, {params: {user: props.user.email}}
      ).then((res) => {
        setName(prev => res.data[1].first_name)
        return res.data;
      }).then((data) => {
        return data[1].chat_id
      }).then((data) => {
        console.log(data)
        callUser(data);
      })
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
          
        <div class="enter-room-cont">
            <button class="start-chatting" onClick={(event) => handleClick(event)}> Start Chatting with Mystery Person #1!</button>
            <button onClick={(event) => handleClick2(event)}> Start Chatting with Mystery Person #2!</button>
        </div>
          </>
        )}
      </form>
      {props.children}
    </Fragment>
  )
}