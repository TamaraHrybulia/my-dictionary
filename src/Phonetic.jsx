import React from "react";
import CountrySign from "./CountrySign";

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
        <div key={index}>
          <div>
            <CountrySign
              audio={props.phonetics[index].audio}
              keyWord={props.keyWord}
            />
          </div>
          <div>
            <button onClick={start}> Play </button>
          </div>
          <span>{props.phonetics[index].text}</span>
        </div>
      );
    }
  });
}
