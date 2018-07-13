import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ articles }) => {

  return <ul>
    {articles.map(article => {
      const { title, body, created_by, comments, votes, belongs_to, _id } = article
      return <li key={article._id}>
        <h3>{title}</h3>
        <Link to={`/articles/${_id}`}><h2>{title}</h2></Link>
        <h4>{belongs_to}</h4>
        <h4>By: {created_by}</h4>
        <h4>{body}</h4>
        <h4>Comments: {comments} | Votes: {votes}</h4>
        <h4>Article ID: {_id}</h4>
        <hr />

      </li>

    })}
  </ul>
}


export default Articles;