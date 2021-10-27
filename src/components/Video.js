import { useContext } from "react"
import { SocketContext } from "./SocketContext"

export default function Video(props){
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return(
    <div>
      Video Chat

      {stream && (
      <div className="peer-video">
      <h3>{name}</h3>
      <video id="myVideo" playsInline muted ref={myVideo} autoPlay/>
      </div>
        )}

      {callAccepted && !callEnded && ( 
        <div>
      <h3>{call.name}</h3>
      <video id="theirVideo" playsInline ref={userVideo} autoPlay />
      </div>
        )}
    </div>
  )
}

