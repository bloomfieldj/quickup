import React, { Fragment } from "react";
import "./Profile.scss";
import { promiseImpl } from "ejs";

export default function Profile(props) {
  return (
    <Fragment>
      <h1> My profile</h1>
      <section id="basics">
        <img id="profile_pic" src={props.profile.photo} alt="profile-pic" width="100" height="100" />
        <p id="bio">
          {props.profile.bio}
        </p>
      </section>
      <section id='profile'>
        <section id="details">
          <section>
            <p>{props.profile.first_name}</p>
            <p>{props.profile.last_name}</p>
            <p>{props.profile.age}</p>
            <p>{props.profile.gender}</p>
          </section>
          <section>
            <p>{props.profile.city}</p>
            <p>{props.profile.phone_number}</p>
            <p>{props.profile.email}</p>
            <p>{props.profile.occupation}</p>
          </section>
        </section>
      </section>
    </Fragment>
  );
}