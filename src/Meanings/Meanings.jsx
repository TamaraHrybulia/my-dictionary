import React from "react";
import Synonyms from "../Synonyms/Synonyms";
import Antonyms from "../Antonyms/Antonyms";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h3>{props.meaning.partOfSpeech}</h3>

      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definitions" key={index}>
            <p>{definition.definition}</p>

            <i className="examples">{definition.example}</i>
          </div>
        );
      })}

      <Synonyms data={props.meaning.synonyms} />
      <Antonyms data={props.meaning.antonyms} />
    </div>
  );
}
