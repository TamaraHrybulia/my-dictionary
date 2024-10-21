import React from "react";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definitions">
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>{definition.definition}</p>
              <br />
              <i>{definition.example}</i>
              <br />
            </div>
          );
        })}
      </div>

      <Synonyms data={props.meaning.synonyms} />
      <Antonyms data={props.meaning.antonyms} />
    </div>
  );
}
