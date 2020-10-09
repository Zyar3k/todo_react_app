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
        <h2>Aktywne zadania <em>({activeTasks.length})</em></h2>
        <div className='infoRow'>
          <div>zadanie</div>
          <div>termin</div>
          <div>akcja</div>
        </div>
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
