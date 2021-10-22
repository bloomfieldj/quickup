import React, { Fragment } from "react";
import "./Profile.scss";
export default function Profile() {
  return (
    <Fragment>
      <h1> Create a profile</h1>
      <h2> Tell us about yourself!</h2>
      <form id='profile'>
        <section>
          <input type="text" class='profile_entry' name="first_name" placeholder="First Name" />
          <input type="text" class='profile_entry' name="last_name" placeholder="Last Name" />
          <input type="number" class='profile_entry' name="age" placeholder="Age" />
          <select id="gender" name="gender" placeholder="Gender">
            <option value="" disabled selected hidden>Gender</option>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>
        </section>
        <section>
          <input type="text" class='profile_entry' name="city" placeholder="City" />
          <input type="tel" class='profile_entry' name="phone" placeholder="Phone Number" />
          <input type="email" class='profile_entry' name="email" placeholder="Email" />
          <input type="text" class='profile_entry' name="job" placeholder="Occupation" />

        </section>
      </form>
    </Fragment>
  );
}