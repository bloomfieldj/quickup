import { Fragment } from "react";
import '../styles/Login.scss'

export default function Login(props){
  return(
    <Fragment>
  <div className="login-form">
    <h2>Please Enter Your Credentials</h2>
      <form className="login-fields">
        <input className="email-input" name="email" type="text" placeholder={"Enter Your Email Address"}/>
        <input className="password-input"  name="password" type="text" placeholder={"Enter Your Password"}/>
      </form>
      <button className="submit-btn">Submit</button>
  </div>
    </Fragment>
  )
}