import React, { Fragment } from "react";
import "./Chat.scss";
import chungus from "./chungus.png"

export default function Chat(props) {
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
          {props.profile.bio}
          </p>
        </section>
        <section id="details">
          <section>
          <p>{props.profile.first_name}</p>
          <p>{props.profile.last_name}</p>
          <p>{props.profile.age}</p>
          <p>{props.profile.gender}</p>
          </section>
          <section>
            <p>{props.profile.city}</p>
            <p>{props.profile.phone_number}</p>
            <p>{props.profile.email}</p>
            <p>{props.profile.occupation}</p>
          </section>
        </section>
      </section>
      
    </Fragment>
  );
}