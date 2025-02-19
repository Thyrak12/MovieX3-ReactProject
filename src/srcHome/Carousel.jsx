import React, { useEffect } from 'react';

import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import $ from "jquery";

export default function MovePic() {
  const images = [
    "https://ntvb.tmsimg.com/assets/p10781465_b_h8_ay.jpg?w=960&h=540",
    "https://images.thedirect.com/media/article_full/spid-blu-ray.jpg?imgeng=/cmpr_60/w_auto",
    "https://1.vikiplatform.com/c/40913c/35f724a5fe.jpg?x=b"
  ];

  useEffect(() => {
    // Initialize the carousel once the component is mounted
    $(".carousel").carousel();

    // Cleanup (if needed) to avoid memory leaks
    return () => {
      $(".carousel").carousel("destroy");
    };
  }, []);

  return (
    <div className="carousel">
      {images.map((image, index) => (
        <a key={index} className="carousel-item" href={`#slide${index + 1}`}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </a>
      ))}
    </div>
  );
}
