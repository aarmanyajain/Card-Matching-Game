// ActivityScreen.tsx

import React, { useEffect, useState } from "react";
import prevButtonImage from "./prev.png";
import barImage from "./bar.png";
import barEndImage from "./barEnd.png";
import card1 from "./HI1-2.png";
import card7 from "./HI2.png";
import flipped1 from "./front1.png"; 
import flipped2 from "./front2.png";
import flipped3 from "./front3.png";
import flipped4 from "./front4.png";
import flipped5 from "./front5.png";
import flipped6 from "./front6.png";
import blueFlipped1 from "./blue1.png";
import blueFlipped2 from "./blue2.png";
import blueFlipped3 from "./blue3.png";
import blueFlipped4 from "./blue4.png";
import blueFlipped5 from "./blue5.png";
import blueFlipped6 from "./blue6.png";
import { useNavigate } from "react-router-dom";
import "../styles.css";

interface ActivityScreenProps {}

const ActivityScreen: React.FC<ActivityScreenProps> = () => {
  const navigate = useNavigate();

  const navigateToPreviousScreen = () => {
    navigate("/introscreen4");
  };

  const flippedImages = [
    flipped1,
    flipped2,
    flipped3,
    flipped4,
    flipped5,
    flipped6,
  ];

  const blueFlippedImages = [
    blueFlipped1,
    blueFlipped2,
    blueFlipped3,
    blueFlipped4,
    blueFlipped5,
    blueFlipped6,
  ];

  const [pinkCardFlips, setPinkCardFlips] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [blueCardFlips, setBlueCardFlips] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [selectedPinkIndex, setSelectedPinkIndex] = useState<number | null>(
    null
  );

  const [selectedBlueIndex, setSelectedBlueIndex] = useState<number | null>(
    null
  );

  const handleCardClick = (index: number, isPinkCard: boolean) => {
    if (isPinkCard) {
      if (selectedPinkIndex === null || selectedPinkIndex === index) {
        // Toggle the flip state of the pink card
        setPinkCardFlips((prevFlips) => {
          const newFlips = [...prevFlips];
          newFlips[index] = !newFlips[index];
          return newFlips;
        });
        setSelectedPinkIndex(selectedPinkIndex === null ? index : null);
      }
    } else {
      if (selectedBlueIndex === null || selectedBlueIndex === index) {
        // Toggle the flip state of the blue card
        setBlueCardFlips((prevFlips) => {
          const newFlips = [...prevFlips];
          newFlips[index] = !newFlips[index];
          return newFlips;
        });
        setSelectedBlueIndex(selectedBlueIndex === null ? index : null);
      }
    }
  };

  useEffect(() => {
    if (selectedPinkIndex !== null && selectedBlueIndex !== null) {
      const pinkCardImage = flippedImages[selectedPinkIndex];
      const blueCardLetter = blueFlippedImages[selectedBlueIndex - 6][0];

      const isMatch =
        pinkCardImage[0].toLowerCase() === blueCardLetter.toLowerCase();

      setTimeout(() => {
        setPinkCardFlips((prevFlips) => {
          const newFlips = [...prevFlips];
          newFlips[selectedPinkIndex] = false;
          return newFlips;
        });
        setBlueCardFlips((prevFlips) => {
          const newFlips = [...prevFlips];
          newFlips[selectedBlueIndex] = false;
          return newFlips;
        });
        setSelectedPinkIndex(null);
        setSelectedBlueIndex(null);

        if (isMatch) {
          alert("It's a match!");
        } else {
          alert("Try again!");
        }
      }, 1000);
    }
  }, [selectedPinkIndex, selectedBlueIndex]);

  return (
    <div className="activity-screen">
      <button className="nav-button" onClick={navigateToPreviousScreen}>
        <img
          className="button-image"
          src={prevButtonImage}
          alt="Previous Button Image"
        />
      </button>
      <img className="bar-image" src={barImage} alt="Bar Image" />
      <img className="bar-end-image" src={barEndImage} alt="Bar End Image" />
      <div className="card-container">
        <div className="pink-card">
          <div className="card-row">
            {[0, 1, 2].map((index) => (
              <img
                key={index}
                className={`card ${pinkCardFlips[index] ? "flipped" : ""}`}
                src={pinkCardFlips[index] ? flippedImages[index] : card1}
                alt={`Card ${index + 1}`}
                onClick={() => handleCardClick(index, true)}
              />
            ))}
          </div>
          <div className="card-row">
            {[3, 4, 5].map((index) => (
              <img
                key={index}
                className={`card ${pinkCardFlips[index] ? "flipped" : ""}`}
                src={pinkCardFlips[index] ? flippedImages[index] : card1}
                alt={`Card ${index + 1}`}
                onClick={() => handleCardClick(index, true)}
              />
            ))}
          </div>
        </div>
        <div className="blue-card">
          <div className="card-row">
            {[6, 7, 8].map((index) => (
              <img
                key={index}
                className={`card ${blueCardFlips[index] ? "flipped" : ""}`}
                src={
                  blueCardFlips[index] ? blueFlippedImages[index - 6] : card7
                }
                alt={`Card ${index + 1}`}
                onClick={() => handleCardClick(index, false)}
              />
            ))}
          </div>
          <div className="card-row">
            {[9, 10, 11].map((index) => (
              <img
                key={index}
                className={`card ${blueCardFlips[index] ? "flipped" : ""}`}
                src={
                  blueCardFlips[index] ? blueFlippedImages[index - 6] : card7
                }
                alt={`Card ${index + 1}`}
                onClick={() => handleCardClick(index, false)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityScreen;
