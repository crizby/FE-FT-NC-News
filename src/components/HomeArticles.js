import React from 'react';
import { Link } from 'react-router-dom';

const HomeArticles = ({ homeArticles }) => {

  return <ul>
    {[...homeArticles].sort((a, b) => {
      return b.comments - a.comments;
    }).slice(0, 5).map(article => {
      const { title, body, created_by, comments, votes, belongs_to, _id } = article

      return <li key={article._id}>
        <Link to={`/articles/${_id}`}><h2>{title}</h2></Link>
        <h4>{belongs_to}</h4>
        <h4>By: {created_by.username}</h4>
        <h4>{body}</h4>
        <h4>Comments: {comments} | Votes: {votes}</h4>
        <hr />

      </li>

    })}
  </ul>
}


export default HomeArticles;