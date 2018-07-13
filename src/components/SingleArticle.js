import React, { Component } from 'react';
import axios from 'axios';


class SingleArticle extends Component {

  state = {
    article: {},
    comments: {}
  }

  componentDidMount() {
    axios.get(`https://cb-nc-news.herokuapp.com/api/articles/${this.props.match.params.article_id}`)
      .then(res => {
        const { article } = res.data
        this.setState({ article })
      })
    axios.get(`https://cb-nc-news.herokuapp.com/api/articles/${this.props.match.params.article_id}/comments`)
      .then(res => {
        const { comments } = res.data
        this.setState({ comments })
      })
  }

  render() {

    return (
      <div>
        <h2>{this.state.article.title}</h2>
        <h3>{this.state.article.belongs_to}</h3>
        <h4>{this.state.article.body}</h4>
        <h4>Votes : {this.state.article.votes}</h4>
        <br />
        <hr />
        <h3>Comments</h3>
        {/* <ul>
          {this.state.comments.map(comment => {
            const { body, created_by, votes } = comment
            return <li key={comment._id}>
              <h3>By: {created_by}</h3>
              <h4>{body}</h4>
              <h4>Votes: {votes}</h4>
              <hr />

            </li>

          })}
        </ul> */}
      </div>
    )
  }


  // fetchArticle = async () => {
  //   const { data } = await axios.get(`https://cb-nc-news.herokuapp.com/api/articles/${this.match.params.article_id}`)
  //   return data.article
  // }

}

export default SingleArticle;