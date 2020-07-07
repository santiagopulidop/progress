import React from "react";
import CardBlog from "./CardBlog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const ContenedorBlogs = ({ articles }) => {
  //Sort articles in triplets
  const sortArticles = (articles) => {
    let organizedArr = [];
    for (let i = 0; i < articles.length; i += 3) {
      organizedArr.push(articles.slice(i, i + 3));
    }
    return organizedArr;
  };
  return (
    <div className="container carousel-container">
      <a
        className="carousel-control-prev"
        href="#newsCarousel"
        role="button"
        data-slide="prev"
      >
        <FontAwesomeIcon
          className="carousel-control-prev-icon"
          icon={faChevronCircleLeft}
          size="xl"
          id="prev"
        />
        <span className="sr-only">Previous</span>
      </a>
      <div id="newsCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {sortArticles(articles).map((value, index) => {
            return (
              <div
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
                key={index}
              >
                <div className="d-flex cards-container">
                  {value.map((value, index) => {
                    return <CardBlog article={value} key={index} id={index} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <a
        className="carousel-control-next"
        href="#newsCarousel"
        role="button"
        data-slide="next"
      >
        <FontAwesomeIcon
          className="carousel-control-next-icon"
          icon={faChevronCircleRight}
          size="xl"
          id="next"
        />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default ContenedorBlogs;
