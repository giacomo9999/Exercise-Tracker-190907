import React, { Component } from "react";
import axios from "axios";

class CreateUser extends Component {
  state = { username: "" };

  onChangeUserName = e => {
    this.setState({ username: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = { username: this.state.username };
    console.log("New User Created...", newUser);
    axios
      .post("http://localhost:5000/users/add", newUser)
      .then(res => console.log(res.data));
    this.setState({ username: "" });
  };

  render() {
    return (
      <div className="container-inner">
        <h2>Create New User</h2>
        <form className="h-form" onSubmit={this.onSubmit}>
          <label className="h-label">Username</label>
          <input
            className="h-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChangeUserName}
          />
          <div className="spacer10" />
          <button type="submit">Create New User</button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
