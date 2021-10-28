import React, { useState, useEffect, Fragment } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import '../styles/Timer.scss';



export default function Timer(props) {
  const [timeLeft, setTimeLeft] = useState(5);
  const [extension, setExtension] = useState(false);
  const [extensionCount, setExtensionCount] = useState(0);

  const extend = function () {
    setExtension(true);
  }

  useEffect(() => {

    timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    if (timeLeft === 0 && extensionCount < 3 && extension) {
      setTimeLeft(timeLeft + 10);
      setExtensionCount(extensionCount + 1);
      setExtension(false);
    }
    if (timeLeft === 0 && extension === false) {
      props.endCall();
    }

  }, [timeLeft])

  return (
    <Fragment>
      <section id="timer">
        <p>Time left: {timeLeft}</p>
        <button onClick={extend}>Extend chat by 2 minutes!</button>
      </section>
    </Fragment >
  )
}