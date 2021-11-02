import React, { Fragment } from "react";
import "../styles/Profile.scss";
// import { promiseImpl } from "ejs";
import chungus from "./chungus.png";

export default function Profile(props) {
  return (
    <Fragment>
      <h1> My profile</h1>
      <div id='card'>
        <h2>{props.profile.first_name} {props.profile.last_name}</h2>
        <div class="image-crop">
          <img id="avatar" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DRWwNUmSci0E5dwWICPelgHaH6%26pid%3DApi&f=1"></img>
          {/* <img id="profile_pic" src={props.profile.photo} alt="profile-pic" width="100" height="100" /> */}
        </div>
        <div id="stats">
          <p id="user-bio">
            {props.profile.bio}
          </p>
          <div class="a-and-g">
            <div class='row'>
              <p class='stat'>{props.profile.age}</p>
              <p class='label'>Age</p>
            </div>
            <div class='row'>
              <p class='stat'>{props.profile.gender}</p>
              <p class='label'>Gender</p>
            </div>
          </div>
          <div class="col">
            <p class="stat">{props.profile.city}</p>
            <p class="label">Location</p>
          </div>
          <div class="col">
            <p class="stat">{props.profile.phone}</p>
            <p class="label">Phone Number</p>
          </div>
          <div class="col">
            <p class="stat">{props.profile.email}</p>
            <p class="label">Email</p>
          </div>
          <div class="col">
            <p class="stat">{props.profile.occupation}</p>
            <p class="label">Occupation</p>
          </div>
        </div>
      <button class='logout' onClick={props.onClick}>Log Out</button>
      </div>
    </Fragment >
  );
}