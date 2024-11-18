import React, { useState } from "react";
import Phonetic from "./Phonetic";
import Meanings from "./Meanings";

import "./Results.css";

export default function Results(props) {
  let [currentMeaningIndex, setCurrentMeaningIndex] = useState(0);

  function slideResultNext() {
    setCurrentMeaningIndex((prevIndex) =>
      prevIndex === props.results[0].meanings.length - 1 ? 0 : prevIndex + 1
    );
  }
  function slideResultPrev() {
    setCurrentMeaningIndex(function (prevIndex) {
      let newIndex = prevIndex - 1;

      return newIndex === -1 ? props.results[0].meanings.length - 1 : newIndex;
    });
  }
  if (props.results) {
    return (
      <div className="Results">
        <section className="phoneticSection">
          <h2>{props.results[0].word}</h2>
          <hr />

          <Phonetic
            phonetics={props.results[0].phonetics}
            keyWord={props.results[0].word}
          />
          <hr className="bottomLine" />
        </section>

        <section className="resultsSection">
          <div className="arrowButtons">
            <button className="prev" onClick={slideResultPrev}>
              ◀
            </button>
            <button className="next" onClick={slideResultNext}>
              ▶
            </button>
          </div>
          <div>
            <Meanings
              meaning={props.results[0].meanings[currentMeaningIndex]}
            />
          </div>
          <hr className="bottomLine" />
        </section>
      </div>
    );
  } else {
    return null;
  }
}
