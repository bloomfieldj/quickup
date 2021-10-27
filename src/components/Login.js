import { Fragment, useState } from "react";
import '../styles/Login.scss'

export default function Login(props){
  const [email, setEmail] = useState(null);

  const handleChange = (event) => {
    setEmail(event.target.value);
    // console.log(email)
  };

  const setUser = (email) => {
    props.onClick(email)
    // console.log('from login comp', email)
  }
  

  return(
    <Fragment>
  <div className="login-form">
    <h2>Please Enter Your Credentials</h2>
      <form className="login-fields">
        <input className="email-input" 
        name="email" 
        value={email}
        onChange={(event) => handleChange(event)}
        type="text" 
        placeholder={"Enter Your Email Address"}/>
        <input className="password-input"  name="password" type="text" placeholder={"Enter Your Password"}/>
      </form>
      <button onClick={() => setUser(email)} className="submit-btn">Submit</button>
  </div>
    </Fragment>
  )
}