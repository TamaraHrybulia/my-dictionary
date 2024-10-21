import React from "react";

export default function Antonyms(props) {
  if (props.data.length > 0)
    return (
      <div>
        <h4>Antonyms</h4>
        {props.data}
      </div>
    );
}
