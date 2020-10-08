import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import "./App.scss";

class App extends React.Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Zadanie 0",
        date: "2020-01-01",
        highImportant: true,
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Zadanie 1",
        date: "2020-02-20",
        highImportant: false,
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Zadanie 2",
        date: "2020-12-03",
        highImportant: false,
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Zadanie 3",
        date: "2020-03-04",
        highImportant: false,
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 4,
        text: "Zadanie 4",
        date: "2020-05-05",
        highImportant: true,
        important: false,
        active: false,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete"+id);
  };
  changeTaskStatus = (id) => {
    console.log("change"+id);
  };
  render() {
    return (
      <div className="App">
        <h1>ToDO List</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
