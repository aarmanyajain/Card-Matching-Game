// IntroScreen1.tsx
import React from "react";
import image1 from "./2.png";
import image2 from "./3.png";
import customImage from "./4.png";
import image3 from "./5.png";
import { useNavigate } from "react-router-dom";

interface IntroScreen1Props {}

const IntroScreen1: React.FC<IntroScreen1Props> = () => {
  const navigate = useNavigate();

  const navigateToNextScreen = () => {
    navigate("/introscreen2"); 
  };

  return (
    <div className="intro-screen-1">
      <div className="image-container">
        <img className="image1" src={image1} alt="Image 1" />
        <img className="image2" src={image2} alt="Image 2" />
        <img className="custom-image" src={customImage} alt="Custom Image" />
        <button className="nav-button" onClick={navigateToNextScreen}>
          <img className="image3" src={image3} alt="Button Image" />
        </button>
      </div>
    </div>
  );
};

export default IntroScreen1;
