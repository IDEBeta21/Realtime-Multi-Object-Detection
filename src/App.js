// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const [winWidth, setwinWidth] = useState(640)
  const [winHeight, setwinHeight] = useState(480)

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Object model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net,{maxNumBoxes: 1});
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx); 
    }
  };

  useEffect(()=>{runCoco()},[]);

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: winWidth,
            height: winHeight,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: winWidth,
            height: winHeight,
          }}
        />
      <div 
        style={{
          paddingTop: 500
        }}
      >
        <h1
          style={{
            color: "white"
          }}
        >Realtime Multi Object Detection</h1>
        <p id='personText'
          style={{
            color: "white",
            fontSize: 20
          }}
        >Loading...</p>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
