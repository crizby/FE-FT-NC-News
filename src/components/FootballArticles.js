import React from "react";
import { Link } from "react-router-dom";
import "./Articles.css";

const FootballArticles = ({ articles }) => {
  return (
    <ul className="articlesList">
      {articles
        .filter(article => article.belongs_to === "football")
        .map(article => {
          const {
            title,
            body,
            created_by,
            comments,
            votes,
            belongs_to,
            _id
          } = article;
          return (
            <div className="listDiv">
              <li key={article._id} className="listItem">
                <Link to={`/articles/${_id}`}>
                  <h3 className="title">{title}</h3>
                </Link>
                <p className="body">
                  Category:{" "}
                  {belongs_to
                    .slice(0, 1)
                    .toUpperCase()
                    .concat(belongs_to.slice(1))}
                </p>
                <p className="body">By: {created_by.username}</p>
                <p className="body">{body}</p>
                <h3 className="listFooter">
                  Comments: {comments} | Votes: {votes}
                </h3>
              </li>
            </div>
          );
        })}
    </ul>
  );
};

export default FootballArticles;
