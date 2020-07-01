import React from "react";
import classes from "./ElevatorButton.module.scss";
import Elevator from "elevator.js";
import { ReactComponent as ElevatorSVG } from "../../Logos/Elevator/elevator.svg";
import { useSelector } from "react-redux";


const ElevatorButton = (props) => {

  const language = useSelector((state) => state.languageReducer.language);

  const elevator = new Elevator({
    element: document.querySelector(".elevatorButton"),
    mainAudio: "/elevator.mp3", 
    endAudio: "/ding.mp3",
    startCallback: function () {
      // let audio = new Audio("./elevator.mp3")
      // audio.play()
    },
    endCallback: function () {
      // is called, when the elevator reached target level
    },
  });

  const elevatorButtonText = language === 'FR' ? 'Retour en haut' : 'Back to Top';

  return (
    <div>
        <div className={classes.elevatorButton} onClick={() => elevator.elevate()} >
        <ElevatorSVG />
          {elevatorButtonText}
        </div>
    </div>
  );
};


export default ElevatorButton;
