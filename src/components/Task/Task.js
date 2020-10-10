import React from "react";
import "./Task.scss";

const Task = (props) => {

  const importantStyle = { background: "#2e8b57", fontWeight: "bold"};

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

        <div className='utility'>
          <div className="dateActiv">{date}</div>
          <button onClick={() => props.change(id)} className='btnDone'>Wykonane</button>
          <button onClick={() => props.delete(id)} className="deleteBtn">
            X
          </button>
        </div>
      </div>
    );
  } else {
    const finishTask = new Date(finishDate).toLocaleString();
    return (
      <div className="doneTaskBox">
        <div className="text">{text}</div>
        <div className='taskInfo'>

          <div className="date">Zakładany termin {date}</div>
          <div className="confirmDate">Potwierdzenie wykonania {finishTask}</div>
          <button onClick={() => props.delete(id)} className="deleteBtn">
            X
          </button>
        </div>
      </div>
    );
  }
};

export default Task;
