import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        {props.photos.map(function (photo, index) {
          return (
            <div key={index}>
              <img src={photo.src.small} alt={photo.alt} />{" "}
            </div>
          );
        })}
        <a
          href="https://www.pexels.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Photos provided by Pexels
        </a>
      </div>
    );
  } else {
    return null;
  }
}
