import './App.css'
import LoadingBar from 'react-top-loading-bar'

import Navbar from './components/Navbar.jsx'

import { Route, Routes, BrowserRouter as Router, Link }
  from 'react-router-dom'


  // import components
import React, { Component } from 'react'
import Home from './components/Home.jsx'


export default class App extends Component {
  // No additional state or logic needed here.
  setProgress = (progress) => {
    this.setState({ progress });
  }

  constructor() {
    super();
    this.state = {
      country: 'us',
      progress: 0
      // No state needed for this component.
    };
  }


  render() {
    return (
      <>

        <LoadingBar
          color='#f11946'
          height={5}
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
          onStart={() => this.setProgress(10)}
        ></LoadingBar>
        <select name="" id="" onChange={(e) => {
          this.setState({ country: e.target.value });
        }}>
          <option value="us">USA</option>    
          <option value="in">India</option>
        </select>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home setProgress={this.setProgress} country={this.state.country} category="general" />} />
            <Route path="/entertainment" element={<Home setProgress={this.setProgress} country={this.state.country} category="entertainment" />} />
            <Route path="/business" element={<Home setProgress={this.setProgress} country={this.state.country} category="business" />} />
            <Route path="/technology" element={<Home setProgress={this.setProgress} country={this.state.country} category="technology" />} />
            <Route path="/sports" element={<Home setProgress={this.setProgress} country={this.state.country} category="sports" />} />
          </Routes>
          
        </Router>
      </>
    )
  }
}

