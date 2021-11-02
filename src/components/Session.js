import { Fragment } from "react";
import "../styles/Chat.scss"

export default function Session(props) {
  return (
    <Fragment>
      <h1>Make sure you look and sound good!</h1>
      <div class="enter-room-cont"><button class='enter-room' onClick={props.onClick}> Enter the Chat Room</button></div>
    </Fragment>
  )
}