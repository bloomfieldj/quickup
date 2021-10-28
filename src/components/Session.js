import { Fragment } from "react";

export default function Session(props) {
  return (
    <Fragment>
      <h1>Make sure you look and sound good!</h1>
      <button onClick={props.onClick}> Enter the Chat Room</button>
    </Fragment>
  )
}