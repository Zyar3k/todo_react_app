import React from "react";
import "./Task.scss";

const Task = (props) => {

  const importantStyle = { color: "red" };

  const {
    text,
    date,
    id,
    active,
    important,
    finishDate,
  } = props.task;

  if (active) {
    return (
      <div className="taskBox">
        <div
          className="text"
          style={
            important
              ? importantStyle
              : null
          }
        >
          {text}
        </div>
        <div className="date">termin-{date}</div>
        <button onClick={() => props.change(id)}>Zrobione</button>
        <button onClick={() => props.delete(id)} className="deleteBtn">
          X
        </button>
      </div>
    );
  } else {
    const finishTask = new Date(finishDate).toLocaleString();
    return (
      <div className="taskBox">
        <div className="text">{text}</div>
        <div className="date">termin -{date}</div>
        <div className="date">wykonano - {finishTask}</div>
        <button onClick={() => props.delete(id)} className="deleteBtn">
          X
        </button>
      </div>
    );
  }
};

export default Task;
