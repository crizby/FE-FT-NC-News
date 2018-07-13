// componentDidMount() {
//   console.log(this.props.history);
//   api
//     .fetchArticle(this.props.match.params.articleId)
//     .then(article => {
//       this.setState({ articleI })
//     })
//     .catch(err => {
//       // this.props.history.push('/404');
//       this.setState({
//         invalidUrl: true
//       })
//     })
// }
// // in render, before return
// if (this.state.invalidUrl) return <Redirect to="/404" />

//   <button onClick={() => this.handleVoteClick('up')}>Vote Up</button>