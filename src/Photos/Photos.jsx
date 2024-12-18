import React, { useState } from "react";
import "./Photos.css";

export default function Photos(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (props.photos) {
    let slidePhotoNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.photos.length);
    };

    let slidePhotoPrev = () => {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + props.photos.length) % props.photos.length
      );
    };

    let getVisiblePhotos = () => {
      let visiblePhotos = [];
      for (let i = 0; i < 3; i++) {
        let index = (currentIndex + i) % props.photos.length;
        visiblePhotos.push(props.photos[index]);
      }
      return visiblePhotos;
    };

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
          <div className="sliderLine">
            {getVisiblePhotos().map(function (photo, index) {
              return (
                <img
                  key={index}
                  src={photo.src.tiny}
                  alt={photo.alt}
                  className="photoItem"
                />
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
