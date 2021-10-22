import React, { Fragment } from "react";
import "./Registration.scss";
export default function Profile() {
  return (
    <Fragment>
      <h1> Create a profile</h1>
      <h2> Tell us about yourself!</h2>
      <form id='profile_creator'>
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
        <section>
          <textarea name="bio" class="profile_entry" rows="6" cols="50" placeholder="I'm just a a Pam looking for my Jim. My hobbies include Netflix, UberEats and drowning my existential dread in Nutella. Looking for someone who will treat me like the royalty I am. Must be 6'2 or taller and make 150k+ or don't even bother.">
          </textarea>
        </section>
      </form>
    </Fragment>
  );
}