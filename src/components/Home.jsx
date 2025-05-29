import React, { Component } from 'react'
import NewzCard from './NewzCard'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
export class Home extends Component {
  
  static defaultProps = {
    country: 'in',
    category: 'general'
  }

  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string,
    setProgress: PropTypes.func
  }
  articles = [];


  constructor() {
    
    super()
    
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 9,
    }
  }

  handleNextClick = async () => {
    this.props.setProgress(0);
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
      return;
    }
    this.setState({ loading: true });
    let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ed399b3de644b4b97d628df57c5d56e&page=${this.state.page + 1}&pageSize=10`;
    let data = await fetch(api);
    let pdata = await data.json();
    this.articles = pdata.articles;
    this.props.setProgress(30);
    this.setState({
      articles: this.articles,
      page: this.state.page + 1,
      loading: false
    });
    this.props.setProgress(100);
  }

  handlePreviousClick = async () => {
    this.props.setProgress(0);
    if (this.state.page - 1 < 1) {
      return;
    }
    this.setState({ loading: true });
    let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ed399b3de644b4b97d628df57c5d56e&page=${this.state.page - 1}&pageSize=10`;
    console.log("API URL:", api);
    let data = await fetch(api);
    let pdata = await data.json();
    this.props.setProgress(30);
    this.articles = pdata.articles;
    this.setState({
      articles: this.articles,
      page: this.state.page - 1,
      loading: false
    });
    this.props.setProgress(100);

  }
  async componentDidMount() {
    this.props.setProgress(10);
      let api=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ed399b3de644b4b97d628df57c5d56e&page=1&pageSize=10`;
      this.setState({loading: true});
      let data = await fetch(api);
      this.props.setProgress(30);
      let pdata = await data.json();
      this.props.setProgress(50);
      this.articles = pdata.articles;
      console.log(pdata);
      this.setState({loading: false, articles: this.articles, totalResults: pdata.totalResults, page: 1});
      this.props.setProgress(100);
  }

  async componentDidUpdate(prevProps) {
    if (
      prevProps.country !== this.props.country ||
      prevProps.category !== this.props.category
    ) {
      
      let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ed399b3de644b4b97d628df57c5d56e&page=1&pageSize=10`;
      this.setState({ loading: true });
      let data = await fetch(api);
      let pdata = await data.json();
      this.articles = pdata.articles;
      console.log(pdata);
      this.setState({
        loading: false,
        articles: this.articles,
        totalResults: pdata.totalResults,
        page: 1
      });
    }
    
  }

  render() {
    return (
      <>
      <div
        className="container my-5"
        style={{
        marginTop: 0,
        paddingTop: "80px", // adjust this value to match your navbar height
        }}
      >
        <h1 className="display-4 fw-bold text-center text-primary mb-3">
        Welcome to <span className="text-info">NewzApp</span>
        </h1>
        <p className="lead text-center text-secondary mb-5">
        Stay updated with the latest{" "}
        <span className="text-capitalize">{this.props.category}</span> headlines from around the world.
        </p>
        <h2 className="text-center mb-4">Latest News</h2>
        {this.state.loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
          <Spinner />
        </div>
        ) : (
        <div className="row">
          {this.state.articles.length === 0 ? (
          <div className="col-12 text-center text-muted">No news articles found.</div>
          ) : (
          this.state.articles.map((element) => (
            <div className="col-md-4 mb-4" key={element.url}>
            <NewzCard
              title={element.title}
              discription={element.description}
              imageUrl={element.urlToImage}
              newsUrl={element.url}
              author={element.author || "Unknown"}
              time={element.publishedAt}
            />
            </div>
          ))
          )}
        </div>
        )}
        <div className="d-flex justify-content-between align-items-center my-4 px-2">
        <button
          className="btn btn-outline-primary"
          onClick={this.handlePreviousClick}
          disabled={this.state.page < 2 || this.state.loading}
        >
          &larr; Previous
        </button>
        <span className="text-secondary">
          Page <strong>{this.state.page}</strong> of <strong>{Math.max(1, Math.ceil(this.state.totalResults / 10))}</strong>
        </span>
        <button
          className="btn btn-outline-primary"
          onClick={this.handleNextClick}
          disabled={this.state.page >= Math.ceil(this.state.totalResults / 10) || this.state.loading}
        >
          Next &rarr;
        </button>
        </div>
      </div>
      </>
    )
  }
}

export default Home
