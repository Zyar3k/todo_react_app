import React from "react";
import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = ({ tasks, deleteTask, change }) => {
  let activeTasks = tasks.filter((task) => task.active);
  let doneTasks = tasks.filter((task) => !task.active);

  if (activeTasks.length >= 2) {
    activeTasks.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0
    })
  }

  doneTasks.sort((a, b) => b.finishDate - a.finishDate);

  activeTasks = activeTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={deleteTask}
      change={change}
    />
  ));

  doneTasks = doneTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={deleteTask}
      change={change}
    />
  ));

  // active section
  const activeTasksElements = (
    activeTasks.length > 0 ?
      <div>
        <h2>Aktywne zadania <em>({activeTasks.length})</em></h2>
      </div>
      : null
  );

  const activeTasksElementsCondition = (
    activeTasks.length > 0 ? activeTasks : <h1 className="addTaskInfo">Dodaj nowe zadanie</h1>
  );

  // done section
  const numberOfTasks = doneTasks.length;

  const doneTasksElement = (
    doneTasks.length > 5 && <span>Wyświetlane ostatnie pięć wykonanych zadań</span>
  );

  const cutList = doneTasks.slice(0, 5);

  return (
    <div>
      <div className="activeTasks">
        {activeTasksElements}
        {activeTasksElementsCondition}
      </div>
      <div className="doneTasks">
        <h3>Ukończone zadania <em>({numberOfTasks})</em></h3>
        {doneTasksElement}
        <span className='taskList'>{cutList}</span>
      </div>
    </div>
  );
};

export default TaskList;
