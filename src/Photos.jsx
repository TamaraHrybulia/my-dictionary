import React, { useState } from "react";
import "./Photos.css";

export default function Photos(props) {
  let [position, setPosition] = useState(0);

  function slidePhotoPrev() {
    setPosition((currentPosition) => {
      if (currentPosition >= 0) {
        return 0;
      }
      return currentPosition + 684;
    });
  }

  function slidePhotoNext() {
    setPosition((currentPosition) => {
      if (currentPosition <= -1368) {
        return -1368;
      }
      return currentPosition - 684;
    });
  }

  if (props.photos) {
    return (
      <section className="Photos">
        <div className="arrowButtons">
          <button className="prev" onClick={slidePhotoPrev}>
            ◀
          </button>
          <button className="next" onClick={slidePhotoNext}>
            ▶
          </button>
        </div>
        <br />
        <div className="slider">
          <div className="sliderLine" style={{ left: `${position}px` }}>
            {props.photos.map(function (photo, index) {
              return (
                <span className="photoItem" key={index}>
                  <img src={photo.src.tiny} alt={photo.alt} />
                </span>
              );
            })}
          </div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}
