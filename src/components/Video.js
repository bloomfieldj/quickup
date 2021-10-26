import { useContext } from "react"
import { SocketContext } from "../SocketContext"

export default function Video(props){
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return(
    <div>
      Video Chat
      
      {stream && (
        <div>
      <h3>{name}</h3>
        ref={myVideo}
      </div>
        )}

      {callAccepted && !callEnded && ( 
        <div>
      <h3>{call.name}</h3>
        ref={userVideo}
      </div>
        )}
    </div>
  )
}

