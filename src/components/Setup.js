import Peer from "simple-peer"
import io from "socket.io-client"
import React, { useEffect, useState, Fragment } from "react"
import adapter from 'webrtc-adapter';
import "../styles/Setup.scss";


// adapter.js is a shim to insulate apps from spec changes and prefix differences in WebRTC.
// const socket = io.connect('http://localhost:5000')

export default function Setup(props) {
  // const [myID, setMyID] = useState("");

  useEffect(() => {
    // setMyID(socket.id);

    // Web Rtc sample code copypastad from https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/input-output/js/main.js

    const videoElement = document.querySelector('#myVideo');
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
      <h1> Make sure you look and sound good! </h1>
      <section id="meeting">
        <section id="videos">
          <video id="myVideo" playsInline autoPlay height="400px" width="400px"></video>
        </section>
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
        <button onClick={props.onClick}>Start Chatting</button>
      </section>
    </Fragment>
  );
}