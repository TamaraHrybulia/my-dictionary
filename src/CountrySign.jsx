import React from "react";

export default function CountrySign(props) {
  if (
    props.audio ===
    `https://api.dictionaryapi.dev/media/pronunciations/en/${props.keyWord.trim()}-us.mp3`
  ) {
    return <span>US</span>;
  } else {
    console.log(props.keyWord);
    return null;
  }
}
