import React, { Fragment } from "react";
import "./Profile.scss";
export default function Profile() {
  return (
    <Fragment>
      <h1> My profile</h1>
      <section id='profile'>
        <section id="basics">
          <img id="profile_pic" alt="profile-pic" />
          <p id="bio">
            I'm just a a Pam looking for my Jim. My hobbies include Netflix, UberEats and drowning my existential dread in Nutella. Looking for someone who will treat me like the royalty I am. Must be 6'2 or taller and make 150k+ or don't even bother.
          </p>
        </section>
        <section id="details">
          <section>
            <input type="text" class='profile_entry' name="city" placeholder="City" />
            <input type="tel" class='profile_entry' name="phone" placeholder="Phone Number" />
            <input type="email" class='profile_entry' name="email" placeholder="Email" />
            <input type="text" class='profile_entry' name="job" placeholder="Occupation" />
          </section>
          <section>
            <input type="text" class='profile_entry' name="city" placeholder="City" />
            <input type="tel" class='profile_entry' name="phone" placeholder="Phone Number" />
            <input type="email" class='profile_entry' name="email" placeholder="Email" />
            <input type="text" class='profile_entry' name="job" placeholder="Occupation" />
          </section>
        </section>
      </section>
    </Fragment>
  );
}