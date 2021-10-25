import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./Application.scss";
import Profile from "./Profile";
import Registration from "./Registration";
import Chat from "./Chat";
import Navbar from "./Navbar";
import Welcome from "./Welcome";
import chungus from "./chungus.png";
import Login from "./Login";



const profile = {
  "first_name": 'Jane',
  "last_name": 'Doe',
  "age": 27,
  "gender": "Female",
  "city": "San Francisco",
  "phone_number": "1234567",
  "email": "jane@doe.com",
  "occupation": "Nurse",
  "bio": "I'm just a a Pam looking for my Jim. My hobbies include Netflix, UberEats and drowning my existential dread in Nutella. Looking for someone who will treat me like the royalty I am. Must be 6'2 or taller and make 150k+ or don't even bother.",
  "photo": chungus
}


export default function Application() {
  const [transition, setTransition] = useState("welcome");

  const registration = () => {
    setTransition("register") 
  }
  const login = () => {
    setTransition("login") 
  }

  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(res => console.log(res))
  }, [])

  return (

    <main className="layout">
      <Navbar/>
      {transition === "welcome" && <Welcome onClick1={login} onClick2={registration}/>} 
      {transition === "register" && <Registration/>} 
      {transition === "login" && <Login/>} 
      <Profile profile={profile}/>
      <Chat profile={profile}/>
    </main>
  );
}