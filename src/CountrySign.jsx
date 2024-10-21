import React from "react";

export default function CountrySign(props) {
  let sign;

  let audioUrl = props.audio;

  switch (true) {
    case audioUrl.includes(`${props.keyWord.trim()}-us.mp3`):
      sign = "US";
      break;
    case audioUrl.includes(`${props.keyWord.trim()}-au.mp3`):
      sign = "AU";
      break;
    case audioUrl.includes(`${props.keyWord.trim()}-uk.mp3`):
      sign = "UK";
      break;
    case audioUrl.includes(`${props.keyWord.trim()}-ca.mp3`):
      sign = "CA";
      break;
  }

  return sign;
}
