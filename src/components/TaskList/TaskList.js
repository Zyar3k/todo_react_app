import React from "react";
import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = (props) => {
  let activeTasks = props.tasks.filter((task) => task.active);
  let doneTasks = props.tasks.filter((task) => !task.active);

  if(activeTasks.length >=2){
    activeTasks.sort((a,b) => {
      a= a.text.toLowerCase();
      b= b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
        return 0
    })
  }

  doneTasks.sort((a,b)=> b.finishDate - a.finishDate);

  activeTasks = activeTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  doneTasks = doneTasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <div>
      <div className="activeTasks">
        {activeTasks.length > 0? <div>
          <h2>Aktywne zadania <em>({activeTasks.length})</em></h2>
        </div> : null}
        {activeTasks.length > 0 ? activeTasks : <h1 className="addTaskInfo">Dodaj nowe zadanie</h1>}
      </div>
      <div className="doneTasks">
        <h3>Ukończone zadania <em>({doneTasks.length})</em></h3>
        {doneTasks.length > 3 && <span>Wyświetlane ostatnie pięć wykonanych zadań</span>}
        <span className='taskList'>{doneTasks.slice(0, 5)}</span>
      </div>
    </div>
  );
};

export default TaskList;
