import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import NewsBox from "./components/NewsBox";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<NewsBox key="general" pageSize={16} country="in" category="general"/>}></Route>
          <Route exact path="/business" element={<NewsBox key="business" pageSize={16} country="in" category="business"/>}></Route>
          <Route exact path="/entertainment" element={<NewsBox key="entertainment" pageSize={16} country="in" category="entertainment"/>}></Route>
          <Route exact path="/health" element={<NewsBox key="health" pageSize={16} country="in" category="health"/>}></Route>
          <Route exact path="/science" element={<NewsBox key="science" pageSize={16} country="in" category="science"/>}></Route>
          <Route exact path="/sports" element={<NewsBox key="sports" pageSize={16} country="in" category="sports"/>}></Route>
          <Route exact path="/technology" element={<NewsBox key="technology" pageSize={16} country="in" category="technology"/>}></Route>
        </Routes>
      </div>
      </Router>
    );
  }
}
