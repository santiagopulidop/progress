import React, { useState } from "react";
import DateFormat from "dateformat";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShareAlt, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";
import ShareModal from "./ShareModal";

const CardBlog = ({ article }) => {
  const { title, description, publishedAt, urlToImage, id } = article;
  const { url } = useRouteMatch();
  const [loved, setLoved] = useState(false);
  const [starred, setStarred] = useState(false);

  //Toggle para cambiar estado y estilos de botones loved and starred
  const toggleInteractionBtn = (event) => {
    const { classList } = event.currentTarget;
    if (classList.contains("fa-heart")) {
      loved ? setLoved(false) : setLoved(true);
    } else if (classList.contains("fa-star")) {
      starred ? setStarred(false) : setStarred(true);
    }
  };

  return (
    <div className="card ">
      <Link to={`${url}/article/${id}`} className="card-blog">
        <img src={urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{description}</p>
          <h6 className="card-subtitle text-muted">
            <span className="badge badge-info">
              {DateFormat(publishedAt, "mediumDate")}
            </span>
          </h6>
        </div>
      </Link>
      <div className=" justify-content-end interactions">
        <FontAwesomeIcon
          className={`icon ${loved ? "loved" : null}`}
          icon={faHeart}
          onClick={toggleInteractionBtn}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Like"
        />

        <FontAwesomeIcon
          className="icon share"
          icon={faShareAlt}
          data-toggle="modal"
          data-target={`#shareModal${id}`}
          data-placement="bottom"
          title="Compartir"
        />

        <ShareModal id={id} url={article.url} />

        <FontAwesomeIcon
          className={`icon ${starred ? "starred" : null}`}
          icon={faStar}
          onClick={toggleInteractionBtn}
          data-toggle="tooltip"
          data-placement="bottom"
          title="Destacar"
        />
      </div>
    </div>
  );
};

export default CardBlog;
