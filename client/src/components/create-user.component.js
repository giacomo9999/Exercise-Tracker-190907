import React, { Component } from "react";

class CreateUser extends Component {
  state = { username: "" };

  onChangeUserName = e => {
    this.setState({ username: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newUser = { username: this.state.username };
    console.log("New User Created...", newUser);
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
