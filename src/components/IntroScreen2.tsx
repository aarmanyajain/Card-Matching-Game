// IntroScreen2.tsx
import React from "react";
import centerImage from "./2.png";
import otherImage1 from "./3.png";
import otherImage2 from "./heading2.png";
import nextButtonImage from "./next.png";
import prevButtonImage from "./prev.png";
import { useNavigate } from "react-router-dom";
import "../styles.css"; 

interface IntroScreen2Props {}

const IntroScreen2: React.FC<IntroScreen2Props> = () => {
  const navigate = useNavigate();

  const navigateToNextScreen = () => {
    navigate("/introscreen3");
  };

  const navigateToPreviousScreen = () => {
    navigate("/");
  };

  return (
    <div className="intro-screen-2">
      <div className="center-image-container">
        <img className="center-image" src={centerImage} alt="Centered Image" />
      </div>
      <div className="other-image-container">
        <img className="other-image" src={otherImage1} alt="Other Image 1" />
      </div>
      <div className="other-image-container">
        <img className="other-image2" src={otherImage2} alt="Other Image 2" />
      </div>
      <button className="nav-button" onClick={navigateToNextScreen}>
        <img
          className="button-image1"
          src={nextButtonImage}
          alt="Next Button Image"
        />
      </button>
      <button className="nav-button" onClick={navigateToPreviousScreen}>
        <img
          className="button-image2"
          src={prevButtonImage}
          alt="Previous Button Image"
        />
      </button>
    </div>
  );
};

export default IntroScreen2;
