import React, { Component } from "react";
import axios from "axios";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: []
  };

  componentDidMount() {
    axios
      .get(
        `https://cb-nc-news.herokuapp.com/api/articles/${
          this.props.match.params.article_id
        }`
      )
      .then(res => {
        const { article } = res.data;
        this.setState({ article });
      });
    axios
      .get(
        `https://cb-nc-news.herokuapp.com/api/articles/${
          this.props.match.params.article_id
        }/comments`
      )
      .then(res => {
        const { comments } = res.data;
        this.setState({ comments });
      });
  }

  render() {
    return (
      <div>
        <h2>{this.state.article.title}</h2>
        <h3>{}</h3>
        <h3>{this.state.article.belongs_to}</h3>
        <h4>{this.state.article.body}</h4>
        <h4>
          Votes : {this.state.article.votes}{" "}
          <button onClick={() => this.handleArticleVoteClick("up")}>
            Vote Up
          </button>
          <button onClick={() => this.handleArticleVoteClick("down")}>
            Vote Down
          </button>
        </h4>
        <br />
        <hr />
        <h3>Comments</h3>

        <ul>
          {this.state.comments.map((comment, i) => {
            const { body, created_by, votes, _id } = comment;

            return (
              <li key={_id}>
                <h3>By: {created_by.username}</h3>
                <h4>{body}</h4>
                <h4>
                  Votes: {votes}{" "}
                  <button
                    onClick={() => this.handleCommentVoteClick("up", _id)}
                  >
                    Vote Up
                  </button>
                  <button
                    onClick={() => this.handleCommentVoteClick("down", _id)}
                  >
                    Vote Down
                  </button>
                </h4>
                <hr />
              </li>
            );
          })}
        </ul>
        <p>Add a comment!</p>
        <input type="text" />
        <button type="button">Post Comment</button>
      </div>
    );
  }

  handleArticleVoteClick = direction => {
    direction === "up"
      ? axios
          .put(
            `https://cb-nc-news.herokuapp.com/api/articles/${
              this.props.match.params.article_id
            }?vote=up`
          )
          .then(
            this.setState({
              article: {
                ...this.state.article,
                votes: this.state.article.votes + 1
              }
            })
          )
      : axios
          .put(
            `https://cb-nc-news.herokuapp.com/api/articles/${
              this.props.match.params.article_id
            }?vote=down`
          )
          .then(
            this.setState({
              article: {
                ...this.state.article,
                votes: this.state.article.votes - 1
              }
            })
          );
  };

  handleCommentVoteClick = (direction, id) => {
    direction === "up"
      ? axios
          .put(`https://cb-nc-news.herokuapp.com/api/comments/${id}?vote=up`)
          .then(
            this.setState({
              comments: this.state.comments.map(comment => {
                if (comment._id === id) {
                  return { ...comment, vote: comment.votes + 1 };
                }
                return comment;
              })
            })
          )
      : axios
          .put(`https://cb-nc-news.herokuapp.com/api/comments/${id}?vote=down`)
          .then(
            this.setState({
              comments: this.state.comments.map(comment => {
                if (comment._id === id) {
                  return { ...comment, vote: comment.votes + 1 };
                }
                return comment;
              })
            })
          );
  };
}

export default SingleArticle;
