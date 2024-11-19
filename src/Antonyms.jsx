import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  let antonyms = props.data.join(", ");

  if (props.data.length > 0)
    return (
      <div className="Antonyms">
        <h4>Antonyms</h4>
        <span className="antonymsExamples"> {antonyms} </span>
      </div>
    );
}
