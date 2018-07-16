import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";
import activeUser from "./Context.js";

class App extends Component {
  state = {
    articles: [],
    users: []
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Navbar />
        <activeUser.Provider value="grumpy19">
          <Main articles={this.state.articles} users={this.state.users} />
        </activeUser.Provider>
        <footer className="footer">2018</footer>
      </div>
    );
  }

  componentDidMount = async () => {
    let articles;
    let users;
    try {
      articles = await this.fetchArticles();
      users = await this.fetchUsers();
    } catch (e) {
      articles = [];
      users = [];
    }
    this.setState({ articles, users });
  };

  fetchArticles = async () => {
    const { data } = await axios.get(
      "https://cb-nc-news.herokuapp.com/api/articles"
    );
    return data.articles;
  };

  fetchUsers = async () => {
    const { data } = await axios.get(
      "https://cb-nc-news.herokuapp.com/api/users"
    );
    return data.users;
  };
}

export default App;
