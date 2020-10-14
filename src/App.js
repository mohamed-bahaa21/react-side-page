import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Draggable from 'react-draggable';

import "./App.css"

import BookOne from "./components/BookOne.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-header">
          <Link to="/"><h1>Main</h1></Link>
          <Link to="/book-one"><h1>Book One</h1></Link>
        </div>

        <Draggable axis="x">
          <div className="side-page noselect">
            <Route exact path="/book-one" component={BookOne} />
          </div>
        </Draggable>
      </Router>
    );
  }
}

export default App;