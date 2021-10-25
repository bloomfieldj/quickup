import React, { Fragment, useState } from "react";
import "../styles/Welcome.scss"


export default function Welcome(props){

  return(
    <Fragment> 
    <h1>Welcome to Quickup!</h1>
    <div className="welcome">
      <div>
      <p className="greeting">To start chatting, simply log in or register!</p>
      </div>
      <div className="call-to-action">
        <button className="login" onClick={props.onClick1}> Log In </button>
        <button className="register" onClick={props.onClick2}> Register </button>
      </div>
    </div>
    </Fragment>
  )
}