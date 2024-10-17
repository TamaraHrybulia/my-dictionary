import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultWord);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState();

  function load() {
    setLoaded(true);
    searchWord();
  }

  function showResults(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function searchWord() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(showResults);
  }

  function updateKeyWord(event) {
    setKeyword(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="type a word in English"
            onChange={updateKeyWord}
          ></input>
          <input
            type="submit"
            value="search"
            className="btn btn-primary"
          ></input>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
