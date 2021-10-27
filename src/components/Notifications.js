import { SocketContext } from "./SocketContext";
import { useContext } from 'react';

export default function Notifications(){
  const { answerCall, call, callAccepted } = useContext(SocketContext);
  return(
    <>
    {call.isReceivedCall && !callAccepted && (
      <div>
        <h1>{call.name} is calling you! </h1>
        <button onClick={answerCall}>Answer Call</button>
      </div>
    )}
    </>
  )
}