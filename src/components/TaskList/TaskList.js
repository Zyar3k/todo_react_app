import React from "react";
import Task from "../Task/Task";
import "./TaskList.scss";

const TaskList = (props) => {
  // console.log(props.tasks.length);
  let activeTasks = props.tasks.filter((task) => task.active);
  let doneTasks = props.tasks.filter((task) => !task.active);
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
        <h2>activ TaskList ({activeTasks.length})</h2>
        {activeTasks.length > 0 ? activeTasks : <h1>0 tasks</h1>}
      </div>
      <div className="doneTasks">
        <h2>done TaskList ({doneTasks.length})</h2>
        {doneTasks.length > 3 && <span>Only 3 last tasks</span>}
        {doneTasks.slice(0, 3)} {/* ??? */}
      </div>
    </div>
  );
};

export default TaskList;
