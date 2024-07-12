import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsBox from './components/NewsBox';

export default class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <NewsBox/>
      </div>

    )
  }
}