import React, { Component } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

class CreateExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: []
  };

  componentDidMount() {
    // this.setState({ users: ["test user"], username: "test user" });
    axios
      .get("http://localhost:5000/users/")
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.username),
            username: response.data[0].username
          });
        }
      })
      .catch(err => console.log(err));
  }

  onChangeUserName = e => {
    this.setState({ username: e.target.value });
    console.log(this.state.users);
  };

  onChangeDescription = e => {
    this.setState({ description: e.target.value });
  };

  onChangeDuration = e => {
    this.setState({ duration: e.target.value });
  };

  onChangeDate = date => {
    this.setState({ date: date });
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
    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then(res => console.log(res.data));
    window.location = "/";
  };

  render() {
    const usersList = this.state.users.map((entry, index) => (
      <option key={index} value={entry}>
        {entry}
      </option>
    ));
    console.log("Render Users: ", this.state);

    return (
      <div className="container-inner">
        <h2>Create New Exercise Log</h2>
        <form className="h-form" onSubmit={this.onSubmit}>
          <label className="h-label">User Name</label>

          <select name="username" onChange={this.onChangeUserName}>
            {usersList}
          </select>
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
          <DatePicker selected={this.state.date} onChange={this.onChangeDate} />

          <div className="spacer10" />
          <button type="submit">Create New Entry</button>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
