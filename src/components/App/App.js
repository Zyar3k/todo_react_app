import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import "./App.scss";

class App extends React.Component {
  counter = 9
  state = {
    tasks: [
      {
        id: 0,
        text: "Przeczytać 10% książek z mojej listy",
        date: "2020-12-31",
        highImportant: true,
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Awansować do LM",
        date: "2020-12-13",
        highImportant: false,
        important: false,
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
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  doneTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
      this.setState({
        tasks,
      });
    });
    console.log("change" + id);
  };


  addNewTask = (text, date, important) => {
    console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null
    }

    this.counter++;
    console.log(task, this.counter);
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true

  }
  render() {
    return (
      <div className="App">
        <h1>Zadania do zrealizowania</h1>
        <AddTask add={this.addNewTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.doneTask}
        />
      </div>
    );
  }
}

export default App;
