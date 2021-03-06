import React, { Component } from "react";
import HomeArticles from "./HomeArticles";
import Articles from "./Articles";
import Users from "./Users";
import SingleArticle from "./SingleArticle";
import { Route, Switch } from "react-router-dom";

class Main extends Component {
  render() {
    const { articles, users } = this.props;

    return (
      <Switch>
        <Route
          path="/articles/:article_id"
          render={props => (
            <SingleArticle articles={articles} users={users} {...props} />
          )}
        />
        <Route
          exact
          path="/articles"
          render={() => <Articles articles={articles} />}
        />
        <Route exact path="/users" render={() => <Users users={users} />} />
        <Route
          exact
          path="/"
          render={() => <HomeArticles homeArticles={articles} />}
        />
      </Switch>
    );
  }
}

export default Main;
