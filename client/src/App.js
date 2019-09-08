import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercisesList.component";
import EditExercise from "./components/editExercise.component";
import CreateExercise from "./components/createExercise.component";
import CreateUser from "./components/createUser.component";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container-outer">
        <h2>Exercise Tracker</h2>
        <Navbar />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
