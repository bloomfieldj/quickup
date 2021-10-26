import { Fragment } from "react";

export default function Session(props) {
  return(
    <Fragment>
    <h1>Welcome to the Session</h1>
    <button onClick={props.onClick}>Start Chatting</button>
    </Fragment>
  )
}