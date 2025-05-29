import React, { Component } from 'react'

//  3ed399b3de644b4b97d628df57c5d56e


//https://newsapi.org/v2/top-headlines?country=us&apiKey=3ed399b3de644b4b97d628df57c5d56e

export class NewzCard extends Component {

  render() {
    let { title, discription, newsUrl, imageUrl } = this.props;
    let { author, time } = this.props;
    return (
      <>
      <div className="card my-3" style={{ width: "18rem", margin: "auto" }}>
        <img
        src={imageUrl || "/image.png"}
        className="card-img-top"
        alt="news"
        style={{ height: "180px", objectFit: "cover" }}
        />
        <div className="card-body">
        <h5 className="card-title">{title ? title.slice(0, 60) : "No Title"} {title?.length > 60 && "..."}</h5>
        <p className="card-text">{discription ? discription.slice(0, 100) : "No Description Available"}</p>
        <p className="card-text">
          <small className="text-muted">
          By {author ? author : "Unknown"} on {time ? new Date(time).toLocaleString() : "Unknown time"}
          </small>
        </p>
        <a
          href={newsUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Read More
        </a>
        </div>
      </div>
      </>
    )
  }
}

export default NewzCard;
