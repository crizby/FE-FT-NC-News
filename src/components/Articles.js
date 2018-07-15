import React, { Component } from "react";
import AllArticles from "./AllArticles";
import CodingArticles from "./CodingArticles";
import CookingArticles from "./CookingArticles";
import FootballArticles from "./FootballArticles";

class Articles extends Component {
  state = {
    filterSetting: "all"
  };

  render() {
    const { articles } = this.props;
    return (
      <div>
        <button type="button" onClick={() => this.handleFilterClick("all")}>
          All
        </button>
        <button type="button" onClick={() => this.handleFilterClick("coding")}>
          Coding
        </button>
        <button type="button" onClick={() => this.handleFilterClick("cooking")}>
          Cooking
        </button>
        <button
          type="button"
          onClick={() => this.handleFilterClick("football")}
        >
          Football
        </button>

        {this.state.filterSetting === "all" ? (
          <AllArticles articles={articles} />
        ) : this.state.filterSetting === "coding" ? (
          <CodingArticles articles={articles} />
        ) : this.state.filterSetting === "cooking" ? (
          <CookingArticles articles={articles} />
        ) : (
          <FootballArticles articles={articles} />
        )}
      </div>
    );
  }

  handleFilterClick = filter => {
    this.setState({
      filterSetting: filter
    });
  };
}

export default Articles;
