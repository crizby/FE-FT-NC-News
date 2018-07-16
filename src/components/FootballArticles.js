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

// import React from "react";
// import { Link } from "react-router-dom";

// const AllArticles = ({ articles }) => {
//   return (
//     <ul>
//       {articles
//         .filter(article => article.belongs_to === "football")
//         .map(article => {
//           const {
//             title,
//             body,
//             created_by,
//             comments,
//             votes,
//             belongs_to,
//             _id
//           } = article;
//           return (
//             <li key={article._id}>
//               <h3>{title}</h3>
//               <Link to={`/articles/${_id}`}>
//                 <h2>{title}</h2>
//               </Link>
//               <h4>{belongs_to}</h4>
//               <h4>By: {created_by.username}</h4>
//               <h4>{body}</h4>
//               <h4>
//                 Comments: {comments} | Votes: {votes}
//               </h4>
//               <h4>Article ID: {_id}</h4>
//               <hr />
//             </li>
//           );
//         })}
//     </ul>
//   );
// };

// export default AllArticles;
