import React from "react";
import "./Antonyms.css";

export default function Antonyms(props) {
  if (props.data.length > 0)
    return (
      <div className="Antonyms">
        <h4>Antonyms</h4>
        <span className="antonymsExamples"> {props.data} </span>
      </div>
    );
}
