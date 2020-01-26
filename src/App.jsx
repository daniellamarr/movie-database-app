import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./components";
import "semantic-ui-css/semantic.min.css";
import "./assets/scss/index.scss";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes />
        </Router>
      </>
    );
  }
}
