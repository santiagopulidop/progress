import React from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Blog = ({ articles }) => {
  const { id } = useParams();
  let article = articles[id];
  const { title, description, urlToImage, url } = article;
  return (
    <div className="container blog d-flex flex-column">
      <div className="card">
        <Link to="/blog" className="btn-back">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
        <img className="card-img-top banner" src={urlToImage} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a
            className="btn btn-info btn-fuente"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fuente
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
