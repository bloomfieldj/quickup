import { useContext } from "react"
import { SocketContext } from "./SocketContext"
import Timer from "./Timer";

export default function Video(props) {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);

  return (
    <div>
      Video Chat

      {stream && (
        <div className="peer-video">
          <h3>{name}</h3>
          <video id="myVideo" playsInline muted ref={myVideo} autoPlay height="400px" width="400px" />
        </div>
      )}

      {callAccepted && !callEnded && (
        <div>
          <h3>{call.name}</h3>
          <video id="theirVideo" playsInline ref={userVideo} autoPlay height="400px" width="400px" />
        </div>
      )}
    </div>
  )
}

