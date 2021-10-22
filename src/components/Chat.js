import React, { Fragment } from "react";
import "./Chat.scss";
import chungus from "./chungus.png"
export default function Chat() {
  return (
    <Fragment>
      <h1> Meet Big Chungus</h1>
      <section id="meeting">
        <img src={chungus} alt="chat_video" width="400" height="400" />
        <button>Extend chat by 2 minutes!</button>
      </section>
      <section id='profile'>
        <section id="basics">
          <p id="bio">
            I'm just a a Pam looking for my Jim. My hobbies include Netflix, UberEats and drowning my existential dread in Nutella. Looking for someone who will treat me like the royalty I am. Must be 6'2 or taller and make 150k+ or don't even bother.
          </p>
        </section>
        <section id="details">
          <section>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Age</p>
            <p>Gender</p>
          </section>
          <section>
            <p>City</p>
            <p>Phone Number</p>
            <p>Email</p>
            <p>Occupation</p>
          </section>
        </section>
      </section>
    </Fragment>
  );
}