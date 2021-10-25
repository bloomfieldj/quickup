import { Fragment } from "react";

export default function Login(props){
  return(
    <Fragment>
    <h2>Please Enter Your Credentials</h2>
      <form>
        <input name="email" type="text" placeholder={"Enter Your Email Address"}/>
        <input name="password" type="text" placeholder={"Enter Your Password"}/>
      </form>
      <button>Submit</button>
    </Fragment>
  )
}