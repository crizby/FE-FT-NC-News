import React, { Component } from 'react';
import axios from 'axios';


class SingleUser extends Component {

  state = {
    user: {},
    comments: {}
  }

  componentDidMount() {
    axios.get(`https://cb-nc-news.herokuapp.com/api/users/${this.props.match.params.username}`)
      .then(res => {
        const { user } = res.data
        this.setState({ user })
      })
    axios.get(`https://cb-nc-news.herokuapp.com/api/comments`)
      .then(res => {
        const { comments } = res.data
        this.setState({ comments })
      })
  }

  render() {

    return (
      <div>
        {/* <h2>{this.state.user.title}</h2>
        <h3>{this.state.article.belongs_to}</h3>
        <h4>{this.state.article.body}</h4>
        <h4>Votes : {this.state.article.votes}</h4>
        <br />
        <hr />
        <h3>Comments</h3>
        {console.log(this.state.comments)} */}
      </div>
    )
  }
}

export default SingleUser;