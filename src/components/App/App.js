import React from "react";
import AddTask from "../AddTask/AddTask";
import TaskList from "../TaskList/TaskList";
import "./App.scss";
import Logo from '../../logo.png';

class App extends React.Component {
  counter = 5;
  state = {
    tasks: [
      {
        id: 0,
        text: "Przeczytać 10% książek z mojej listy",
        date: "2020-12-31",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Kupić mleko - mój priorytet",
        date: "2020-12-13",
        important: true,
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
    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))
    return true

  };

  render() {
    const { addNewTask, deleteTask, doneTask } = this;

    return (
      <div className="app">
        <span className='header'>
          <img src={Logo} alt="logo-todo" />
          <AddTask add={addNewTask} />
        </span>
        <TaskList
          tasks={this.state.tasks}
          deleteTask={deleteTask}
          change={doneTask}
        />
      </div>
    );
  }
}

export default App;
