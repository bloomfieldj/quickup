import { Children, useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "./SocketContext";

export default function Options({children}) {
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');


  const handleClick = (event, idToCall) => {
    console.log('idToCall', idToCall);
    event.preventDefault();
    callUser(idToCall)
  }
  
  return(
    <>
    <div>
      <form>
      <input label="name" value={name} onChange={event => setName(event.target.value)}/>
      <CopyToClipboard text={me}>
        <button onClick={(event) => event.preventDefault()}>Copy Personal Chat ID</button>    
      </CopyToClipboard>
      </form>
    </div>
    <div>
      <form noValidate autoComplete="off">
        <input label="idToCall" value={idToCall} onChange={event => setIdToCall(event.target.value)}/>

        { callAccepted && !callEnded ? (
          <button onClick={leaveCall}>End Call</button>
        ) : (
          <button onClick={(event) => handleClick(event, idToCall)}> Make a Call</button>
        )}
        </form>
          {children}
    </div>
    </>
  )
}