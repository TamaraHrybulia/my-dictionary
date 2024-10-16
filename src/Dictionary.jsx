import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState("mother");
  function searchWord(event) {
    event.preventDefault();
    alert(`${word}`);
  }

  function updateWord(event) {
    setWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={searchWord}>
        <input
          type="search"
          placeholder="type a word in English"
          onChange={updateWord}
        ></input>
        <input type="submit" value="search" className="btn btn-primary"></input>
      </form>
      <Results />
    </div>
  );
}
