import React, { useState, useEffect, Fragment } from "react";

export default function Timer() {
  const [timeLeft, setTimeLeft] = useState(120)

  useEffect(() =>
    timeLeft > 0 && setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
  )

  return (
    <Fragment>
      <section id="timer">
        <p>Time left: {timeLeft}</p>
        <button>Extend chat by 2 minutes!</button>
      </section>
    </Fragment>
  )
}