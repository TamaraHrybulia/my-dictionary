import React from "react";
import "./CountrySign.css";

export default function CountrySign(props) {
  let code = require("./flags/usa.png");

  let audioUrl = props.audio;

  switch (true) {
    case audioUrl.includes(`${props.keyWord.trim()}-us.mp3`):
      code = require("./flags/usa.png");
      break;
    case audioUrl.includes(`${props.keyWord.trim()}-au.mp3`):
      code = require("./flags/australia.png");
      break;
    case audioUrl.includes(`${props.keyWord.trim()}-uk.mp3`):
      code = require("./flags/unitedKindom.png");
      break;
    case audioUrl.includes(`${props.keyWord.trim()}-ca.mp3`):
      code = require("./flags/canada.png");
      break;
  }

  return (
    <div className="CountrySign">
      <img src={code} alt="country flag icon" />
    </div>
  );
}
