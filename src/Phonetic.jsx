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
          <CountrySign
            audio={props.phonetics[index].audio}
            keyWord={props.keyWord}
          />
          <button onClick={start}> Play </button>
          <span>{props.phonetics[index].text}</span>
        </div>
      );
    }
  });
}
