import React, { Component } from "react";
import axios from "axios";
import "./SingleArticle.css";
import activeUser from "../Context.js";

class SingleArticle extends Component {
  state = {
    article: {},
    comments: [],
    newMessage: ""
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
      <div className="singleArticleContainer">
        <div className="singleArticle">
          <h2 className="singleArticleTitle">{this.state.article.title}</h2>
          <h4 className="body">{this.state.article.belongs_to}</h4>
          <h4 className="body">{this.state.article.body}</h4>
          <h4 className="body">
            Votes : {this.state.article.votes}{" "}
            <button
              className="articleVoteButton"
              onClick={() => this.handleArticleVoteClick("up")}
            >
              Vote Up
            </button>
            <button
              className="articleVoteButton"
              onClick={() => this.handleArticleVoteClick("down")}
            >
              Vote Down
            </button>
          </h4>
          <br />
          <hr />
          <h2 className="singleArticleTitle">Comments</h2>
          <br />
          <ul>
            {this.state.comments.map((comment, i) => {
              const { body, created_by, votes, _id } = comment;

              return (
                <li key={_id}>
                  <h3>By: {created_by.username}</h3>
                  <br />
                  <h4>{body}</h4>
                  <br />
                  <h4>
                    Votes: {votes}{" "}
                    <button
                      className="voteButton"
                      onClick={() => this.handleCommentVoteClick("up", _id)}
                    >
                      Vote Up
                    </button>
                    <button
                      className="voteButton"
                      onClick={() => this.handleCommentVoteClick("down", _id)}
                    >
                      Vote Down
                    </button>
                    <button
                      className="voteButton"
                      onClick={() => this.handleDeleteComment(_id)}
                    >
                      Delete
                    </button>
                  </h4>
                  <hr />
                </li>
              );
            })}
          </ul>
          <br />
          <h2 className="singleArticleTitle">Post a comment!</h2>
          <br />
          <activeUser.Consumer>
            {activeUser => <h3>By: {activeUser}</h3>}
          </activeUser.Consumer>
          <br />
          <input
            type="text"
            className="inputField"
            onChange={this.handleChange}
            value={this.state.newMessage}
          />
          <button
            type="button"
            className="postButton"
            onClick={this.handlePost}
          >
            Post Comment
          </button>
        </div>
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
                  return { ...comment, votes: comment.votes + 1 };
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
                  return { ...comment, votes: comment.votes - 1 };
                }
                return comment;
              })
            })
          );
  };

  handleChange = event => {
    this.setState({
      newMessage: event.target.value
    });
  };

  handlePost = () => {
    const newComment = {
      body: this.state.newMessage,
      belongs_to: this.state.article.belongs_to,
      created_by: "5b33402a8dacc0147263ae4f"
    };
    axios
      .post(
        `https://cb-nc-news.herokuapp.com/api/articles/${
          this.props.match.params.article_id
        }/comments`,
        newComment
      )
      .then(
        this.setState({
          comments: [
            ...this.state.comments,
            { ...newComment, votes: 0, created_by: "grumpy19" }
          ],
          newMessage: ""
        })
      );
  };

  handleDeleteComment = id => {
    axios.delete(`https://cb-nc-news.herokuapp.com/api/comments/${id}`).then(
      this.setState({
        comments: this.state.comments.filter(comment => comment._id !== id)
      })
    );
  };
}

export default SingleArticle;
