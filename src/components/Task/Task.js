import React from "react";
import "./Task.scss";

const Task = (props) => {
  // console.log(props);

  const importantStyle = { color: "orange" };
  const highImportantStyle = { color: "red" };

  const {
    text,
    date,
    id,
    active,
    important,
    highImportant,
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
              : null || highImportant
              ? highImportantStyle
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
