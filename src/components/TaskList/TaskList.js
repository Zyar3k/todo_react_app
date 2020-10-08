import React from "react";
import Task from "../Task/Task";

const TaskList = (props) => {
  // console.log(props.tasks.length);
  const tasks = props.tasks.map((task) => (
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
        <h2>activ TaskList (0)</h2>
        {tasks}
      </div>
      <div className="doneTasks">
        <h2>done TaskList (0)</h2>
      </div>
    </div>
  );
};

export default TaskList;
