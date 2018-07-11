import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeArticles from './components/HomeArticles';
import Users from './components/Users'
import { Route } from 'react-router-dom'


class App extends Component {
  state = {
    articles: [],
    users: []
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <Route exact path="/" render={() => <HomeArticles homeArticles={this.state.articles} />} />
        <Route path="/users" render={() => <Users users={this.state.users} />} />
      </div>
    );
  }

  componentDidMount = async () => {
    let articles;
    let users;
    try {
      articles = await this.fetchArticles()
      users = await this.fetchUsers()
    }
    catch (e) {
      articles = []
      users = []
    }
    this.setState({ articles, users })
  }

  fetchArticles = async () => {
    const { data } = await axios.get('https://cb-nc-news.herokuapp.com/api/articles')
    return data.articles
  }

  fetchUsers = async () => {
    const { data } = await axios.get('https://cb-nc-news.herokuapp.com/api/users')
    return data.users
  }



}

export default App;
