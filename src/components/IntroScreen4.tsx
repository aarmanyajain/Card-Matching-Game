// IntroScreen4.tsx
import React from "react";
import prevButtonImage from "./prev.png";
import playButtonImage from "./play.png";
import barImage from "./bar.png";
import barEndImage from "./barEnd.png";
import rectangleImage1 from "./rec.png";
import rectangleImage2 from "./rec.png";
import rectangleImage3 from "./rec.png";

import hiImage1 from "./HI1.png";
import hiImage12 from "./HI1-2.png";
import htImage4 from "./ST4.png";

import hiImage2 from "./HI2.png";
import hiImage3 from "./HI3.png";
import htImage1 from "./HT1.png";
import htImage2 from "./HT2.png";
import htImage3 from "./HT3.png";
import stImage1 from "./ST1.png";
import stImage2 from "./ST2.png";
import stImage3 from "./ST3.png";
// import lImage1 from "./L1.png";
// import lImage2 from "./L2.png";
// import lImage3 from "./L3.png";
import shadowFrameImage from "./shadow.png";
import { useNavigate } from "react-router-dom";
import "../styles.css"; 

interface IntroScreen4Props {}

const IntroScreen4: React.FC<IntroScreen4Props> = () => {
  const navigate = useNavigate();

   const navigateToNextScreen = () => {
     navigate("/activityscreen");
   };

   const navigateToPreviousScreen = () => {
     navigate("/introscreen2");
   };

  return (
    <div className="intro-screen-4">
    
      <button className="nav-button" onClick={navigateToPreviousScreen}>
        <img
          className="button-image"
          src={prevButtonImage}
          alt="Previous Button Image"
        />
      </button>
      <button
        className="play-button"
        onClick={navigateToNextScreen}
      >
        <img
          className="play-button-image"
          src={playButtonImage}
          alt="Play Button Image"
        />
      </button>
      <img className="bar-image" src={barImage} alt="Bar Image" />
      <img className="bar-end-image" src={barEndImage} alt="Bar End Image" />
      <div className="rectangle">
        <img
          className="rectangle-image1"
          src={rectangleImage1}
          alt="Rectangle Image 1"
        />
        <img className="hi-image" src={hiImage1} alt="HI1 Image" />
        <img className="hi-image-1" src={hiImage12} alt="HI1-2 Image" />

        <img className="ht-image1" src={htImage1} alt="HT1 Image" />
        <img className="st-image1" src={stImage1} alt="ST1 Image" />
        {/* <img className="l-image" src={lImage1} alt="L1 Image" /> */}
        <img
          className="shadow-frame"
          src={shadowFrameImage}
          alt="Shadow Frame"
        />
      </div>
      <div className="rectangle">
        <img
          className="rectangle-image2"
          src={rectangleImage2}
          alt="Rectangle Image 2"
        />
        <img className="hi-image2" src={hiImage2} alt="HI2 Image" />
        <img className="ht-image2" src={htImage2} alt="HT2 Image" />
        <img className="st-image2" src={stImage2} alt="ST2 Image" />
        {/* <img className="l-image" src={lImage2} alt="L2 Image" /> */}
      </div>
      <div className="rectangle">
        <img
          className="rectangle-image3"
          src={rectangleImage3}
          alt="Rectangle Image 3"
        />
        <img className="hi-image3" src={hiImage3} alt="HI3 Image" />
        <img className="ht-image3" src={htImage3} alt="HT3 Image" />
        <img className="ht-image4" src={htImage4} alt="HT3 Image" />
        <img className="st-image3" src={stImage3} alt="ST3 Image" />
        {/* <img className="l-image" src={lImage3} alt="L3 Image" /> */}
      </div>
    </div>
  );
};

export default IntroScreen4;
