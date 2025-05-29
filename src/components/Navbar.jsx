import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3 fixed-top">
        <div className="container-fluid">
        
        <a className="navbar-brand fw-bold fs-3" href="#" style={{ letterSpacing: '2px' }}>
          <span role="img" aria-label="news">📰</span> NewzApp
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <Link className="nav-link active fw-semibold" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/entertainment">Entertainment</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/business">Business</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/technology">Technology</Link>
          </li>
          <li className="nav-item mx-2">
            <Link className="nav-link fw-semibold" to="/sports">Sports</Link>
          </li>
          </ul>
        </div>
        </div>
      </nav>
      </div>
    )
  }
}
