import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../styles/Application.scss";

import chungus from "./chungus.png";

import Profile from "./Profile";
import Registration from "./Registration";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Login from "./Login";

export default function Application() {
  const [transition, setTransition] = useState("welcome");

  const registration = () => {
    setTransition("register")
  }
  const login = () => {
    setTransition("login")
  }
  const profile = () => {
    setTransition("profile")
  }
  const chat = () => {
    setTransition("chat")
  }

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(res => console.log(res))
  }, [])

  return (

    <main className="layout">
      <Navbar onClick1={login} onClick2={registration} onClick3={profile} onClick4={chat} />
      {transition === "welcome" && <Welcome onClick1={login} onClick2={registration} />}
      {transition === "register" && <Registration />}
      {transition === "login" && <Login />}
      {transition === "profile" && <Profile profile={user} />}
      {transition === "chat" && <Chat profile={user} />}
    </main>
  );
}