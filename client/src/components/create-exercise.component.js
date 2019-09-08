import React, { Component } from "react";

class CreateExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: []
  };

  componentDidMount() {
    this.setState({ users: ["test user"], username: "test user" });
  }

  onChangeUserName = e => {
    this.setState({ username: e.target.value });
    // console.log(this.state);
  };

  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeDuration = e => {
    this.setState({ duration: e.target.value });
  };

  onChangeDate = e => {
    this.setState({ date: "date" });
  };

  onSubmit = e => {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    };
    console.log(exercise);
    window.location = "/";
  };

  render() {
    return (
      <div className="container-inner">
        <h2>Create New Exercise Log</h2>
        <form className="h-form" onSubmit={this.onSubmit}>
          <label className="h-label">User Name</label>
          <input
            className="h-input"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.onChangeUserName}
          />
          <label className="h-label">Description</label>
          <input
            className="h-input"
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.onChangeDescription}
          />
          <label className="h-label">Duration</label>
          <input
            className="h-input"
            type="text"
            name="duration"
            value={this.state.duration}
            onChange={this.onChangeDuration}
          />
          <label className="h-label">Date</label>
          <input
            className="h-input"
            type="text"
            name="date"
            value={this.state.date}
            onChange={this.onChangeDate}
          />
          <div className="spacer10" />
          <button type="submit">Create New Entry</button>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
