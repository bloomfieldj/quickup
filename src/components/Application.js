import React, { useEffect, useState, Fragment } from "react";
import axios from 'axios';
import "../styles/Application.scss";

import Profile from "./Profile";
import Registration from "./Registration";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import Login from "./Login";
import Session from "./Session";
import Video from "./Video";
import Options from "./Options";
import { ContextProvider } from "./SocketContext";
import Notifications from "./Notifications";
import Peer from "./Peer";
import Setup from "./Setup"
import Timer from "./Timer";
import MyVideo from "./MyVideo"
import PartnerVideo from "./PartnerVideo"


export default function Application() {
  const [transition, setTransition] = useState("welcome");
  const [user, setUser] = useState(null);

  const registration = () => {
    setTransition("register")
  }
  const login = () => {
    if (user) {
      return setTransition("profile")
    }
    setTransition("login");
  }
  const logout = () => {
    setUser(null);
    setTransition("welcome");
  }
  const profile = () => {
    if (user) {
      return setTransition("profile")
    }
    setTransition("login");
  }
  const chat = () => {
    setTransition("chat")
  }
  const chatting = () => {
    setTransition("chatting")
  }
  const setup = () => {
    setTransition("setup")
  }
  const session = () => {
    setTransition("session")
  }
  const verifyUser = () => {
    setTransition("profile")
  }
  const loginUser = (email) => {
    // console.log('pass down', email)

    axios.get('http://localhost:3001/login', { params: { email: email } })
      .then(res => {
        console.log('res.data from login', res.data[0])
        setUser(res.data[0]);
      })
      .then(() => setTransition("profile"))
  }


  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(res => {
        setUser(res.data[0]);
      })
  }, [])

  return (

    <main className="layout">
      <Navbar onClick1={login} onClick2={registration} onClick3={profile} onClick4={chat} />
      {transition === "welcome" && <Welcome onClick1={login} onClick2={registration} />}
      {transition === "register" && <Registration onClick={profile} />}
      {transition === "login" && <Login onClick={loginUser} />}
      {transition === "profile" && <Profile onClick={logout} profile={user} />}

      {/* {transition === "session" && <Session onClick={chat} />} */}
      {/* {transition === "session" && <Session onClick={setup} />} */}

      {transition === "setup" && <Setup onClick={chat} />}
      {/* {transition === "chat" && <Chat profile={user}/>} */}
      {/* {transition === "chat" && <Chat profile={user}/>} */}
      {transition === "chat" &&
        <Fragment>
          <MyVideo />
          <button onClick={chatting}>Start Chatting</button>
        </Fragment>
      }
      {transition === "chatting" &&
        <Fragment>
          <MyVideo />
          <PartnerVideo />
          <Options>
            <Notifications />
          </Options>
        </Fragment>
      }
    </main>
  );
}