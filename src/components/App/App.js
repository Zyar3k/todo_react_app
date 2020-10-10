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
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Sprzedać 2 konie",
        date: "2020-12-13",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Chodzić na rękach",
        date: "2020-12-03",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Zjeść 10 kg jabłek",
        date: "2020-09-30",
        important: false,
        active: false,
        finishDate: '10.10.2020, 20:31:05',
      },
      {
        id: 4,
        text: "Ukończyć aplikację ToDo w React",
        date: "2020-10-15",
        important: false,
        active: false,
        finishDate: '10.10.2020, 18:43:47',
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
      <div className="app">
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
