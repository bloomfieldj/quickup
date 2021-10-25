import React, { Fragment, useState } from "react";
import Registration from "./Registration";

export default function Welcome(props){

  return(
    <Fragment> 
    <h1>Welcome to Quickup!</h1>
    <p>To start chatting, simply log in or register!</p>
    <button onClick={props.onClick1}> Log In </button>
    <button onClick={props.onClick2}> Register </button>
    </Fragment>
  )
}