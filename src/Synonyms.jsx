import React from "react";

export default function Synonyms(props) {
  if (props.data.length > 0)
    return (
      <div>
        <h4>Synonyms</h4>
        {props.data}
      </div>
    );
}
