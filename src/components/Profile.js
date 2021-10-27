import React, { Fragment } from "react";
import "../styles/Profile.scss";
import { promiseImpl } from "ejs";

export default function Profile(props) {
  return (
    <Fragment>
      <h1> My profile</h1>
      <section id='profile'>
        <div class="profile-body">
          <div class="photo">
            <img id="profile_pic" src={props.profile.photo} alt="profile-pic" width="100" height="100" />
          </div>
        </div>
        <section id="details">
          <section className='profile-section1'>
            <div>
              <h2>{props.profile.first_name}</h2>
              <h2>{props.profile.last_name}</h2>
            </div>
            <div>
              <h2>{props.profile.age}</h2>
              <h2>{props.profile.gender}</h2>
            </div>
          </section>
          <section className='profile-section2'>
            <p>{props.profile.city}</p>
            <p>{props.profile.phone_number}</p>
            <p>{props.profile.email}</p>
            <p>{props.profile.occupation}</p>
          </section>
        </section>
      </section>
      <p id="bio">
        {props.profile.bio}
      </p>



    </Fragment>
  );
}