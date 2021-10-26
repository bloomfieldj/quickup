import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../styles/Application.scss";

import Profile from "./Profile";
import Registration from "./Registration";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Login from "./Login";
import Session from "./Session";


export default function Application() {
  const [transition, setTransition] = useState("welcome");
  const [user, setUser] = useState(null);

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
  const session = () => {
    setTransition("session")
  }
  const verifyUser = () => {
    setTransition("profile")
  }

  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(res => {
      console.log(res)
      setUser(res.data[0]);
    })
  }, [])

  return (

    <main className="layout">
      <Navbar onClick1={login} onClick2={registration} onClick3={profile} onClick4={session}/>
      {transition === "welcome" && <Welcome onClick1={login} onClick2={registration}/>} 
      {transition === "register" && <Registration onClick={profile}/>} 
      {transition === "login" && <Login onClick={verifyUser}/>} 
      {transition === "profile" && <Profile profile={user}/>}
      {transition === "chat" &&<Chat profile={user}/>}
      {transition === "session" &&<Session onClick={chat}/>}

    </main>
  );
}