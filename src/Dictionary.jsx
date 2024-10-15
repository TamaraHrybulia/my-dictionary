import React from "react";
import Results from "./Results";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form>
        <input type="search" placeholder="type a word in English"></input>
        <input type="submit" value="search" className="btn btn-primary"></input>
      </form>
      <Results />
    </div>
  );
}
