import { useContext, useEffect, useRef } from "react"
import { SocketContext } from "./SocketContext"

export default function Video(props) {
  const { name, callAccepted, userVideo, myVideo, callEnded, stream, call, showVideo } =
    useContext(SocketContext);

  useEffect(() => {
    showVideo()
  }, []);

  return (
    <div>
      Video Chat
      <div className="peer-video">
        {/* <h3>{name}</h3> */}
        <video id="myVideo" playsInline muted ref={myVideo} autoPlay height="400px" width="400px" />
      </div>


      {callAccepted && !callEnded && (
        <div class='chatter2'>
          <h1 class="chattersName">{call.name}</h1>
          <video id="theirVideo" playsInline ref={userVideo} autoPlay height="400px" width="400px" />
        </div>
      )}
    </div>
  )
}
