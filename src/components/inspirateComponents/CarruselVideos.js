import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

function CarruselVideos() {
  return (
    <div id="carrusel-videos">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <iframe
              className="d-block w-100"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/atqfZ3zKiGg"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="lego"
            />
          </div>
          <div className="carousel-item">
            <iframe
              className="d-block w-100"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qYCMHpdIWEQ"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="johnnie-walker"
            />
          </div>
          <div className="carousel-item">
            <iframe
              className="d-block w-100"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/WrdrewRGEz8"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="starbucks"
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              title="michael-jordan"
              className="d-block w-100"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/vtcJIX7fzZA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="carousel-item">
            <iframe
              className="d-block w-100"
              title="stan-lee"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dJvM0hRZRU4"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
          id="prev"
        >
          {/* <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span> */}
          <FontAwesomeIcon
            className="carousel-control-next-icon"
            aria-hidden="true"
            id="next-control"
            icon={faChevronCircleLeft}
            color="black"
            size={"lg"}
          />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
          id="next"
        >
          {/*  <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span> */}
          <FontAwesomeIcon
            className="carousel-control-next-icon"
            aria-hidden="true"
            id="previous-control"
            icon={faChevronCircleRight}
            color="black"
            size={"lg"}
          />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default CarruselVideos;
