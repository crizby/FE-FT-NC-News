import React from 'react';

const HomeArticles = ({ homeArticles }) => {

  return <ul>
    {homeArticles.map(article => {
      const { title, body, created_by, comments, votes } = article
      return <li key={article._id}>
        <h3>{title}</h3>
        <h4>By: {created_by}</h4>
        <h4>{body}</h4>
        <h4>Comments: {comments} | Votes: {votes}</h4>
        <hr />

      </li>

    })}
  </ul>
}


export default HomeArticles;