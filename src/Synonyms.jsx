import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data.length > 0)
    return (
      <div className="Synonyms">
        <h4>Synonyms</h4>
        <span className="synonymsExample"> {props.data} </span>
      </div>
    );
}
