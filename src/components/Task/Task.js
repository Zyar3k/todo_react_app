import React from "react";
import "./Task.scss";

const Task = (props) => {
  console.log(props);

  const { text, date, id } = props.task;

  return (
    <div className="taskBox">
      <div className="text">{text}</div>
      <div className="date">{date}</div>
      <button onClick={() => props.change(id)}>Zrobione</button>
      <button onClick={() => props.delete(id)} className="deleteBtn">
        X
      </button>
    </div>
  );
};

export default Task;
