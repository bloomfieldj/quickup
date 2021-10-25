import React from "react";
import "./Application.scss";
import Profile from "./Profile";
import Registration from "./Registration";
import Chat from "./Chat";
export default function Application() {
  return (

    <main className="layout">
      <nav id="navbar" className="navbar">
        <section id="navbar_side">
          <span> Home </span>
          <span> How It Works </span>
        </section>
        <span id="title"><strong>QuickUp</strong></span>
        <section id="navbar_side">
          <span> Sign-Up</span>
          <span> Login </span>
        </section>
      </nav>
      {/* <Registration /> */}
      {/* <Profile /> */}
      <Chat />
    </main>
  );
}