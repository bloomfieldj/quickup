'use strict';
import React, { Fragment, useEffect } from "react";

// adapter.js is a shim to insulate apps from spec changes and prefix differences in WebRTC.
import adapter from 'webrtc-adapter';

import "./Chat.scss";

import chungus from "./chungus.png"



export default function Chat() {
  useEffect(() => {
    // Web Rtc sample code from https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js


    const videoElement = document.querySelector('video');
    const audioInputSelect = document.querySelector('select#audioSource');
    const audioOutputSelect = document.querySelector('select#audioOutput');
    const videoSelect = document.querySelector('select#videoSource');
    const selectors = [audioInputSelect, audioOutputSelect, videoSelect];

    // audioOutputSelect.disabled = !('sinkId' in HTMLMediaElement.prototype);

    function gotDevices(deviceInfos) {
      // Handles being called several times to update labels. Preserve values.
      const values = selectors.map(select => select.value);
      selectors.forEach(select => {
        while (select.firstChild) {
          select.removeChild(select.firstChild);
        }
      });
      for (let i = 0; i !== deviceInfos.length; ++i) {
        const deviceInfo = deviceInfos[i];
        const option = document.createElement('option');
        option.value = deviceInfo.deviceId;
        if (deviceInfo.kind === 'audioinput') {
          option.text = deviceInfo.label || `microphone ${audioInputSelect.length + 1}`;
          audioInputSelect.appendChild(option);
        } else if (deviceInfo.kind === 'audiooutput') {
          option.text = deviceInfo.label || `speaker ${audioOutputSelect.length + 1}`;
          audioOutputSelect.appendChild(option);
        } else if (deviceInfo.kind === 'videoinput') {
          option.text = deviceInfo.label || `camera ${videoSelect.length + 1}`;
          videoSelect.appendChild(option);
        } else {
          console.log('Some other kind of source/device: ', deviceInfo);
        }
      }
      selectors.forEach((select, selectorIndex) => {
        if (Array.prototype.slice.call(select.childNodes).some(n => n.value === values[selectorIndex])) {
          select.value = values[selectorIndex];
        }
      });
    }

    navigator.mediaDevices.enumerateDevices().then(gotDevices).catch(handleError);

    // Attach audio output device to video element using device/sink ID.
    function attachSinkId(element, sinkId) {
      if (typeof element.sinkId !== 'undefined') {
        element.setSinkId(sinkId)
          .then(() => {
            console.log(`Success, audio output device attached: ${sinkId}`);
          })
          .catch(error => {
            let errorMessage = error;
            if (error.name === 'SecurityError') {
              errorMessage = `You need to use HTTPS for selecting audio output device: ${error}`;
            }
            console.error(errorMessage);
            // Jump back to first output device in the list as it's the default.
            audioOutputSelect.selectedIndex = 0;
          });
      } else {
        console.warn('Browser does not support output device selection.');
      }
    }

    function changeAudioDestination() {
      const audioDestination = audioOutputSelect.value;
      attachSinkId(videoElement, audioDestination);
    }

    function gotStream(stream) {
      window.stream = stream; // make stream available to console
      videoElement.srcObject = stream;
      // Refresh button list in case labels have become available
      return navigator.mediaDevices.enumerateDevices();
    }

    function handleError(error) {
      console.log('navigator.MediaDevices.getUserMedia error: ', error.message, error.name);
    }

    function start() {
      if (window.stream) {
        window.stream.getTracks().forEach(track => {
          track.stop();
        });
      }
      const audioSource = audioInputSelect.value;
      const videoSource = videoSelect.value;
      const constraints = {
        audio: { deviceId: audioSource ? { exact: audioSource } : undefined },
        video: { deviceId: videoSource ? { exact: videoSource } : undefined }
      };
      navigator.mediaDevices.getUserMedia(constraints).then(gotStream).then(gotDevices).catch(handleError);
    }

    audioInputSelect.onchange = start;
    audioOutputSelect.onchange = changeAudioDestination;

    videoSelect.onchange = start;

    start();
  })

  return (
    <Fragment>
      <h1> Meet Big Chungus</h1>
      <section id="meeting">
        <section id="videos">
          <video id="myVideo" playsInline autoPlay height="400px" width="400px"></video>
          <img src={chungus} alt="chat_video" width="400" height="400" />
        </section>
        <button>Extend chat by 2 minutes!</button>
        <section id="devices">
          <div className="select">
            <label for="audioSource">Audio input source: </label><select id="audioSource"></select>
          </div>

          <div className="select">
            <label for="audioOutput">Audio output destination: </label><select id="audioOutput"></select>
          </div>

          <div className="select">
            <label for="videoSource">Video source: </label><select id="videoSource"></select>
          </div>
        </section>
      </section>
      <section id='profile'>
        <section id="basics">
          <p id="bio">
            I'm just a a Pam looking for my Jim. My hobbies include Netflix, UberEats and drowning my existential dread in Nutella. Looking for someone who will treat me like the royalty I am. Must be 6'2 or taller and make 150k+ or don't even bother.
          </p>
        </section>
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