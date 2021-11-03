import { SocketContext } from "./SocketContext";
import { useContext } from 'react';

export default function Notifications(){
  const { answerCall, call, callAccepted, name } = useContext(SocketContext);
  return(
    <>
    {call.isReceivedCall && !callAccepted && (
      <div>
        <h1>Someone is calling you! </h1>
        <div class="enter-room-cont"><button class="calling-you" onClick={answerCall}>Answer Call</button></div>
      </div>
    )}
    </>
  )
}