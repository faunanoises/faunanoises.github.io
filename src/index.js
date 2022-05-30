import React from "react";
import ReactDOM from "react-dom";
import ringer from "./uh_oh"; //array?
import "./styles.css";

const Sound = () => {
  const audio = new Audio(ringer);
  return (
    <div>
      <button
        onClick={() => {
		  audio = audio[Math.round(Math.random() * (audio.length - 1))]
          audio.play();
        }}
      >
        Play
      </button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Sound />, rootElement);
