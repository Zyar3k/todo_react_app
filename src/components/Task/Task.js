import React from "react";
import "./Task.scss";

const Task = (props) => {

  const importantStyle = { border: "4px solid #2e8b57", background: '#2e8b5680' };

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
      <div className="taskBox"
        style={
          important
            ? importantStyle
            : null
        }
      >
        <div className="text">{text}</div>

        <div className='utility'>
          <div className="dateActiv">{date}</div>
          <span>
            <i onClick={() => props.change(id)} className="fas fa-check-double btnDone"></i>
            <i onClick={() => props.delete(id)} className="far fa-times-circle deleteBtn"></i>
          </span>
        </div>
      </div>
    );
  } else {
    const finishTask = new Date(finishDate).toLocaleString();
    return (
      <div className="taskBox done">
        <div className="text done">{text}</div>
        <div className='utility done'>
          <div className="date">Termin {date}</div>
          <div className="confirmDate done">Potwierdzenie wykonania {finishTask}</div>
          <i onClick={() => props.delete(id)} className="far fa-times-circle deleteBtn"></i>
        </div>
      </div>
    );
  }
};

export default Task;
