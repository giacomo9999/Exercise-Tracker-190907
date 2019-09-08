import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h3>ExTracker</h3>
        </Link>
        <Link to="/">
          <h3>Exercises</h3>
        </Link>
        <Link to="/create">
          <h3>Add Log Entry</h3>
        </Link>
        <Link to="/user">
          <h3>Add User</h3>
        </Link>
      </div>
    );
  }
}

export default Navbar;
