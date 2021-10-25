import React, { useState, useEffect, Fragment } from "react";



export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(10);
  const [extension, setExtension] = useState(false);
  const [extensionCount, setExtensionCount] = useState(0);

  const extend = function () {
    setExtension(true);
  }

  useEffect(() => {

    timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    timeLeft === 0 && console.log("Times's up!")
    if (timeLeft === 0 && extensionCount < 3 && extension) {
      setTimeLeft(timeLeft + 10);
      setExtensionCount(extensionCount + 1);
      setExtension(false);
    }

  })

  return (
    <Fragment>
      <section id="timer">
        <p>Time left: {timeLeft}</p>
        <button onClick={extend}>Extend chat by 2 minutes!</button>
      </section>
    </Fragment >
  )
}