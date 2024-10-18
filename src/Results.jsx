import React from "react";

import Phonetic from "./Phonetic";
import Origin from "./Origin";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <ul>
        <li>
          <section>
            <h2>{props.results[0].word}</h2>

            <Phonetic
              phonetics={props.results[0].phonetics}
              keyWord={props.results[0].word}
            />
          </section>
        </li>
        <li>
          {" "}
          <section>
            <h2>origin</h2>
            <Origin />
          </section>
        </li>
        <li>
          {" "}
          <section>
            <h2>Meanings</h2>
            <Meanings />
          </section>
        </li>
        <li></li>
        <li></li>
      </ul>
    );
  } else {
    return null;
  }
}
