import React from "react";
import Phonetic from "./Phonetic";
import Meanings from "./Meanings";

import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results[0].word}</h2>
          <hr />

          <Phonetic
            phonetics={props.results[0].phonetics}
            keyWord={props.results[0].word}
          />
        </section>

        <section>
          <h2>Meanings</h2>
          {props.results[0].meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meanings meaning={meaning} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
