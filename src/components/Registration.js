import React, { Fragment } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import "../styles/Registration.scss"


export default function Registration(props) {

  return (
    <Fragment>
    <div className="register-components">
      <h2> Create a profile</h2>
      <form id='profile_creator'>
        <section>
          <input type="text" className='profile_entry' name="first_name" placeholder="First Name" />
          <input type="text" className='profile_entry' name="last_name" placeholder="Last Name" />
          <input type="number" className='profile_entry' name="age" placeholder="Age" />
          <select id="gender" name="gender" placeholder="Gender">
            <option value="" disabled defaultValue hidden>Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="nonbinary">Nonbinary</option>
            <option value="Other">Other</option>
          </select>
        </section>
        <section>
          <input type="text" className='profile_entry' name="city" placeholder="City" />
          <input type="tel" className='profile_entry' name="phone" placeholder="Phone Number" />
          <input type="email" className='profile_entry' name="email" placeholder="Email" />
          <input type="text" className='profile_entry' name="job" placeholder="Occupation" />
        </section>
        <section>
          <textarea name="bio" className="profile_entry" rows="6" cols="50" placeholder="Tell us about yourself...">
          </textarea>
        </section>
      </form>
      <button onClick={props.onClick}className="registerButton" type="button">Submit</button>
    </div>
    </Fragment>
  );
}