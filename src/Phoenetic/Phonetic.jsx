import React from "react";
import CountrySign from "../CountrySign/CountrySign";
import "./Phonetic.css";

export default function Phonetic(props) {
  return props.phonetics.map(function (phonetic, index) {
    const start = () => {
      if (props.phonetics?.[index]?.audio) {
        let audio = new Audio(props.phonetics[index].audio);
        audio.play();
      } else {
        console.log("audio isn't available");
      }
    };

    if (props.phonetics?.[index]?.audio) {
      return (
        <div key={index} className="Phonetic">
          <span className="phonetic-item">
            <CountrySign
              audio={props.phonetics[index].audio}
              keyWord={props.keyWord}
            />
          </span>

          <span className="phonetic-item text">
            {props.phonetics[index].text}
          </span>
          <button className="phonetic-item" onClick={start}>
            {" "}
            🔊 Listen{" "}
          </button>
        </div>
      );
    }
  });
}
