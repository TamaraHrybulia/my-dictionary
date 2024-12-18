import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  let synonyms = props.data.join(", ");

  if (props.data.length > 0)
    return (
      <div className="Synonyms">
        <h4>Synonyms</h4>
        <span className="synonymsExample"> {synonyms} </span>
      </div>
    );
}
