import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ToDO List</h1>
        <AddTask />
        <TaskList />
      </div>
    );
  }
}

export default App;
