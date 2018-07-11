import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Navbar from './components/Navbar';
import HomeArticles from './components/HomeArticles';
import Users from './components/Users'
import { Route } from 'react-router-dom'


class App extends Component {
  state = {
    articles: []
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <HomeArticles homeArticles={this.state.articles} />
        <Route path="/users" component={Users} />
      </div>
    );
  }

  componentDidMount = async () => {
    let articles;
    try {
      articles = await this.fetchArticles()
    }
    catch (e) {
      articles = []
    }
    this.setState({ articles })
  }

  fetchArticles = async () => {
    const { data } = await axios.get('https://cb-nc-news.herokuapp.com/api/articles')
    return data.articles
  }




}

export default App;
