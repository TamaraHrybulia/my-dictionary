import React from "react";
import Phoenetic from "./Phoenetic";
import Origin from "./Origin";
import Meanings from "./Meanings";

export default function Results() {
  return (
    <ul>
      <li>
        <section>
          <h2>phonetic</h2>
          <Phoenetic />
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
}
