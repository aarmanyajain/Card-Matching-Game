// IntroScreen3.tsx
import React from "react";
import centerImage from "./2.png";
import barImage from "./bar.png";
import barEnd from "./barEnd.png";
import cloudImage from "./3.png";
import textImage from "./heading3.png";
import yesButtonImage from "./yes.png";
import prevButtonImage from "./prev.png";
import { useNavigate } from "react-router-dom";
import "../styles.css"; 

interface IntroScreen3Props {}

const IntroScreen3: React.FC<IntroScreen3Props> = () => {
    const navigate = useNavigate();

   const navigateToNextScreen = () => {
     navigate("/introscreen4");
   };

   const navigateToPreviousScreen = () => {
     navigate("/introscreen2");
   };


  return (
    <div className="intro-screen-3">
     
      <div className="center-image-container">
        <img className="center-image" src={centerImage} alt="Centered Image" />
      </div>
      <div className="bar-image-container">
        <img className="bar-image" src={barImage} alt="Bar Image" />
      </div>
      <div className="bar-end-container">
        <img className="bar-end" src={barEnd} alt="Bar End" />
      </div>
      <div className="cloud-image-container">
        <img className="cloud-image" src={cloudImage} alt="Cloud Image" />
      </div>
      <div className="text-image-container">
        <img className="text-image" src={textImage} alt="Text Image" />
      </div>
      <button className="yes-button" onClick={navigateToNextScreen}>
        <img
          className="yes-button-image"
          src={yesButtonImage}
          alt="Yes Button Image"
        />
      </button>
      <button className="prev-button" onClick={navigateToPreviousScreen}>
        <img
          className="prev-button-image"
          src={prevButtonImage}
          alt="Previous Button Image"
        />
      </button>
    </div>
  );
};

export default IntroScreen3;
