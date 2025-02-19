import React, { useState } from "react";
import "./MovingPic.css"
import { Carousel, initMDB } from "mdb-ui-kit";
initMDB({ Carousel });

const FadePictures = () => {
  const images = [
    "https://ntvb.tmsimg.com/assets/p10781465_b_h8_ay.jpg?w=960&h=540",
    "https://images.thedirect.com/media/article_full/spid-blu-ray.jpg?imgeng=/cmpr_60/w_auto",
    "https://1.vikiplatform.com/c/40913c/35f724a5fe.jpg?x=b"
  ];

  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-mdb-ride="carousel" data-mdb-carousel-init>
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCaptions"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={images[0]} class="d-block w-100" alt="Wild Landscape" />
          <div class="carousel-caption d-none d-md-block">
            <h5>The Flash</h5>
            <p>Flash is the fastest man alive on the planet earth. Who will be his rival in this episode?</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={images[1]} class="d-block w-100" alt="Camera" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={images[2]} class="d-block w-100" alt="Exotic Fruits" />
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCaptions" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FadePictures;
