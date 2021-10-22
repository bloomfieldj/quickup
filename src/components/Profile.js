import React, { Fragment } from "react";
import "./Profile.scss";
import chungus from "./chungus.png"
export default function Profile() {
  return (
    <Fragment>
      <h1> My profile</h1>
      <section id="basics">
        <img id="profile_pic" src={chungus} alt="profile-pic" width="100" height="100" />
        <p id="bio">
          I'm just a a Pam looking for my Jim. My hobbies include Netflix, UberEats and drowning my existential dread in Nutella. Looking for someone who will treat me like the royalty I am. Must be 6'2 or taller and make 150k+ or don't even bother.
        </p>
      </section>
      <section id='profile'>
        <section id="details">
          <section>
            <p>First Name</p>
            <p>Last Name</p>
            <p>Age</p>
            <p>Gender</p>
          </section>
          <section>
            <p>City</p>
            <p>Phone Number</p>
            <p>Email</p>
            <p>Occupation</p>
          </section>
        </section>
      </section>
    </Fragment>
  );
}