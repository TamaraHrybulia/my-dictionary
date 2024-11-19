import React, { useState } from "react";
import { createClient } from "pexels";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyWord, setKeyword] = useState(props.defaultWord);
  let [loaded, setLoaded] = useState(false);
  let [results, setResults] = useState(null);
  let [pexelsPhotos, setPexelsPhotos] = useState(null);

  function load() {
    setLoaded(true);
    searchWord();
  }

  function showDictionaryResults(response) {
    console.log(response.data);
    setResults(response.data);
  }

  function showPexelsPhotos(response) {
    setPexelsPhotos(response.photos);
  }

  function searchWord() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(url).then(showDictionaryResults);

    const client = createClient(
      "rIfpdtEJ19JDshrjT8MNiQmdG3GiBWFokO1edu2SXtxbSnNIofR4hIxC"
    );
    client.photos
      .search({ query: keyWord, per_page: 9, size: "tiny" })
      .then(showPexelsPhotos);
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
      <div className="Dictionary ">
        <section className="form-container">
          <form onSubmit={handleSearch}>
            <input
              className="word-input"
              type="search"
              placeholder="type a word in English"
              onChange={updateKeyWord}
            ></input>

            <input type="submit" value="search" className="mainBtn"></input>
          </form>
        </section>
        <Results results={results} />
        <Photos photos={pexelsPhotos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
